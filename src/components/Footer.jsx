"use client";
import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const footerData = [
    {
      title: "Browse Popular Models",
      type: "model",
      links: [
        "Honda Civic",
        "Toyota Corolla",
        "Hyundai Elantra",
        "Toyota RAV4",
        "Nissan Rogue",
        "Honda CR-V",
        "Tesla Model 3",
        "Mazda CX-5",
        "Kia Forte",
        "Toyota Camry",
        "Mazda Mazda3",
        "View More",
      ],
    },
    {
      title: "Browse by Body Style",
      type: "body",
      links: [
        "SUV",
        "Sedan",
        "Hatchback",
        "Wagon",
        "Truck",
        "Van",
        "Coupe",
        "Convertible",
        "View More",
      ],
    },
    {
      title: "Browse by Location",
      type: "location",
      links: [
        "Used Cars in Toronto, ON",
        "Used Cars in Brampton, ON",
        "Used Cars in Mississauga, ON",
        "Used Cars in Markham, ON",
        "Used Cars in Ottawa, ON",
        "Used Cars in Hamilton, ON",
        "Used Cars in London, ON",
        "Used Cars in Oshawa, ON",
        "Used Cars in Kitchener, ON",
        "Used Cars in Newmarket, ON",
        "View More",
      ],
    },
    {
      title: "Sell My Car",
      type: "sell",
      links: [
        "Sell My Car in Toronto",
        "Sell My Car in Mississauga",
        "Sell My Car in London",
        "Sell My Car in Ottawa",
        "Sell My Car in Kitchener",
        "Sell My Car in Hamilton",
        "Sell My Car in Halifax",
        "Sell My Car in Vancouver",
      ],
    },
    {
      title: "Explore",
      type: "page",
      links: [
        "Home",
        "Shop cars",
        "Sell or Trade",
        "Finance",
        "Get Pre-Approved",
        "FAQ",
      ],
    },
    {
      title: "Company",
      type: "page",
      links: ["About AUTOBON"],
    },
    {
      title: "Contact Us",
      type: "contact",
      links: [
        "Chat with us",
        "Call us at (905) 800-3100",
        "Email us at info@autobon.ca",
        "Any Car, Any Where",
      ],
    },
  ];

  const handleFaqClick = (e) => {
    if (window.location.pathname === "/finance") {
      e.preventDefault();
      const element = document.getElementById("faq");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  // Helper function to generate URLs
  const getHref = (link, type) => {
    // Specific Overrides
    if (link === "FAQ") return "/finance#faq";
    if (link === "View More" || link === "Shop cars") return "/shop";
    if (link === "Home") return "/";

    // Clean string for URL
    const query = encodeURIComponent(link);

    switch (type) {
      case "model":
        return `/shop?model=${query}`;
      case "body":
        return `/shop?body_style=${query}`;
      case "location":
        return `/shop?location=${query}`;
      case "sell":
        return `/shop?location=${query}`;
      case "page":
        return `/${link.toLowerCase().replace(/\s+/g, "-")}`;
      default:
        return "#";
    }
  };

  return (
    <footer className="w-full py-16 px-6 border-t border-gray-100 bg-white">
      <div className="max-w-[1200px] mx-auto flex flex-col">
        {/* 1. LOGO */}
        <div className="mb-12 md:mb-[100px] flex justify-center">
          <Link href="/">
            <img
              src="/logo.png"
              alt="Autobon Logo"
              className="h-[50px] w-auto object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* 2. GRID SYSTEM */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          {footerData.map((section, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-3 items-start text-left"
            >
              <h4 className="font-semibold text-black mb-1">{section.title}</h4>
              <div className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <Link
                    key={link}
                    href={getHref(link, section.type)}
                    onClick={link === "FAQ" ? handleFaqClick : undefined} // Add this
                    className={`text-[#595959] ${section.title === "Contact Us" ? "text-nowrap" : ""} text-[14px] hover:text-black transition-colors`}
                  >
                    {link}
                  </Link>
                ))}
              </div>

              {section.title === "Contact Us" && (
                <div className="flex gap-4 mt-4">
                  <Facebook
                    fill="currentColor"
                    className="w-5 h-5 text-black hover:text-primary cursor-pointer transition-colors"
                  />
                  <Instagram className="w-5 h-5 text-black hover:text-primary cursor-pointer transition-colors" />
                  <Twitter
                    fill="currentColor"
                    className="w-5 h-5 text-black hover:text-primary cursor-pointer transition-colors"
                  />
                  <Linkedin
                    fill="currentColor"
                    className="w-5 h-5 text-black hover:text-primary cursor-pointer transition-colors"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 3. BOTTOM CREDITS */}
        <div className="w-full flex flex-col items-center border-t border-gray-100 pt-8">
          <p className="text-black text-[14px] mb-4 text-center">
            © 2026 AUTOBON. All Rights Reserved.
          </p>
          <div className="text-[12px] md:text-[14px] text-black font-medium flex flex-wrap justify-center items-center gap-x-3 gap-y-2 max-w-4xl">
            <Link href="/terms-of-use" className="hover:underline">
              Terms of Use
            </Link>
            <span className="text-gray-300 hidden md:inline">|</span>
            <Link href="/website-terms" className="hover:underline">
              Website Terms
            </Link>
            <span className="text-gray-300 hidden md:inline">|</span>
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <span className="text-gray-300 hidden md:inline">|</span>
            <Link href="/cookies" className="hover:underline">
              Cookies
            </Link>
            <span className="text-gray-300 hidden md:inline">|</span>
            <Link href="/disclaimer" className="hover:underline">
              Disclaimer
            </Link>
            <span className="text-gray-300 hidden md:inline">|</span>
            <Link href="/pricing-policy" className="hover:underline">
              Pricing Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
