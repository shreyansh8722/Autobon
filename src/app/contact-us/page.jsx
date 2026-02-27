"use client";
import React, { useState } from "react";
import { Phone, MapPin, ChevronDown, CheckCircle } from "lucide-react";
import contactImage from "../../assets/contact-us.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ContactPage = () => {
  const pathname = usePathname();
  const [expandedFaq, setExpandedFaq] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    category: "Select",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleFaqClick = (e) => {
    if (pathname === "/finance") {
      e.preventDefault();
      const element = document.getElementById("faq");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^\S+@\S+\.\S+$/))
      newErrors.email = "Valid email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (formData.category === "Select")
      newErrors.category = "Please select a category";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        setLoading(false);
        setIsSubmitted(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          category: "Select",
          message: "",
        });
      }, 1500);
    }
  };

  const faqData = [
    {
      category: "General",
      questions: [
        {
          question: "How does Autobon work?",
          answer:
            "Autobon is an online car buying platform that allows you to browse, finance, and purchase vehicles entirely online with home delivery.",
        },
        {
          question: "Are Autobon cars certified?",
          answer:
            "Yes, all Autobon vehicles undergo a rigorous 150-point inspection and come with a comprehensive vehicle history report.",
        },
        {
          question: "Does Autobon charge any fees?",
          answer:
            "There are no hidden fees. The price you see includes all taxes and documentation fees.",
        },
      ],
    },
    {
      category: "Financing",
      questions: [
        {
          question: "Will I get approved for a car loan?",
          answer:
            "We work with multiple lenders to help you secure financing. Our approval rates are high.",
        },
      ],
    },
  ];

  const toggleFaq = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setExpandedFaq((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const locationSections = [
    {
      state: "Ontario",
      items: [
        {
          name: "Sales Office",
          address: "311 Hopkins St #5, Whitby, ON L1N 2C1",
        },
        {
          name: "Corporate Headquarters & Vehicle Storage",
          address: "675 Garyray Dr, North York, ON M9L 1R2",
        },
      ],
    },
  ];

  return (
    <div className="w-full font-sans">
      {/* 1. CONTACT SECTION */}
      <section className="bg-[#F3F3F3] w-full">
        <div className="max-w-[1200px] mx-auto py-16 md:py-24 px-4 lg:px-0">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-12 gap-10">
            <div className="flex-1">
              <h1 className="text-[42px] md:text-[56px] font-bold text-[#383838] leading-tight mb-4">
                Contact Us
              </h1>
              <h2 className="text-[28px] md:text-[36px] font-bold text-[#383838 ] leading-tight">
                Got a question? We're <br className="hidden md:block" /> here to
                help.
              </h2>
            </div>
            <div className="flex-1  w-full lg:max-w-[600px]">
              <img
                src={contactImage.src}
                alt="Autobon Delivery"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row relative md:-top-30 gap-16 lg:gap-24 items-start">
            <div className="flex-1 w-full">
              {isSubmitted ? (
                <div className="bg-white p-10 rounded-lg shadow-sm flex flex-col items-center text-center gap-4 border border-green-100 max-w-[500px]">
                  <CheckCircle size={60} className="text-green-500" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Thanks for Contacting Autobon
                  </h3>
                  <p className="text-gray-600">
                    We will reach out to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-[#1A6ADB] font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6 max-w-[500px]"
                >
                  {["Name", "Phone", "Email"].map((label) => (
                    <div key={label} className="flex flex-col gap-2">
                      <label className="text-[14px] font-bold text-[#5B5C5D]">
                        {label}
                      </label>
                      <input
                        type={label === "Email" ? "email" : "text"}
                        value={formData[label.toLowerCase()]}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [label.toLowerCase()]: e.target.value,
                          })
                        }
                        className={`w-full px-4 py-3 rounded-[4px] bg-[#F7F8F9] border-[#000000A1] h-[54px] border ${errors[label.toLowerCase()] && "border-red-500"}`}
                      />
                      {errors[label.toLowerCase()] && (
                        <span className="text-red-500 text-xs">
                          {errors[label.toLowerCase()]}
                        </span>
                      )}
                    </div>
                  ))}

                  <div className="flex flex-col gap-2 relative">
                    <label className="text-[14px] font-bold text-[#5B5C5D]">
                      What can we help you with?
                    </label>
                    <div className="relative">
                      <select
                        value={formData.category}
                        onChange={(e) =>
                          setFormData({ ...formData, category: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-[4px] bg-[#F7F8F9] border border-[#000000A1] appearance-none cursor-pointer h-[54px] ${formData.category === "Select" ? "text-gray-400" : "text-black"} ${errors.category && "border-red-500"}`}
                      >
                        <option>Select</option>
                        <option>Sales</option>
                        <option>Financing</option>
                        <option>Support</option>
                      </select>
                      <ChevronDown
                        size={18}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                      />
                    </div>
                    {errors.category && (
                      <span className="text-red-500 text-xs">
                        {errors.category}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-bold text-[#5B5C5D]">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-[4px] bg-[#F7F8F9] resize-none border border-[#000000A1]  ${errors.message && "border-red-500"}`}
                    />
                    {errors.message && (
                      <span className="text-red-500 text-xs">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#4079ED] text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Submit"}
                  </button>
                </form>
              )}
            </div>

            <div className="lg:w-[400px] relative md:top-25 flex flex-col gap-10 pt-4 lg:pt-0 text-left">
              <h3 className="text-[18px] font-bold text-[#5B5C5D] mb-0">
                Contact us directly
              </h3>
              <div className="flex flex-col gap-6 text-[#5B5C5D] text-[15px] font-medium leading-relaxed">
                <div>
                  <p>Monday - Friday 9 am - 9 pm EDT</p>
                  <p>Weekends 10 am - 6 pm EDT</p>
                </div>
                <p>
                  <a
                    href="tel:9058003100"
                    className="hover:text-blue-600 text-[#5B5C5D] transition-colors underline"
                  >
                    (905) 800-3100
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:support@autobon.ca"
                    className="hover:text-blue-600 text-[#5B5C5D] transition-colors underline"
                  >
                    support@autobon.ca
                  </a>
                </p>
                <button className="bg-[#4079ED] w-max text-white font-semibold py-2 px-8 rounded-full hover:bg-blue-700 transition-all">
                  Start live chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FAQ SECTION */}
      <section className="bg-[#F3F3F3] w-full pb-24">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-0">
          <h2 className="text-[26px] md:text-[32px] font-bold text-center text-[#5B5C5D] mb-16">
            We're happy to help
          </h2>
          <div className="flex flex-col gap-16">
            {faqData.map((section, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-[20px] font-bold text-[#5B5C5D] mb-6 tracking-tight">
                  {section.category}
                </h3>
                <div className="flex flex-col border-t border-gray-300">
                  {section.questions.map((item, questionIndex) => {
                    const key = `${categoryIndex}-${questionIndex}`;
                    const isExpanded = expandedFaq[key];
                    return (
                      <div
                        key={questionIndex}
                        className={`border-b border-gray-300 transition-all ${isExpanded ? "" : ""}`}
                      >
                        <div
                          className="flex justify-between items-center py-6 px-2 cursor-pointer"
                          onClick={() =>
                            toggleFaq(categoryIndex, questionIndex)
                          }
                        >
                          <span className="text-[#5B5C5D] text-[16px] font-medium">
                            {item.question}
                          </span>
                          <ChevronDown
                            size={20}
                            className={`text-gray-400 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                          />
                        </div>
                        {isExpanded && (
                          <div className="px-2 pb-6">
                            <p className="text-[#5B5C5D] text-[15px] leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
            <div className="flex justify-center mt-4">
              <Link
                href="/finance#faq"
                onClick={handleFaqClick}
                className="bg-[#1A6ADB] text-white px-10 py-4 rounded-full font-bold text-[16px] hover:bg-blue-700 transition-colors"
              >
                View all FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LOCATIONS SECTION */}
      <section className="bg-[#F3F3F3] w-full border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto py-24 px-4 lg:px-0">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#5B5C5D] mb-12">
            Our Locations
          </h2>
          <div className="flex flex-col gap-20">
            {locationSections.map((section, sIdx) => (
              <div
                key={sIdx}
                className={
                  sIdx !== locationSections.length - 1
                    ? "border-b border-gray-200 pb-20"
                    : ""
                }
              >
                <h3 className="text-[22px] font-bold text-[#5B5C5D] mb-10">
                  {section.state}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12">
                  {section.items.map((loc, i) => (
                    <div key={i}>
                      <h4 className="font-bold text-[17px] text-[#5B5C5D] mb-2">
                        {loc.name}
                      </h4>
                      <p className="text-[#5B5C5D] text-[15px] leading-relaxed">
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
