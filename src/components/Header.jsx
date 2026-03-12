"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, Timer } from "lucide-react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [timeLeft, setTimeLeft] = useState(31 * 60); // 31 minutes in seconds
  const pathname = usePathname();
  const isCheckoutPage = pathname === "/checkout";

  // Check if current route is dashboard or shop
  const isDashboardOrShop = pathname === "/dashboard" || pathname === "/shop";

  // Countdown timer effect
  useEffect(() => {
    if (!isCheckoutPage) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isCheckoutPage]);

  // Format time to MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const navLinks = [
    {
      name: "Buy Cars",
      href: "/shop",
      desc: "Find your perfect vehicle today",
    },
    {
      name: "Sell or Trade",
      href: "/sell-or-trade",
      desc: "Get the best value for your car",
    },
    {
      name: "Financing",
      href: "/finance",
      desc: "Simple and fast loan approvals",
    },
  ];

  // Don't render anything if on dashboard or shop routes
  if (isDashboardOrShop) {
    return null;
  }

  return (
    <>
      {/* 1. Promotion Banner */}
      {showBanner && (
        <div className="w-full bg-primary">
          <div className="max-w-custom mx-auto flex items-center justify-center py-[16px] px-[20px] relative">
            <p className="text-[16px] sm:text-[18px] text-white font-medium text-center">
              <a href="/pre-qualify" className="font-medium underline">
                The BEST car
              </a>
              &nbsp; deals in Canada.
            </p>
            <button
              onClick={() => setShowBanner(false)}
              className="absolute text-white right-4 p-1 hover:opacity-60 transition-opacity"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}

      {/* 2. Header */}
      <header className="w-full h-[50px] md:h-[70px] shadow-[0px_4px_23px_0px_#0000000F] bg-white sticky top-0 z-[100]">
        <div className="max-w-custom h-full mx-auto flex items-center justify-between px-[20px] lg:px-[0px]">
          {/* Logo Area */}
          <a href="/" className="flex justify-start items-center">
            <img
              src="/logo.png"
              alt="Autobon Logo"
              width={320}
              height={60}
              className="object-contain w-[100px] h-[40px] md:w-[160px] md:h-[40px]"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden sm:block">
            <ul className="flex cursor-pointer gap-[40px] text-nowrap text-[16px] text-black justify-center items-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="transition-colors duration-300 hover:text-primary active:text-primary hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Sign In Button with Timer (only on checkout page) */}
          <div className="hidden sm:flex items-center gap-4">
            {isCheckoutPage && (
              <div className="flex items-center gap-2 text-primary px-4 py-2 ">
                <Timer size={23} className="animate-pulse" />
                <span className="font-mono font-semibold text-[15px]">
                  {formatTime(timeLeft)}
                </span>
              </div>
            )}
            <a
              href="/login"
              className="flex items-center justify-center text-black px-8 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Sign In
            </a>
          </div>

          {/* Burger Toggle */}
          <button className="sm:hidden p-2" onClick={() => setIsOpen(true)}>
            <Menu size={20} />
          </button>
        </div>

        {/* Backdrop Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 transition-opacity duration-300 sm:hidden z-[1] ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* MOBILE MENU SLIDE-OUT */}
        <div
          className={`fixed top-0 right-0 h-full w-[320px] bg-white z-[120000] shadow-2xl transform transition-transform duration-300 ease-in-out sm:hidden flex flex-col ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Autobon Logo"
                width={220}
                height={40}
                className="object-contain w-[80px] h-[30px] sm:w-[220px] sm:h-[40px]"
              />
              {isCheckoutPage && (
                <div className="flex items-center gap-1  text-primary px-3 py-1 ">
                  <Timer size={14} className="animate-pulse" />
                  <span className="font-mono font-bold text-[12px]">
                    {formatTime(timeLeft)}
                  </span>
                </div>
              )}
            </div>
            <div className="flex items-center gap-2">
              <a
                href="/login"
                className="text-[16px] font-medium bg-black text-white px-6 py-2 rounded-full"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </a>
              <button onClick={() => setIsOpen(false)} className="p-1">
                <X size={24} className="text-gray-500" />
              </button>
            </div>
          </div>

          {/* Mobile Links */}
          <div className="h-max overflow-y-auto p-5 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block p-4 rounded-[5px] transition-all active:scale-[0.98] border border-primary bg-primary/10"
              >
                <span className="block text-[16px] font-medium text-black">
                  {link.name}
                </span>
                <span className="block text-[11px] text-text mt-1">
                  {link.desc}
                </span>
              </a>
            ))}
          </div>

          {/* Mobile Bottom Area */}
          <div className="p-5 flex-1 border-t border-gray-100">
            {isCheckoutPage && (
              <div className="mb-4 p-3  rounded-lg">
                <div className="flex items-center justify-center gap-2 text-primary font-medium">
                  <Timer size={16} className="animate-pulse" />
                  <span className="font-mono font-bold">
                    Time left: {formatTime(timeLeft)}
                  </span>
                </div>
              </div>
            )}
            <a
              href="/contact-us"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center bg-primary text-white py-4 rounded-full font-semibold shadow-lg shadow-primary/20"
            >
              Contact Us
            </a>
            <div className="mt-[3rem] flex justify-center items-center gap-2 flex-col">
              <p className="text-sm">24/7 Support</p>
              <a
                href="tel:9058003100"
                className="text-primary hover:underline lg:ml-2"
              >
                905-800-3100
              </a>{" "}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
