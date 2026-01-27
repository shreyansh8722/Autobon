import React from "react";
import { Phone, MapPin, ChevronDown } from "lucide-react";
import contactImage from "../../assets/contact-us.png";

const ContactPage = () => {
  const faqData = [
    {
      category: "General",
      questions: [
        "How does Autobon work?",
        "Are Autobon cars certified?",
        "Does Autobon charge any fees?",
      ],
    },
    {
      category: "Financing",
      questions: [
        "Will I get approved for a car loan?",
        "How does submitting an application work?",
        "How do I know what my interest rate will be?",
      ],
    },
    {
      category: "Sell or Trade",
      questions: [
        "Why sell to Autobon?",
        "How do I get paid?",
        "How does my auto loan get paid off?",
      ],
    },
  ];

  // Grouped location data to match the repeated Ontario sections in your image
  const locationSections = [
    {
      state: "Ontario",
      items: [
        {
          name: "Production and Pick-Up Facility",
          address: "223 Evans Avenue Toronto, ON, M8Z 1J6",
        },
        {
          name: "Warehouse Facility and Vehicle Storage",
          address: "3350 Wolfedale Road Mississauga, ON, L5C 1W4",
        },
        {
          name: "Warehouse Facility and Vehicle Storage",
          address: "5000 Highway 7 Markham, ON, L3R 4M9",
        },
        {
          name: "Corporate Headquarters",
          address: "60 Adelaide Street East Toronto, ON, M5C 3E4",
        },
      ],
    },
    {
      state: "Ontario",
      items: [
        {
          name: "Production and Pick-Up Facility",
          address: "223 Evans Avenue Toronto, ON, M8Z 1J6",
        },
        {
          name: "Warehouse Facility and Vehicle Storage",
          address: "3350 Wolfedale Road Mississauga, ON, L5C 1W4",
        },
      ],
    },
    {
      state: "Ontario",
      items: [
        {
          name: "Production and Pick-Up Facility",
          address: "223 Evans Avenue Toronto, ON, M8Z 1J6",
        },
      ],
    },
  ];

  return (
    <div className="w-full font-sans">
      {/* 1. CONTACT SECTION (WHITE) */}
      <section className="bg-white w-full">
        <div className="max-w-[1200px] mx-auto py-16 md:py-24 px-4 lg:px-0">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-12 gap-10">
            <div className="flex-1">
              <h1 className="text-[42px] md:text-[56px] font-bold text-primary leading-tight mb-4">
                Contact Us
              </h1>
              <h2 className="text-[28px] md:text-[36px] font-bold text-primary leading-tight">
                Got a question? We're <br className="hidden md:block" /> here to
                help.
              </h2>
            </div>
            <div className="flex-1 w-full lg:max-w-[600px]">
              <img
                src={contactImage.src}
                alt="Autobon Delivery"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            <div className="flex-1 w-full">
              <form className="flex flex-col gap-8 max-w-[500px]">
                {["Name", "Phone", "Email"].map((label) => (
                  <div key={label} className="flex flex-col gap-2">
                    <label className="text-[14px] font-bold text-[#5B5C5D]">
                      {label}
                    </label>
                    <input
                      type={label === "Email" ? "email" : "text"}
                      className="w-full px-4 py-3 rounded-[4px] bg-[#F7F8F9] border-none outline-none h-[54px]"
                    />
                  </div>
                ))}
                <div className="flex flex-col gap-2 relative">
                  <label className="text-[14px] font-bold text-[#5B5C5D]">
                    What can we help you with?
                  </label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 rounded-[4px] bg-[#F7F8F9] border-none outline-none appearance-none cursor-pointer h-[54px] text-gray-400">
                      <option>Select</option>
                      <option>Sales</option>
                      <option>Financing</option>
                    </select>
                    <ChevronDown
                      size={18}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-bold text-[#5B5C5D]">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 rounded-[4px] bg-[#F7F8F9] border-none outline-none resize-none"
                  />
                </div>
              </form>
            </div>

            <div className="lg:w-[400px] flex flex-col gap-10 pt-4 lg:pt-0 text-left">
              <h3 className="text-[18px] font-bold text-[#5B5C5D] mb-6">
                Contact us directly
              </h3>
              <div className="flex flex-col gap-6 text-[#5B5C5D] text-[15px] font-medium leading-relaxed">
                <div>
                  <p>Monday - Friday 9 am - 9 pm EDT</p>
                  <p>Weekends 10 am - 6 pm EDT</p>
                </div>
                <p>(647) 955-5340</p>
                <p>support@autobon.ca</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FAQ SECTION (BACKGROUND COLOR) */}
      <section className="bg-[#F7F8F9] w-full border-y border-gray-200">
        <div className="max-w-[1200px] mx-auto py-24 px-4 lg:px-0">
          <h2 className="text-[32px] md:text-[40px] font-bold text-center text-[#5B5C5D] mb-16">
            We're happy to help
          </h2>
          <div className="max-w-[900px] mx-auto flex flex-col gap-16">
            {faqData.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-[20px] font-bold text-[#5B5C5D] mb-6 tracking-tight">
                  {section.category}
                </h3>
                <div className="flex flex-col border-t border-gray-300">
                  {section.questions.map((q, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-6 border-b border-gray-300 cursor-pointer hover:bg-white transition-colors px-2"
                    >
                      <span className="text-[#5B5C5D] text-[16px] font-medium">
                        {q}
                      </span>
                      <ChevronDown size={20} className="text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex justify-center mt-4">
              <button className="bg-primary text-white px-10 py-4 rounded-full font-bold text-[16px] hover:bg-blue-700 transition-colors">
                View all FAQs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR LOCATIONS SECTION (WHITE) */}
      <section className="bg-white w-full">
        <div className="max-w-[1200px] mx-auto py-24 px-4 lg:px-0">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#5B5C5D] mb-12">
            Our Locations
          </h2>

          <div className="flex flex-col justify-between  gap-20">
            {locationSections.map((section, sIdx) => (
              <div
                key={sIdx}
                className={
                  sIdx !== locationSections.length - 1
                    ? "border-b border-border  pb-20"
                    : ""
                }
              >
                <h3 className="text-[22px] font-bold text-[#5B5C5D] mb-10 tracking-tight">
                  {section.state}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12">
                  {section.items.map((loc, i) => (
                    <div key={i} className="">
                      <h4 className="font-bold  text-[17px] text-[#5B5C5D] mb-2 leading-snug">
                        {loc.name}
                      </h4>
                      <p className="text-[#5B5C5D] text-[15px] leading-relaxed whitespace-pre-line">
                        {loc.address}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
