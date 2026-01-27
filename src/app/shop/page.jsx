"use client";
import React, { useState } from "react";
import CarsGrid from "@/components/CarsGrid";
import Filters from "@/pages/ShopCars/Filter";
import { SlidersHorizontal, X } from "lucide-react";

const ShopPage = () => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen ">
      <div className="flex p-4 lg:p-[40px] flex-col lg:flex-row">
        {isMobileFilterOpen && (
          <div className="fixed inset-0 z-[100] bg-white lg:hidden overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h2 className="text-[20px] font-bold">Filters</h2>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-2 bg-gray-100 rounded-full"
              >
                <X size={24} />
              </button>
            </div>
            <Filters />
            <div className="sticky bottom-0 left-0 right-0 p-4 bg-white border-t mt-6">
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full h-[50px] bg-primary text-white rounded-full font-bold"
              >
                Show Results
              </button>
            </div>
          </div>
        )}

        <aside className="hidden lg:block w-[280px] sticky top-0 h-screen overflow-y-auto border rounded-[5px] border-[#E3E3E3] bg-white p-6">
          <Filters />
        </aside>

        <main className="flex-1 p-0 lg:p-10 lg:pr-0 lg:pt-0">
          <CarsGrid onMobileFilterClick={() => setIsMobileFilterOpen(true)} />
        </main>
      </div>

      {/* Why Buy From Autonbon Section */}
      <section className=" p-6 text-[#6D6D6D]  lg:p-[80px]">
        <div className=" mx-auto">
          <h2 className="text-[28px] lg:text-[32px] text-black font-semibold mb-10">
            Why Buy Your Next Car From Autonbon?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Overview */}
            <div>
              <h3 className="text-black text-[20px] font-semibold mb-4">
                Overview
              </h3>
              <p className="leading-relaxed mb-6">
                Clutch isn’t a classifieds marketplace and it’s not a
                traditional dealership—
                <span className="font-semibold text-black">
                  {" "}
                  we own every vehicle we sell
                </span>
                . We purchase cars directly from their previous owners, then put
                each one through professional reconditioning and a meticulous
                210-point inspection so it meets our strict standards for
                quality and safety. By skipping auctions and middlemen, we
                deliver transparent pricing, quality vehicles, and zero
                surprises.
              </p>

              <ul className="space-y-4 ">
                <li>
                  <span className="font-semibold text-black">
                    Direct-from-owner sourcing
                  </span>{" "}
                  – Better vehicle histories and tighter quality control from
                  day one.
                </li>
                <li>
                  <span className="font-semibold text-black">
                    In-house reconditioning
                  </span>{" "}
                  – Professional detailing, OEM-grade parts, and strict quality
                  standards.
                </li>
                <li>
                  <span className="font-semibold text-black">
                    Convenient at-home delivery
                  </span>{" "}
                  – Pick a time and place, and we’ll bring the car to your door
                  (delivery fees vary by location).
                </li>
                <li>
                  <span className="font-semibold text-black">
                    10-Day Money-Back Guarantee
                  </span>{" "}
                  – Drive it for up to 10 days or 750 km; return it if it’s not
                  the right fit.
                </li>
                <li>
                  <span className="font-semibold text-black">
                    Optional 3-month warranty & additional protection plans
                  </span>{" "}
                  – Add extra coverage and roadside assistance for additional
                  peace of mind.
                </li>
              </ul>
              <div className="my-20">
                <h3 className="text-[20px] font-semibold text-black mb-4">
                  Potential Trade-offs
                </h3>
                <p className=" mb-6">
                  Buying used offers big savings, but it’s smart to weigh a few
                  considerations before you purchase.
                </p>
                <ul className="space-y-4 ">
                  <li>
                    <span className="font-semibold text-black">
                      Previous Ownership History
                    </span>{" "}
                    – Every pre-owned vehicle has a unique story. Reviewing
                    service records and vehicle-history reports helps you
                    understand how the car was maintained.
                  </li>
                  <li>
                    <span className="font-semibold text-black">
                      Financing Rate Differences
                    </span>{" "}
                    – Auto loans for used cars sometimes carry higher APRs than
                    promotional rates on new vehicles, but the lower purchase
                    price keeps ownership cost in check.
                  </li>
                  <li>
                    <span className="font-semibold text-black">
                      Evolving Tech & Safety Features
                    </span>{" "}
                    – Older model years may not include the very latest
                    driver-assistance suites or wireless updates found on
                    brand-new releases.
                  </li>
                  <li>
                    <span className="font-semibold text-black">
                      High-Demand Models Sell Fast
                    </span>{" "}
                    – Popular picks like the Toyota RAV4 or Ford F-150 move
                    quickly. If you spot the right fit, be ready to act.
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Key Benefits & Trade-offs */}
            <div className="space-y-12">
              <div>
                <h3 className="text-black text-[20px] font-bold mb-4">
                  Key Benefits
                </h3>
                <p className=" mb-6">
                  Choosing a pre-owned vehicle lets you maximize value, upgrade
                  features, and keep more money in your pocket from day one.
                </p>
                <ul className="space-y-4 ">
                  <li>
                    <span className="font-semibold text-black">
                      Lower depreciation
                    </span>{" "}
                    – Skip the first-owner drop and lock in better resale value.
                  </li>
                  <li>
                    <span className="font-semibold text-black">
                      More car for your budget
                    </span>{" "}
                    – Stretch your dollar into a higher trim, luxury badge, or
                    EV.
                  </li>
                  <li>
                    <span className="font-semibold text-black">
                      Proven reliability
                    </span>{" "}
                    – Research real-world owner reviews before you buy.
                  </li>
                  <li>
                    <span className="font-semibold text-black">
                      Lower insurance costs
                    </span>{" "}
                    – Premiums are typically lower on pre-owned vehicles.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
