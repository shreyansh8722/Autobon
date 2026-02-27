// "use client";
// import React, { useState } from "react";
// import CarsGrid from "@/components/CarsGrid";
// import Filters from "@/pages/ShopCars/Filter";
// import { SlidersHorizontal, X } from "lucide-react";

// const ShopPage = () => {
//   const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

//   return (
//     <div className="flex flex-col min-h-screen ">
//       <div className="flex p-4 lg:p-[40px] flex-col lg:flex-row">
//         {isMobileFilterOpen && (
//           <div className="fixed inset-0 z-[100] bg-white lg:hidden overflow-y-auto p-6">
//             <div className="flex justify-between items-center mb-6 border-b pb-4">
//               <h2 className="text-[20px] font-bold">Filters</h2>
//               <button
//                 onClick={() => setIsMobileFilterOpen(false)}
//                 className="p-2 bg-gray-100 rounded-full"
//               >
//                 <X size={24} />
//               </button>
//             </div>
//             <Filters />
//             <div className="sticky bottom-0 left-0 right-0 p-4 bg-white border-t mt-6">
//               <button
//                 onClick={() => setIsMobileFilterOpen(false)}
//                 className="w-full h-[50px] bg-primary text-white rounded-full font-bold"
//               >
//                 Show Results
//               </button>
//             </div>
//           </div>
//         )}

//         <aside className="hidden lg:block w-[280px] sticky top-0 h-screen overflow-y-auto border rounded-[5px] border-[#E3E3E3] bg-white p-6">
//           <Filters />
//         </aside>

//         <main className="flex-1 p-0 lg:p-10 lg:pr-0 lg:pt-0">
//           <CarsGrid onMobileFilterClick={() => setIsMobileFilterOpen(true)} />
//         </main>
//       </div>

//       {/* Why Buy From Autonbon Section */}
//       <section className=" p-6 text-[#6D6D6D]  lg:p-[80px]">
//         <div className=" mx-auto">
//           <h2 className="text-[28px] lg:text-[32px] text-black font-semibold mb-10">
//             Why Buy Your Next Car From Autobon?
//           </h2>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Left Column: Overview */}
//             <div>
//               <h3 className="text-black text-[20px] font-semibold mb-4">
//                 Overview
//               </h3>
//               <p className="leading-relaxed mb-6">
//                 Autobon isn’t a classifieds marketplace and it’s not a
//                 traditional dealership—
//                 <span className="font-semibold text-black">
//                   {" "}
//                   we own every vehicle we sell
//                 </span>
//                 . We purchase cars directly from their previous owners, then put
//                 each one through professional reconditioning and a meticulous
//                 210-point inspection so it meets our strict standards for
//                 quality and safety. By skipping auctions and middlemen, we
//                 deliver transparent pricing, quality vehicles, and zero
//                 surprises.
//               </p>

//               <ul className="space-y-4 ">
//                 <li>
//                   <span className="font-semibold text-black">
//                     Direct-from-owner sourcing
//                   </span>{" "}
//                   – Better vehicle histories and tighter quality control from
//                   day one.
//                 </li>
//                 <li>
//                   <span className="font-semibold text-black">
//                     In-house reconditioning
//                   </span>{" "}
//                   – Professional detailing, OEM-grade parts, and strict quality
//                   standards.
//                 </li>
//                 <li>
//                   <span className="font-semibold text-black">
//                     Convenient at-home delivery
//                   </span>{" "}
//                   – Pick a time and place, and we’ll bring the car to your door
//                   (delivery fees vary by location).
//                 </li>
//                 <li>
//                   <span className="font-semibold text-black">
//                     10-Day Money-Back Guarantee
//                   </span>{" "}
//                   – Drive it for up to 10 days or 750 km; return it if it’s not
//                   the right fit.
//                 </li>
//                 <li>
//                   <span className="font-semibold text-black">
//                     Optional 3-month warranty & additional protection plans
//                   </span>{" "}
//                   – Add extra coverage and roadside assistance for additional
//                   peace of mind.
//                 </li>
//               </ul>
//               <div className="my-20">
//                 <h3 className="text-[20px] font-semibold text-black mb-4">
//                   Potential Trade-offs
//                 </h3>
//                 <p className=" mb-6">
//                   Buying used offers big savings, but it’s smart to weigh a few
//                   considerations before you purchase.
//                 </p>
//                 <ul className="space-y-4 ">
//                   <li>
//                     <span className="font-semibold text-black">
//                       Previous Ownership History
//                     </span>{" "}
//                     – Every pre-owned vehicle has a unique story. Reviewing
//                     service records and vehicle-history reports helps you
//                     understand how the car was maintained.
//                   </li>
//                   <li>
//                     <span className="font-semibold text-black">
//                       Financing Rate Differences
//                     </span>{" "}
//                     – Auto loans for used cars sometimes carry higher APRs than
//                     promotional rates on new vehicles, but the lower purchase
//                     price keeps ownership cost in check.
//                   </li>
//                   <li>
//                     <span className="font-semibold text-black">
//                       Evolving Tech & Safety Features
//                     </span>{" "}
//                     – Older model years may not include the very latest
//                     driver-assistance suites or wireless updates found on
//                     brand-new releases.
//                   </li>
//                   <li>
//                     <span className="font-semibold text-black">
//                       High-Demand Models Sell Fast
//                     </span>{" "}
//                     – Popular picks like the Toyota RAV4 or Ford F-150 move
//                     quickly. If you spot the right fit, be ready to act.
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             {/* Right Column: Key Benefits & Trade-offs */}
//             <div className="space-y-12">
//               <div>
//                 <h3 className="text-black text-[20px] font-bold mb-4">
//                   Key Benefits
//                 </h3>
//                 <p className=" mb-6">
//                   Choosing a pre-owned vehicle lets you maximize value, upgrade
//                   features, and keep more money in your pocket from day one.
//                 </p>
//                 <ul className="space-y-4 ">
//                   <li>
//                     <span className="font-semibold text-black">
//                       Lower depreciation
//                     </span>{" "}
//                     – Skip the first-owner drop and lock in better resale value.
//                   </li>
//                   <li>
//                     <span className="font-semibold text-black">
//                       More car for your budget
//                     </span>{" "}
//                     – Stretch your dollar into a higher trim, luxury badge, or
//                     EV.
//                   </li>
//                   <li>
//                     <span className="font-semibold text-black">
//                       Proven reliability
//                     </span>{" "}
//                     – Research real-world owner reviews before you buy.
//                   </li>
//                   <li>
//                     <span className="font-semibold text-black">
//                       Lower insurance costs
//                     </span>{" "}
//                     – Premiums are typically lower on pre-owned vehicles.
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ShopPage;

"use client";

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

// Car images from uploaded photos
const CAR_IMGS = [
  "/images/c0e515790ae6cd243a0ae47e32ad732e993b78a2.png",
  "/images/eb30a4d65252692d4873d6b8a9fd07a49d03cca2.png",
  "/images/a3fcdda6786415d8d2e1e609eb1515fed34bf69d.png",
];

const CAR_TITLES = [
  "2020 Audi A3",
  "2022 Honda Civic",
  "2021 Kia Stinger",
  "2019 Tesla Model 3",
  "2021 Toyota RAV4",
  "2020 BMW 3 Series",
  "2021 Mercedes-Benz C-Class",
  "2020 Mazda CX-5",
  "2018 Ford Mustang",
  "2022 Hyundai Elantra",
  "2021 Subaru Crosstrek",
  "2019 Jeep Wrangler",
  "2021 Nissan Rogue",
  "2018 Chevrolet Silverado 1500",
  "2020 Volkswagen Golf",
  "2023 Tesla Model Y",
  "2021 Porsche Macan",
  "2022 Lexus IS 350",
  "2020 GMC Sierra 1500",
  "2021 Honda CR-V",
  "2019 Dodge Challenger",
  "2022 Volvo XC60",
  "2021 Subaru WRX STi",
  "2020 Land Rover Defender 110",
  "2021 BMW M4",
];

const BODY_TYPES = ["Coupe", "Hatchback", "SUV", "Sedan", "Truck"];
const PRICE_RATINGS = [
  "Fair Price",
  "Good Price",
  "Great Price",
  "Market Price",
];
const CONDITIONS = ["New", "Used"];
const COLORS = [
  "Black",
  "Blue",
  "Boulder Grey",
  "Crystal Black",
  "Cyber Grey",
  "Deep Black Pearl",
  "Deep Blue Metallic",
  "Infrared",
  "Isle of Man Green",
  "Jet Black Metallic",
  "Onyx Black",
  "Pangea Green",
  "Pine Grey",
  "Plasma Yellow",
  "Plum Crazy",
  "Polar White",
  "Red",
  "Silver",
  "Soul Red",
];

const mockCars = CAR_TITLES.map((title, i) => {
  const parts = title.split(" ");
  const year = parseInt(parts[0]);
  let make = parts[1];
  let modelWords = parts.slice(2);

  if (make === "Land") {
    make = "Land Rover";
    modelWords = parts.slice(3);
  }

  const model = modelWords.join(" ");
  const basePrice = 30000 + (i % 5) * 10000; // 30k, 40k, 50k, 60k, 70k range

  let bodyType = "Sedan";
  if (
    model.includes("CX") ||
    model.includes("RAV4") ||
    model.includes("Rogue") ||
    model.includes("Macan") ||
    model.includes("XC60") ||
    model.includes("Defender") ||
    model.includes("CR-V") ||
    model.includes("Model Y") ||
    model.includes("Wrangler")
  ) {
    bodyType = "SUV";
  } else if (
    model.includes("Silverado") ||
    model.includes("Sierra") ||
    model.includes("F-150")
  ) {
    bodyType = "Truck";
  } else if (
    model.includes("Mustang") ||
    model.includes("Challenger") ||
    model.includes("M4") ||
    model.includes("STi")
  ) {
    bodyType = "Coupe";
  } else if (model.includes("Golf") || model.includes("Crosstrek")) {
    bodyType = "Hatchback";
  }

  return {
    id: i + 1,
    title: title,
    year: year,
    make: make,
    model: model,
    price: basePrice,
    priceRating: PRICE_RATINGS[i % PRICE_RATINGS.length],
    condition: CONDITIONS[i % CONDITIONS.length],
    bodyType: bodyType,
    color: COLORS[i % COLORS.length],
    trim: ["All Trims"][0],
    mileage: "14,200 km",
    priceStatus: "Competitive price",
    desc: "Excellent fuel efficiency & low maintenance Sporty design with advanced safety features.",
    oldPrice: `$${basePrice.toLocaleString()}`,
    biWeekly: `$${Math.round(basePrice / 120)}`,
    down: "$0 down",
    noAccident: true,
    img: CAR_IMGS[i % CAR_IMGS.length],
  };
});

// Sidebar filter list options
const FP_MAKES = [
  "All Makes",
  "Audi",
  "BMW",
  "Chevrolet",
  "Dodge",
  "Ford",
  "GMC",
  "Honda",
  "Hyundai",
  "Jeep",
  "Kia",
  "Land Rover",
  "Lexus",
  "Mazda",
  "Mercedes-Benz",
  "Nissan",
  "Porsche",
  "Subaru",
  "Tesla",
  "Toyota",
  "Volkswagen",
  "Volvo",
];
const FP_MODELS = ["All Models", "CR-V", "Civic"];
const FP_TRIMS = [
  "All Trims",
  "330i",
  "B5 Inscription",
  "C 300",
  "Competition",
  "Denali",
  "F SPORT",
  "GT Premium",
  "GT-Line",
  "Grand Touring",
  "Highline",
  "Komfort",
  "LTZ",
  "Long Range",
  "Outdoor",
  "P300",
  "Performance",
  "Platinum",
  "Preferred",
  "S",
];
const FP_PRICES = [
  "Max Price",
  "$20,000",
  "$30,000",
  "$40,000",
  "$50,000",
  "$60,000",
  "$70,000",
  "$80,000",
];
const FP_RATINGS = [
  "All Ratings",
  "Fair Price",
  "Good Price",
  "Great Price",
  "Market Price",
];
const FP_CONDITIONS = ["All Conditions", "New", "Used"];
const FP_BODY_TYPES = [
  "All Body Types",
  "Coupe",
  "Hatchback",
  "SUV",
  "Sedan",
  "Truck",
];
const FP_COLORS = [
  "All Colors",
  "Black",
  "Blue",
  "Boulder Grey",
  "Crystal Black",
  "Cyber Grey",
  "Deep Black Pearl",
  "Deep Blue Metallic",
  "Infrared",
  "Isle of Man Green",
  "Jet Black Metallic",
  "Onyx Black",
  "Pangea Green",
  "Pine Grey",
  "Plasma Yellow",
  "Plum Crazy",
  "Polar White",
  "Red",
  "Silver",
  "Soul Red",
];
const FP_YEARS = ["2018", "2019", "2020", "2021", "2022", "2023"];

const features = [
  "Air Conditioning",
  "Alloy Wheels",
  "Backup Camera",
  "Bluetooth Connection",
  "Brake Assist",
  "Cooled Seats",
  "Cruise Control",
  "Heated Seats",
  "Keyless Entry",
  "Lane Assist",
  "Leather Seats",
  "Navigation System",
  "Parking Sensors",
  "Power Seats",
  "Power Windows",
  "Remote Start",
];

// SVG Icon components
const IconCheck = ({ className = "" }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const IconSpeed = ({ className = "" }) => (
  <svg
    width="15"
    height="15"
    viewBox="21 519 35 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M55.4983 536.128C55.4983 539.948 54.3535 543.356 52.0637 546.352C51.8347 546.652 51.5294 546.82 51.1478 546.858C50.7662 546.895 50.4227 546.801 50.1174 546.577C49.8121 546.352 49.6404 546.071 49.6022 545.734C49.564 545.397 49.6595 545.079 49.8884 544.779C51.8729 542.232 52.8651 539.349 52.8651 536.128C52.8651 533.581 52.2164 531.222 50.9188 529.05C49.6213 526.877 47.8467 525.155 45.5951 523.881C43.3435 522.608 40.9202 521.971 38.3251 521.971C35.7301 521.971 33.3067 522.608 31.0551 523.881C28.8035 525.155 27.029 526.877 25.7314 529.05C24.4339 531.222 23.7851 533.581 23.7851 536.128C23.7851 539.349 24.7774 542.232 26.7618 544.779C26.9908 545.079 27.0862 545.397 27.0481 545.734C27.0099 546.071 26.8382 546.352 26.5329 546.577C26.2276 546.801 25.8841 546.895 25.5025 546.858C25.1208 546.82 24.8155 546.652 24.5866 546.352C22.2968 543.356 21.1519 539.948 21.1519 536.128C21.1519 533.132 21.9152 530.342 23.4417 527.758C24.9682 525.173 27.0481 523.132 29.6813 521.634C32.3145 520.136 35.1958 519.387 38.3251 519.387C41.4545 519.387 44.3358 520.136 46.969 521.634C49.6022 523.132 51.6821 525.173 53.2086 527.758C54.7351 530.342 55.4983 533.132 55.4983 536.128ZM46.7972 528.263C47.1026 528.488 47.2552 528.787 47.2552 529.162C47.2552 529.536 47.1026 529.836 46.7972 530.061L42.4467 534.443C42.8283 535.117 43.0191 535.828 43.0191 536.577C43.0191 537.851 42.5612 538.937 41.6453 539.836C40.7294 540.734 39.6227 541.184 38.3251 541.184C37.0276 541.184 35.9209 540.734 35.005 539.836C34.0891 538.937 33.6311 537.851 33.6311 536.577C33.6311 535.304 34.0891 534.218 35.005 533.319C35.9209 532.42 37.0276 531.971 38.3251 531.971C39.0884 531.971 39.8135 532.158 40.5004 532.533L44.9654 528.263C45.1944 527.964 45.4997 527.814 45.8813 527.814C46.263 527.814 46.5683 527.964 46.7972 528.263ZM40.3859 536.577C40.3859 536.053 40.176 535.604 39.7562 535.229C39.3364 534.855 38.8594 534.667 38.3251 534.667C37.7909 534.667 37.3138 534.855 36.894 535.229C36.4742 535.604 36.2643 536.053 36.2643 536.577C36.2643 537.102 36.4742 537.57 36.894 537.982C37.3138 538.394 37.7909 538.6 38.3251 538.6C38.8594 538.6 39.3364 538.394 39.7562 537.982C40.176 537.57 40.3859 537.102 40.3859 536.577Z"
      fill="currentColor"
    />
  </svg>
);

const IconPrice = ({ className = "" }) => (
  <svg
    width="17"
    height="15"
    viewBox="184 524 31 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M196.911 539.054C197.475 538.279 201.911 535.136 201.911 535.136C201.911 535.136 200.281 540.322 199.716 541.097C199.152 541.872 198.067 542.043 197.292 541.478C196.517 540.914 196.346 539.828 196.911 539.054Z"
      fill="currentColor"
    />
    <circle cx="198.936" cy="540.081" r="0.8" fill="#D9D9D9" />
    <path
      d="M184.009 539.429C184.009 536.686 184.746 533.993 186.142 531.631L192.897 535.626C192.216 536.778 191.857 538.091 191.857 539.429H184.009Z"
      fill="#4079ED"
    />
    <path
      d="M187.083 530.224C188.83 527.901 191.201 526.122 193.921 525.096L196.691 532.439C195.364 532.939 194.208 533.807 193.356 534.94L187.083 530.224Z"
      fill="#4079ED"
    />
    <path
      d="M195.305 524.648C198.11 523.885 201.074 523.935 203.852 524.793L201.534 532.291C200.18 531.872 198.734 531.848 197.366 532.22L195.305 524.648Z"
      fill="#4079ED"
    />
    <path
      d="M204.875 525.15C207.584 526.202 209.939 528.004 211.663 530.345L205.344 534.999C204.503 533.857 203.355 532.978 202.033 532.465L204.875 525.15Z"
      fill="#4079ED"
    />
    <path
      d="M212.533 531.664C213.924 534.029 214.654 536.724 214.647 539.468L206.799 539.448C206.803 538.11 206.447 536.796 205.768 535.642L212.533 531.664Z"
      fill="#D9D9D9"
    />
  </svg>
);

const IconChevron = ({ size = 12, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const IconSearch = ({ className = "" }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);

const IconX = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const IconMenu = ({ className = "" }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const IconHeart = ({ className = "" }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const IconChevronLeft = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const MAKES = [
  "Audi",
  "BMW",
  "Chevrolet",
  "Dodge",
  "Ford",
  "GMC",
  "Honda",
  "Hyundai",
  "Jeep",
  "Kia",
  "Land Rover",
  "Lexus",
  "Mazda",
  "Mercedes-Benz",
  "Nissan",
  "Porsche",
  "Subaru",
  "Tesla",
  "Toyota",
  "Volkswagen",
  "Volvo",
];

function CheckAvailabilityModal({
  isOpen,
  onClose,
  carTitle = "this vehicle",
}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comment: "",
    hasTradeIn: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    const checked = e.target.checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Reset form after 2 seconds and close modal
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          comment: `Hi, I'm interested in ${carTitle} that's listed on Cars.ca. Is it still available?`,
          hasTradeIn: false,
        });
        onClose();
      }, 2000);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white max-h-[90vh] overflow-y-auto rounded-2xl w-full max-w-2xl shadow-2xl transform transition-all">
          {/* Header */}
          <div className="flex items-center justify-between p-6 py-2 ">
            <h2 className="text-2xl font-bold text-gray-900">
              Check Availability
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X size={24} className="text-gray-500" />
            </button>
          </div>

          {/* Success Message */}
          {isSuccess ? (
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Thank you
              </h3>
              <p className="text-gray-600 mb-6">
                We have received your submission. One of our specialists will
                contact you very shortly.
              </p>

              <div className=" rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-2">Contact us now!</p>
                <a
                  href="tel:9058003100"
                  className="inline-flex items-center justify-center bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-xl transition-colors w-full sm:w-auto"
                >
                  905 800 3100
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 pt-2">
              <div className="space-y-3">
                {/* Name Fields - Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900"
                      placeholder="john.doe@example.com"
                    />
                  </div>

                  {/* Phone (Optional) */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Phone Number{" "}
                      <span className="text-gray-400 text-xs">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900"
                      placeholder="(555) 555-5555"
                    />
                  </div>
                </div>

                {/* Comment */}
                <div>
                  <label
                    htmlFor="comment"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Comment <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleInputChange}
                    required
                    rows={2}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 resize-none"
                    placeholder={`Hi, I'm interested in ${carTitle} that's listed on Cars.ca. Is it still available?`}
                  />
                </div>

                {/* Trade-in Checkbox */}
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="hasTradeIn"
                    name="hasTradeIn"
                    checked={formData.hasTradeIn}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                  />
                  <label
                    htmlFor="hasTradeIn"
                    className="text-sm text-gray-700 cursor-pointer"
                  >
                    I have a trade-in
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg text-lg shadow-lg shadow-blue-200 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {/* Legal Text */}
                <div className="space-y-4 text-[10px] text-gray-500 leading-relaxed">
                  <p>
                    By submitting this form, I acknowledge that I accept and
                    agree to be bound by the{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Terms and Conditions
                    </a>{" "}
                    of cars.ca and further acknowledge that any personal
                    information I may provide to cars.ca will be handled in
                    accordance with the{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </a>
                    . I further agree to receive communications from cars.ca or
                    sellers of motor vehicles advertised on cars.ca. I
                    understand that I can unsubscribe from receiving such
                    communication at any time.
                  </p>
                  <p>
                    This site is protected by reCAPTCHA and the Google{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Terms of Service
                    </a>{" "}
                    apply.
                  </p>
                </div>

                {/* Contact Dealer */}
                {/* <div className="pt-4 text-center">
                  <p className="text-sm text-gray-600">
                    Contact{" "}
                    <span className="font-semibold text-gray-900">
                      Bray Motors Ltd.
                    </span>{" "}
                    directly
                  </p>
                </div> */}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [selectedCar, setSelectedCar] = useState(mockCars[0]);
  const [showForm, setShowForm] = useState(false);
  const [isMobileDetailView, setIsMobileDetailView] = useState(false);
  const [isFiltersPanelOpen, setIsFiltersPanelOpen] = useState(false);

  /* ── filter dropdown state ──────────────── */
  const [openFilter, setOpenFilter] = useState(null);
  const [selectedMake, setSelectedMake] = useState(null);
  const [minYear, setMinYear] = useState("");
  const [maxYear, setMaxYear] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [isAvailabilityModalOpen, setIsAvailabilityModalOpen] = useState(false);

  /* ── sidebar filter state ──────────────── */
  const [fpMake, setFpMake] = useState("All Makes");
  const [fpModel, setFpModel] = useState("All Models");
  const [fpTrim, setFpTrim] = useState("All Trims");
  const [fpMaxPrice, setFpMaxPrice] = useState("Max Price");
  const [fpPriceRating, setFpPriceRating] = useState("All Ratings");
  const [fpCondition, setFpCondition] = useState("All Conditions");
  const [fpBodyType, setFpBodyType] = useState("All Body Types");
  const [fpColor, setFpColor] = useState("All Colors");
  const [fpMinYear, setFpMinYear] = useState("Min. Year");
  const [fpMaxYear, setFpMaxYear] = useState("Max. Year");

  const router = useRouter();

  const toggleFilter = (name) =>
    setOpenFilter((prev) => (prev === name ? null : name));

  const filteredCars = mockCars.filter((c) => {
    if (selectedMake && c.make !== selectedMake) return false;
    if (fpMake !== "All Makes" && c.make !== fpMake) return false;
    if (fpModel !== "All Models" && !c.model.includes(fpModel)) return false;
    if (fpTrim !== "All Trims" && c.trim !== fpTrim) return false;
    if (fpMaxPrice !== "Max Price") {
      const maxVal = parseInt(fpMaxPrice.replace(/[^0-9]/g, ""));
      if (c.price > maxVal) return false;
    }
    if (fpPriceRating !== "All Ratings" && c.priceRating !== fpPriceRating)
      return false;
    if (fpCondition !== "All Conditions" && c.condition !== fpCondition)
      return false;
    if (fpBodyType !== "All Body Types" && c.bodyType !== fpBodyType)
      return false;
    if (fpColor !== "All Colors" && c.color !== fpColor) return false;

    if (fpMinYear !== "Min. Year" && c.year < parseInt(fpMinYear)) return false;
    if (fpMaxYear !== "Max. Year" && c.year > parseInt(fpMaxYear)) return false;

    return true;
  });

  const clearAllFilters = () => {
    setFpMake("All Makes");
    setFpModel("All Models");
    setFpTrim("All Trims");
    setFpMaxPrice("Max Price");
    setFpPriceRating("All Ratings");
    setFpCondition("All Conditions");
    setFpBodyType("All Body Types");
    setFpColor("All Colors");
    setFpMinYear("Min. Year");
    setFpMaxYear("Max. Year");
    setSelectedMake(null);
  };

  return (
    <>
      <Head>
        <title>Autobon | Cars for Sale</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>

      <div
        className={`min-h-screen bg-white font-sans ${isMobileDetailView ? "mobile-detail-active" : ""}`}
      >
        {/* ── HEADER ─────────────────────────────── */}
        <header className="sticky top-0 z-50 w-full h-[70px] border-b border-gray-200 bg-white">
          <div className="max-w-[1280px] mx-auto h-full px-8 flex items-center justify-between">
            <Link
              href="/"
              className="text-[32px] font-bold text-blue-600 cursor-pointer"
            >
              Autobon
            </Link>

            <nav
              className="hidden lg:flex items-center gap-8"
              aria-label="Main navigation"
            >
              <Link
                href="#"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors active"
              >
                Buy Cars
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                Sell or Trade
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                Reviews
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                Financing
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-2 text-sm text-gray-600">
                <span>🇺🇸</span>
                <span>Eng (US)</span>
                <IconChevron size={10} />
              </div>
              <button className="lg:hidden" aria-label="Open menu">
                <IconMenu />
              </button>
            </div>
          </div>
        </header>

        <div className="main-search-view">
          {/* ── FILTER BAR ──────────────────────────── */}
          <div className="border-b border-gray-200 bg-white">
            <div className="max-w-[1280px] mx-auto px-8 py-4">
              <div className="flex flex-wrap items-center gap-4">
                <button
                  className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:border-blue-600 transition-colors"
                  onClick={() => setIsFiltersPanelOpen(true)}
                >
                  Filters
                </button>

                {/* YEAR */}
                <div className="relative">
                  <button
                    className={`flex items-center gap-2 px-4 py-2 text-sm border rounded-lg transition-colors ${
                      openFilter === "year"
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-300 hover:border-blue-600"
                    } ${minYear || maxYear ? "bg-blue-50 border-blue-600" : ""}`}
                    onClick={() => toggleFilter("year")}
                  >
                    <span>
                      {minYear || maxYear
                        ? `${minYear || "…"} – ${maxYear || "…"}`
                        : "Year"}
                    </span>
                    <IconChevron size={10} />
                  </button>
                  {openFilter === "year" && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50">
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
                          placeholder="Min. Year"
                          value={minYear}
                          onChange={(e) => setMinYear(e.target.value)}
                        />
                        <span className="text-gray-500">To</span>
                        <input
                          type="text"
                          className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
                          placeholder="Max. Year"
                          value={maxYear}
                          onChange={(e) => setMaxYear(e.target.value)}
                        />
                      </div>
                      <div className="flex justify-end gap-2 mt-4">
                        <button
                          className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900"
                          onClick={() => {
                            setMinYear("");
                            setMaxYear("");
                          }}
                        >
                          Clear
                        </button>
                        <button
                          className="px-4 py-1.5 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                          onClick={() => setOpenFilter(null)}
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* MAKE */}
                <div className="relative">
                  <button
                    className={`flex items-center gap-2 px-4 py-2 text-sm border rounded-lg transition-colors ${
                      openFilter === "make"
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-300 hover:border-blue-600"
                    } ${selectedMake ? "bg-blue-50 border-blue-600" : ""}`}
                    onClick={() => toggleFilter("make")}
                  >
                    <span>{selectedMake || "Make"}</span>
                    <IconChevron size={10} />
                  </button>
                  {openFilter === "make" && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg max-h-80 overflow-y-auto z-50">
                      {MAKES.map((m) => (
                        <button
                          key={m}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                            selectedMake === m ? "bg-blue-50 text-blue-600" : ""
                          }`}
                          onClick={() => {
                            if (selectedMake === m) {
                              setSelectedMake(null);
                              setSelectedCar(mockCars[0]);
                            } else {
                              setSelectedMake(m);
                              const first = mockCars.find((c) => c.make === m);
                              if (first) setSelectedCar(first);
                            }
                            setOpenFilter(null);
                          }}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* PRICE */}
                <div className="relative">
                  <button
                    className={`flex items-center gap-2 px-4 py-2 text-sm border rounded-lg transition-colors ${
                      openFilter === "price"
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-300 hover:border-blue-600"
                    } ${minPrice || maxPrice ? "bg-blue-50 border-blue-600" : ""}`}
                    onClick={() => toggleFilter("price")}
                  >
                    <span>
                      {minPrice || maxPrice
                        ? `$${minPrice || "…"} – $${maxPrice || "…"}`
                        : "Price"}
                    </span>
                    <IconChevron size={10} />
                  </button>
                  {openFilter === "price" && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50">
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
                          placeholder="Min. Price"
                          value={minPrice}
                          onChange={(e) => setMinPrice(e.target.value)}
                        />
                        <span className="text-gray-500">To</span>
                        <input
                          type="text"
                          className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
                          placeholder="Max. Price"
                          value={maxPrice}
                          onChange={(e) => setMaxPrice(e.target.value)}
                        />
                      </div>
                      <div className="flex justify-end gap-2 mt-4">
                        <button
                          className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900"
                          onClick={() => {
                            setMinPrice("");
                            setMaxPrice("");
                          }}
                        >
                          Clear
                        </button>
                        <button
                          className="px-4 py-1.5 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                          onClick={() => setOpenFilter(null)}
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="hidden lg:flex items-center flex-1 max-w-xs ml-auto">
                  <div className="relative w-full">
                    <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                      placeholder="Search here..."
                      aria-label="Search cars"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:hidden mt-4">
                <div className="relative w-full">
                  <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    placeholder="Search here..."
                    aria-label="Search cars"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Click‑away overlay */}
          {openFilter && (
            <div
              className="fixed inset-0 z-40"
              onClick={() => setOpenFilter(null)}
            />
          )}

          {/* ── PAGE BODY ────────────────────────────── */}
          <main className="max-w-[1280px] mx-auto px-8 py-6">
            <div className="text-sm text-gray-500 mb-6">
              <span>Home &gt; </span>
              <Link href="#" className="text-blue-600 hover:underline">
                Cars for Sale in Canada
              </Link>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* ── LEFT: LISTINGS ───────────────────── */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                      {filteredCars.length.toLocaleString()} Cars for Sale in
                      Canada
                    </h1>
                    <p className="text-sm text-gray-500">
                      Location &gt; Canada
                    </p>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 rounded-lg hover:border-blue-600 transition-colors">
                    Sort Relevance
                    <IconChevron size={10} />
                  </button>
                </div>

                <div
                  className="space-y-4"
                  id="car-listings"
                  aria-label="Car listings"
                >
                  {filteredCars.map((car) => (
                    <div
                      key={car.id}
                      className={`flex flex-col md:flex-row gap-4 p-4 border rounded-xl cursor-pointer transition-all hover:shadow-md ${
                        selectedCar.id === car.id
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-200"
                      }`}
                      onClick={() => {
                        setSelectedCar(car);
                        setShowForm(false);
                        if (window.innerWidth < 1024) {
                          setIsMobileDetailView(true);
                          window.scrollTo(0, 0);
                        }
                      }}
                      tabIndex={0}
                      role="button"
                      aria-label={`View ${car.title}`}
                      onKeyDown={(e) =>
                        e.key === "Enter" && setSelectedCar(car)
                      }
                    >
                      {/* Card Image */}
                      <div className="relative w-full md:w-48 h-32 flex-shrink-0">
                        {car.noAccident && (
                          <div className="absolute top-2 left-2 z-10 flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                            <IconCheck className="w-4 h-4" />
                            No accident
                          </div>
                        )}
                        <img
                          src={car.img}
                          alt={car.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>

                      {/* Card Body */}
                      <div className="flex-1">
                        <h2 className="text-lg font-semibold text-gray-900 mb-2">
                          {car.title}
                        </h2>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                          <span className="flex items-center gap-1">
                            <IconSpeed />
                            {car.mileage}
                          </span>
                          <span>|</span>
                          <span className="flex items-center gap-1 text-blue-600 font-medium">
                            <IconPrice />
                            {car.priceStatus}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{car.desc}</p>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-sm text-gray-400 line-through mr-2">
                              {car.oldPrice}
                            </span>
                            <span className="text-base font-bold text-gray-900">
                              {car.biWeekly} /biweekly
                            </span>
                            <span className="text-sm text-gray-500 ml-2">
                              {car.down}
                            </span>
                          </div>
                          <button
                            className="px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedCar(car);
                              setShowForm(false);
                              if (window.innerWidth < 1024) {
                                setIsMobileDetailView(true);
                                window.scrollTo(0, 0);
                              }
                            }}
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── RIGHT: DETAIL PANEL ──────────────── */}
              <aside
                className="hidden lg:block w-[380px] flex-shrink-0"
                aria-label="Car detail panel"
              >
                <div className="sticky top-[90px] border border-gray-200 rounded-xl p-6">
                  {/* Car Image */}
                  <div className="relative mb-4">
                    <div className="absolute top-2 left-2 z-10 flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      <IconCheck className="w-4 h-4" />
                      No accident
                    </div>
                    <img
                      src={selectedCar.img}
                      alt={selectedCar.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mb-6">
                    <button
                      className="flex-1 px-4 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                      onClick={() => setIsAvailabilityModalOpen(true)}
                    >
                      Check availability
                    </button>
                    <button
                      onClick={() => {
                        router.push("/checkout");
                      }}
                      className="flex-1 px-4 py-3 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      Get Approved
                    </button>
                  </div>

                  {/* Car Info */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      {selectedCar.title}
                    </h2>

                    <div className="flex items-center gap-2 text-sm mb-3">
                      <span className="flex items-center gap-1 text-gray-600">
                        <IconSpeed />
                        {selectedCar.mileage}
                      </span>
                      <span className="text-gray-300">|</span>
                      <span className="flex items-center gap-1 text-blue-600 font-medium">
                        <IconPrice />
                        {selectedCar.priceStatus}
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 mb-4">
                      {selectedCar.desc}
                    </p>

                    {/* Overview */}
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">
                      Overview
                    </h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {[
                        { label: "Mileage", val: "14,563 km" },
                        { label: "Condition", val: "Used" },
                        { label: "Drive Train", val: "-" },
                        { label: "Transmission", val: "Automatic" },
                        { label: "Passengers", val: "5" },
                        { label: "Engine", val: "1.5L 4-Cyl" },
                        { label: "Fuel Type", val: "Gasoline" },
                        { label: "Stock Number", val: "T-OPDIKE" },
                      ].map((item) => (
                        <div key={item.label} className="text-center">
                          <div className="text-sm font-medium text-gray-900">
                            {item.val}
                          </div>
                          <div className="text-xs text-gray-500">
                            {item.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-sm font-semibold text-gray-900 mb-3">
                      Description
                    </h3>
                    <p className="text-sm text-gray-600 mb-6">
                      The 2025 GMC Terrain Elevation AWD delivers a fresh take
                      on the compact SUV, combining bold design, intelligent
                      technology,and versatile capability in a package that
                      feels modern, confident, and distinctly upscale. With its
                      sleek profile and athletic stance, this Terrain makes a
                      statement from the moment you see it.
                    </p>

                    <h3 className="text-sm font-semibold text-gray-900 mb-3">
                      Options
                    </h3>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {features.map((feat) => (
                        <div key={feat} className="text-sm text-gray-600">
                          {feat}
                        </div>
                      ))}
                    </div>

                    {/* Availability Form */}
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">
                      Get Details
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Please fill out the form below and we&apos;ll get back to
                      you as soon as possible.
                    </p>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                          placeholder="First Name"
                          type="text"
                        />
                        <input
                          className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                          placeholder="Last Name"
                          type="text"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                          placeholder="E-mail"
                          type="email"
                        />
                        <input
                          className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                          placeholder="Phone Number*"
                          type="tel"
                        />
                      </div>
                      <textarea
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                        placeholder="Comment"
                        rows={3}
                      />
                      <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 rounded"
                        />
                        Do you have a trade in?
                      </label>
                      <button className="w-full px-4 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                        Send Message
                      </button>
                      <p className="text-[11px] text-gray-400 leading-relaxed">
                        By submitting this form, I acknowledge that I accept and
                        agree to be bound by the Terms and Conditions of cars.ca
                        and further acknowledge that any personal information I
                        may provide to cars.ca will be handled in accordance
                        with the Privacy Policy. I further agree to receive
                        communications from cars.ca or sellers of motor vehicles
                        advertised on cars.ca. I understand that I can
                        unsubscribe from receiving such communication at any
                        time.
                        <br />
                        <br />
                        This site is protected by reCAPTCHA and the Google
                        Privacy Policy and Terms of Service apply.
                        <br />
                        <br />
                        *Prices listed exclude taxes, licensing fees, and other
                        applicable charges.
                        <br />
                        <br />
                        While we strive to provide accurate and up-to-date
                        information, we recommend that you verify the details of
                        any listing directly with the seller. Cars.ca is not
                        responsible for any discrepancies or inaccuracies in the
                        information provided.
                      </p>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </main>
        </div>

        {/* ── MOBILE DETAIL OVERLAY ──────────────── */}
        {isMobileDetailView && (
          <div className="lg:hidden fixed inset-0 z-50 bg-white overflow-y-auto">
            <div className="p-4">
              <button
                className="flex items-center gap-2 text-sm text-gray-600 mb-4"
                onClick={() => setIsMobileDetailView(false)}
              >
                <IconChevronLeft /> Back to search
              </button>

              <div className="relative mb-4">
                <div className="flex items-center justify-between absolute top-2 left-2 right-2 z-10">
                  {selectedCar.noAccident && (
                    <span className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      <IconCheck className="w-4 h-4" /> No accident
                    </span>
                  )}
                  <button className="ml-auto p-2 bg-white rounded-full shadow-md">
                    <IconHeart />
                  </button>
                </div>
                <img
                  src={selectedCar.img}
                  alt={selectedCar.title}
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>

              <div className="flex gap-3 mb-6">
                <button className="flex-1 px-4 py-3 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
                  Check availability
                </button>
                <button className="flex-1 px-4 py-3 text-sm font-medium text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50 transition-colors">
                  Get Approved
                </button>
              </div>

              <h1 className="text-xl font-bold text-gray-900 mb-2">
                {selectedCar.title}
              </h1>

              <div className="flex items-center gap-2 text-sm mb-4">
                <span className="flex items-center gap-1 text-gray-600">
                  <IconSpeed /> {selectedCar.mileage}
                </span>
                <span>|</span>
                <span className="flex items-center gap-1 text-blue-600 font-medium">
                  <IconPrice /> {selectedCar.priceStatus}
                </span>
              </div>

              <p className="text-sm text-gray-600 mb-6">{selectedCar.desc}</p>

              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                Overview
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-blue-600 text-sm font-medium">
                    Clean CARFAX
                  </div>
                  <div className="text-xs text-gray-500">No Accident</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Used</div>
                  <div className="text-xs text-gray-500">Condition</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Automatic
                  </div>
                  <div className="text-xs text-gray-500">Transmission</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    1.5L 4-Cyl
                  </div>
                  <div className="text-xs text-gray-500">Stock Number</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    14,563 km
                  </div>
                  <div className="text-xs text-gray-500">Mileage</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">-</div>
                  <div className="text-xs text-gray-500">Drive Train</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">5</div>
                  <div className="text-xs text-gray-500">Passengers</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Gasoline
                  </div>
                  <div className="text-xs text-gray-500">Fuel Type</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    T-OPDIKE
                  </div>
                  <div className="text-xs text-gray-500">Stock Number</div>
                </div>
              </div>

              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                Description
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                The 2025 GMC Terrain Elevation AWD delivers a fresh take on the
                compact SUV, combining bold design, intelligent technology,and
                versatile capability in a package that feels modern, confident,
                and distinctly upscale. With its sleek profile and athletic
                stance, this Terrain makes a statement from the moment you see
                it.
              </p>

              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                Options
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {features.map((f) => (
                  <span
                    key={f}
                    className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
                  >
                    {f}
                  </span>
                ))}
              </div>

              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                Get Details
              </h3>
              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    placeholder="First Name"
                  />
                  <input
                    className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    placeholder="Last Name"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    placeholder="E-mail"
                    type="email"
                  />
                  <input
                    className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    placeholder="Phone Number*"
                    type="tel"
                  />
                </div>
                <textarea
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="Comment"
                  rows={3}
                />
                <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  Do you have a trade in?
                </label>
                <button className="w-full px-4 py-3 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
                  Send Message
                </button>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  By submitting this form, I acknowledge that I accept and agree
                  to be bound by the Terms and Conditions of cars.ca and further
                  acknowledge that any personal information I may provide to
                  cars.ca will be handled in accordance with the Privacy Policy.
                  I further agree to receive communications from cars.ca or
                  sellers of motor vehicles advertised on cars.ca. I understand
                  that I can unsubscribe from receiving such communication at
                  any time.
                  <br />
                  <br />
                  This site is protected by reCAPTCHA and the Google Privacy
                  Policy and Terms of Service apply.
                  <br />
                  <br />
                  *Prices listed exclude taxes, licensing fees, and other
                  applicable charges.
                  <br />
                  <br />
                  While we strive to provide accurate and up-to-date
                  information, we recommend that you verify the details of any
                  listing directly with the seller. Cars.ca is not responsible
                  for any discrepancies or inaccuracies in the information
                  provided.
                </p>
              </div>
            </div>
            <img
              src="/images/footer-group.svg"
              alt="Footer details"
              className="w-full block"
            />
          </div>
        )}

        {/* ── FOOTER ───────────────────────────────── */}
        {/* <footer className="bg-gray-50 border-t border-gray-200 mt-12">
          <div className="max-w-[1280px] mx-auto px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-4">
                  Browse Popular Models
                </h4>
                <ul className="space-y-2">
                  {[
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
                  ].map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-sm text-gray-600 hover:text-blue-600"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-4">
                  Browse by Body Style
                </h4>
                <ul className="space-y-2">
                  {[
                    "SUV",
                    "Sedan",
                    "Hatchback",
                    "Wagon",
                    "Truck",
                    "Van",
                    "Coupe",
                    "Convertible",
                  ].map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-sm text-gray-600 hover:text-blue-600"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-4">
                  Browse by Location
                </h4>
                <ul className="space-y-2">
                  {[
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
                  ].map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-sm text-gray-600 hover:text-blue-600"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-4">
                  Sell My Car
                </h4>
                <ul className="space-y-2">
                  {[
                    "Sell My Car in Toronto",
                    "Sell My Car in Mississauga",
                    "Sell My Car in London",
                    "Sell My Car in Ottawa",
                    "Sell My Car in Kitchener",
                    "Sell My Car in Hamilton",
                    "Sell My Car in Halifax",
                    "Sell My Car in Vancouver",
                    "View More",
                  ].map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-sm text-gray-600 hover:text-blue-600"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-4">
                  Explore
                </h4>
                <ul className="space-y-2">
                  {[
                    "Home",
                    "Shop cars",
                    "Sell or Trade",
                    "Finance",
                    "Car Loan Calculator",
                    "Vehicle Protection",
                    "Car Value Calculator",
                  ].map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-sm text-gray-600 hover:text-blue-600"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-4">
                  Company
                </h4>
                <ul className="space-y-2">
                  {["About AUTOBON", "Careers", "Blog", "FAQ"].map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-sm text-gray-600 hover:text-blue-600"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-4">
                  Contact Us
                </h4>
                <div className="space-y-2">
                  <div className="text-sm">
                    <Link href="#" className="text-blue-600 underline">
                      Chat with us
                    </Link>
                  </div>
                  <div className="text-sm text-gray-600">
                    Call us at{" "}
                    <span className="font-semibold">(647) 955-5340</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    Email us at{" "}
                    <span className="font-semibold">support@AUTOBON</span>
                  </div>
                  <div className="text-sm text-gray-600">Locations</div>
                  <div className="flex items-center gap-4 mt-4">
                    <svg
                      className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2.04c-5.5 0-10 4.49-10 10 0 4.99 3.66 9.12 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.89h-2.33v6.99A10.01 10.01 0 0012 2.04z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.22.41.56.22.96.47 1.38.89.42.42.67.81.89 1.37.16.42.36 1.05.41 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.22-.22.56-.47.96-.89 1.38-.42.42-.81.67-1.37.89-.42-.16-1.05.36-2.22.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.22-.41-.56-.22-.96-.47-1.38-.89-.42-.42-.67-.81-.89-1.37-.16-.42-.36-1.05-.41-2.22C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.22.22-.56.47-.96.89-1.38.42-.42.81-.67 1.37-.89.42-.16 1.05-.36 2.22-.41C8.42 2.17 8.8 2.16 12 2.16m0-2.16C8.74 0 8.33.01 7.05.07 5.77.12 4.89.33 4.14.62c-.78.3-1.44.7-2.1 1.36-.66.66-1.06 1.32-1.36 2.1C.33 4.89.12 5.77.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.05 1.28.26 2.16.55 2.91.3.78.7 1.44 1.36 2.1.66.66 1.32 1.06 2.1 1.36.75.29 1.63.5 2.91.55C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.05 2.16-.26 2.91-.55.78-.3 1.44-.7 2.1-1.36.66-.66 1.06-1.32 1.36-2.1.29-.75.5-1.63.55-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.05-1.28-.26-2.16-.55-2.91-.3-.78-.7-1.44-1.36-2.1-.66-.66-1.32-1.06-2.1-1.36-.75-.29-1.63-.5-2.91-.55C15.67.01 15.26 0 12 0z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M4.98 3.5c0 1.38-1.11 2.5-2.48 2.5s-2.48-1.12-2.48-2.5 1.1-2.5 2.48-2.5 2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.98 0h-4.8v16h4.8v-7.85c0-4.22 5.56-4.57 5.56 0v7.85h4.8v-9.05c0-7.38-8.52-7-10.36-3.41v-3.54z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col items-start">
                  <svg className="w-12 h-12 mb-2" viewBox="0 0 48 48">
                    <path
                      fill="#EA4335"
                      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                    />
                    <path
                      fill="#4285F4"
                      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                    />
                    <path
                      fill="#34A853"
                      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                    />
                  </svg>
                  <div className="flex gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="#FBBF24"
                      >
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-[11px] font-semibold text-gray-600">
                    Over 2500 5 Star Reviews
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-4 md:mb-0">
                © 2025 Autobon Technologies Inc. All Rights Reserved.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Link href="#" className="hover:text-blue-600">
                  Terms of Service
                </Link>
                <span>|</span>
                <Link href="#" className="hover:text-blue-600">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </footer> */}

        {/* ── FILTERS SIDE PANEL ──────────────────── */}
        {isFiltersPanelOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/50 z-50 lg:hidden"
              onClick={() => setIsFiltersPanelOpen(false)}
            />
            <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white z-50 lg:hidden overflow-y-auto transform transition-transform">
              <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <IconMenu />
                  <span className="font-semibold">Filters</span>
                </div>
                <button onClick={() => setIsFiltersPanelOpen(false)}>
                  <IconX />
                </button>
              </div>

              <div className="p-4 space-y-6">
                {/* Year Section */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium">Year</span>
                    <IconChevron />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative flex-1">
                      <select
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-blue-600"
                        value={fpMinYear}
                        onChange={(e) => setFpMinYear(e.target.value)}
                      >
                        <option>Min. Year</option>
                        {FP_YEARS.map((y) => (
                          <option key={`min-${y}`} value={y}>
                            {y}
                          </option>
                        ))}
                      </select>
                      <IconChevron className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                    <span className="text-gray-500">To</span>
                    <div className="relative flex-1">
                      <select
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-blue-600"
                        value={fpMaxYear}
                        onChange={(e) => setFpMaxYear(e.target.value)}
                      >
                        <option>Max. Year</option>
                        {FP_YEARS.map((y) => (
                          <option key={`max-${y}`} value={y}>
                            {y}
                          </option>
                        ))}
                      </select>
                      <IconChevron className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Make Section */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium">Make</span>
                    <IconChevron />
                  </div>
                  <div className="relative">
                    <select
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-blue-600"
                      value={fpMake}
                      onChange={(e) => {
                        setFpMake(e.target.value);
                        setSelectedMake(
                          e.target.value === "All Makes"
                            ? null
                            : e.target.value,
                        );
                      }}
                    >
                      {FP_MAKES.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                    <IconChevron className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                {/* Model Section */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium">Model</span>
                    <IconChevron />
                  </div>
                  <div className="relative">
                    <select
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-blue-600"
                      value={fpModel}
                      onChange={(e) => setFpModel(e.target.value)}
                    >
                      {FP_MODELS.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                    <IconChevron className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                {/* Trim Section */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium">Trim</span>
                    <IconChevron />
                  </div>
                  <div className="relative">
                    <select
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-blue-600"
                      value={fpTrim}
                      onChange={(e) => setFpTrim(e.target.value)}
                    >
                      {FP_TRIMS.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    <IconChevron className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                {/* Price Section */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium">Price</span>
                    <IconChevron />
                  </div>
                  <div className="relative">
                    <select
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-blue-600"
                      value={fpMaxPrice}
                      onChange={(e) => setFpMaxPrice(e.target.value)}
                    >
                      {FP_PRICES.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                    <IconChevron className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                {/* Price Rating Section */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium">Price Rating</span>
                    <IconChevron />
                  </div>
                  <div className="relative">
                    <select
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-blue-600"
                      value={fpPriceRating}
                      onChange={(e) => setFpPriceRating(e.target.value)}
                    >
                      {FP_RATINGS.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                    <IconChevron className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                {/* Condition Section */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium">Condition</span>
                    <IconChevron />
                  </div>
                  <div className="relative">
                    <select
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-blue-600"
                      value={fpCondition}
                      onChange={(e) => setFpCondition(e.target.value)}
                    >
                      {FP_CONDITIONS.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                    <IconChevron className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                {/* Body Type Section */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium">Body Type</span>
                    <IconChevron />
                  </div>
                  <div className="relative">
                    <select
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-blue-600"
                      value={fpBodyType}
                      onChange={(e) => setFpBodyType(e.target.value)}
                    >
                      {FP_BODY_TYPES.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                    <IconChevron className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                {/* Color Section */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium">Color</span>
                    <IconChevron />
                  </div>
                  <div className="relative">
                    <select
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-blue-600"
                      value={fpColor}
                      onChange={(e) => setFpColor(e.target.value)}
                    >
                      {FP_COLORS.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                    <IconChevron className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 flex gap-3">
                <button
                  className="flex-1 px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
                  onClick={clearAllFilters}
                >
                  Clear All
                </button>
                <button
                  className="flex-1 px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                  onClick={() => setIsFiltersPanelOpen(false)}
                >
                  Show {filteredCars.length} results
                </button>
              </div>
            </div>
          </>
        )}
        <CheckAvailabilityModal
          isOpen={isAvailabilityModalOpen}
          onClose={() => setIsAvailabilityModalOpen(false)}
          carTitle={selectedCar.title}
        />
      </div>
    </>
  );
}
