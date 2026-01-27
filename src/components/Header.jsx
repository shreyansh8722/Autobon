"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

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
    // {
    //   name: "Contact Us",
    //   href: "/contact-us",
    //   // desc: "",
    // },
    // {
    //   name: "About Us",
    //   href: "/#",
    //   // desc: "Simple and fast loan approvals",
    // },
    // {
    //   name: "Rental",
    //   href: "/rental",
    //   desc: "Flexible car rentals for any trip",
    // },
    // {
    //   name: "How it Works",
    //   href: "/sell-or-trade#howItWorks",
    //   desc: "The Autobon process explained",
    // },
  ];

  return (
    <>
      {/* 1. Promotion Banner */}
      {showBanner && (
        <div className="w-full bg-primary">
          <div className="max-w-custom mx-auto flex items-center justify-center py-[16px] px-[20px] relative">
            <p className="text-[10px] sm:text-[16px] text-white font-medium text-center">
              <a href="/finance" className="font-medium underline">
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

          {/* Desktop Sign In Button */}
          <a
            href="/signin"
            className="hidden sm:flex items-center justify-center text-black px-8 py-2 rounded-full font-semibold transition-all duration-300  hover:scale-105 active:scale-95"
          >
            Sign In
          </a>

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
              <a
                href="/signin"
                className="text-[12px] font-medium bg-black text-white px-3 py-1.5 rounded-full"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </a>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1">
              <X size={24} className="text-gray-500" />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="h-max overflow-y-auto p-5 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block p-4  rounded-[5px] transition-all active:scale-[0.98] border border-primary bg-primary/10"
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
            <a
              href="/contact-us"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center bg-primary text-white py-4 rounded-full font-semibold  shadow-lg shadow-primary/20"
            >
              Contact Us
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
