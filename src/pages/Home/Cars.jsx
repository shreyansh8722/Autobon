"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gauge, ChevronLeft, ChevronRight } from "lucide-react";
import car1 from "../../assets/cars-1.png";
import car2 from "../../assets/cars-2.png";
import car3 from "../../assets/cars-3.png";
import Link from "next/link";

const Cars = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  const carData = [
    {
      name: "Tesla Model 3",
      desc: "Industry leading electric range with minimalist interior and autopilot features.",
      km: "8,500 km",
      fuel: "Electric",
      transmission: "Automatic",
      img: car1.src,
    },
    {
      name: "BMW X SUV",
      desc: "Excellent fuel efficiency & low maintenance. Sporty design with advanced safety features.",
      km: "14,200 km",
      fuel: "Petrol",
      transmission: "CVT",
      img: car2.src,
    },
    {
      name: "Audi A4 Sedan",
      desc: "Premium luxury combined with powerful performance and high-end technology.",
      km: "12,100 km",
      fuel: "Diesel",
      transmission: "Automatic",
      img: car3.src,
    },
  ];

  const nextSlide = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % carData.length);
  }, [carData.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + carData.length) % carData.length);
  }, [carData.length]);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(nextSlide, 3500);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const stopAutoPlay = () => setIsAutoPlaying(false);

  const getDisplayCars = () => {
    const prev = (activeIndex - 1 + carData.length) % carData.length;
    const next = (activeIndex + 1) % carData.length;
    return [
      { ...carData[prev], originalIndex: prev, side: "left" },
      { ...carData[activeIndex], originalIndex: activeIndex, side: "center" },
      { ...carData[next], originalIndex: next, side: "right" },
    ];
  };

  return (
    <section className="w-full py-[40px] lg:py-[40px] overflow-hidden">
      <div className="w-full mx-auto flex flex-col items-center">
        {/* HEADING SECTION */}
        <div className="px-[20px] lg:px-[60px] flex flex-col items-center gap-1 mb-[30px]">
          <h2 className="text-[28px] lg:text-[36px] font-semibold text-black tracking-tight text-center">
            Canada’s Favourite Cars
          </h2>
          <p className="text-[#505050] text-center text-[15px] lg:text-[15px] max-w-[500px] leading-relaxed">
            Explore a wide selection of vehicles—from fuel-efficient rides and
            everyday drivers to premium models.
          </p>
          <Link
            href={"/shop"}
            className="mt-4 flex justify-center items-center w-[180px] h-[45px] font-[500] text-[16px] rounded-full bg-[#1A6ADB] text-white cursor-pointer hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-md"
          >
            View All Cars
          </Link>
        </div>

        {/* CAROUSEL CONTAINER */}
        <div className="relative w-full h-[200px] lg:h-[280px]">
          {/* Centering achieved by items-center justify-center */}
          <div className="flex items-center justify-center w-full h-full lg:gap-12 overflow-visible">
            <AnimatePresence
              initial={false}
              mode="popLayout"
              custom={direction}
            >
              {getDisplayCars().map((car) => {
                const isActive = car.side === "center";
                return (
                  <motion.div
                    key={`${car.originalIndex}-${car.side}`}
                    layout
                    custom={direction}
                    initial={{ x: direction * 50, opacity: 0 }}
                    animate={{ x: 0, opacity: isActive ? 1 : 0.4 }}
                    exit={{ x: -direction * 50, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                    onClick={() => {
                      stopAutoPlay();
                      setActiveIndex(car.originalIndex);
                    }}
                    /* FIX: 
                       On mobile, we set side-cars to w-0 or hidden to ensure the 
                       center car takes the absolute middle of the flex container.
                    */
                    className={`relative cursor-pointer flex shrink-0 items-center justify-center transition-all duration-500
                      ${
                        isActive
                          ? "w-[75%] lg:w-[35%] scale-110 z-20"
                          : "w-0 lg:w-[15%] scale-90 z-0 opacity-0 lg:opacity-40"
                      }
                    `}
                    style={{
                      WebkitMaskImage:
                        "radial-gradient(circle, black 60%, transparent 95%)",
                      maskImage:
                        "radial-gradient(circle, black 60%, transparent 95%)",
                    }}
                  >
                    <img
                      src={car.img}
                      alt={car.name}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* NAVIGATION BUTTONS */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-1   lg:px-32 pointer-events-none z-30">
            <button
              onClick={(e) => {
                e.stopPropagation();
                stopAutoPlay();
                prevSlide();
              }}
              className="w-[35px] h-[35px] lg:w-[45px] lg:h-[45px] rounded-full bg-white/90 backdrop-blur shadow-md flex justify-center items-center pointer-events-auto hover:bg-white transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                stopAutoPlay();
                nextSlide();
              }}
              className="w-[35px] h-[35px] lg:w-[45px] lg:h-[45px] rounded-full bg-white/90 backdrop-blur shadow-md flex justify-center items-center pointer-events-auto hover:bg-white transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* INFO CARD */}
        <div className="mt-8 w-[280px] lg:w-[380px] bg-white rounded-[20px] p-4 lg:p-5 shadow-md border border-gray-50 mx-auto">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col gap-1 items-center text-center">
              <h3 className="text-[20px] lg:text-[24px] font-semibold text-black tracking-tight">
                {carData[activeIndex].name}
              </h3>
              <p className="text-[#606060] text-[12px] lg:text-[13px] leading-snug">
                {carData[activeIndex].desc}
              </p>
            </div>

            <div className="flex items-center justify-center gap-6 w-full py-2">
              {[
                { label: carData[activeIndex].km, icon: <Gauge size={18} /> },
                { label: carData[activeIndex].fuel, icon: <Gauge size={18} /> },
                {
                  label: carData[activeIndex].transmission,
                  icon: <Gauge size={18} />,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-1 text-black"
                >
                  <div className="text-black">{item.icon}</div>
                  <span className="text-[9px] lg:text-[10px] font-bold uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <button className="lg:w-[160px] w-[140px] h-[40px] lg:h-[44px] font-semibold text-[15px] rounded-full bg-[#1A6ADB] text-white hover:bg-black hover:scale-[1.02] transition-all shadow-md">
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cars;
