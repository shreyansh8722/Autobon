import React from "react";
import home2 from "../../assets/home-2.png";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const TwoCards = () => {
  return (
    <section className="w-full bg-background px-[20px] py-[60px] lg:py-[100px] flex justify-center items-center">
      <div className="w-full max-w-custom flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[30px] justify-center">
        {/* CARD 1 */}
        <div className="bg-white w-full max-w-[720px] h-[450px]  lg:h-[500px] lg:h-[540px] rounded-[10px] border border-[#DDDDDD] cursor-pointer shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300">
          <div className="w-full p-[25px] lg:p-[40px] flex justify-between items-start">
            <div className="flex flex-col gap-[8px] lg:gap-[10px]">
              <h2 className="font-semibold text-[24px] lg:text-[28px] leading-tight text-black">
                Find Your Car
              </h2>
              <p className="font-[400] text-[12px] lg:text-[14px] text-text max-w-[250px] lg:max-w-[400px]">
                Shop the nations inventory with the best prices & rates. Zero
                Pressure!
              </p>
            </div>
            <Link
              href={"/shop"}
              className="w-[35px] h-[35px] shrink-0 flex justify-center items-center bg-primary rounded-full text-white hover:bg-primary-hover transition-all"
            >
              <ArrowRight size={20} />
            </Link>
          </div>
          <div className="mt-auto w-full flex justify-center items-end overflow-hidden">
            <img
              src={home2.src}
              alt="Find Your Car"
              className="w-full h-[320px] lg:h-[380px] object-cover"
            />
          </div>
        </div>

        {/* CARD 2 */}
        <div className="bg-white w-full max-w-[720px] h-[350px] lg:h-[500px] lg:h-[540px] rounded-[10px] border border-[#DDDDDD] cursor-pointer shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300">
          <div className="w-full p-[25px] lg:p-[40px] flex justify-between items-start">
            <div className="flex flex-col gap-[8px] lg:gap-[10px]">
              <h2 className="font-semibold text-[24px] lg:text-[28px] leading-tight text-black">
                Sell or Trade
              </h2>
              <p className="font-[400] text-[12px] lg:text-[14px] text-text max-w-[250px] lg:max-w-[400px]">
                Get an instant offer for your car in minutes. We pick it up for
                free!
              </p>
            </div>
            <Link
              href={"/sell-or-trade"}
              className="w-[35px] h-[35px] shrink-0 flex justify-center items-center bg-primary rounded-full text-white hover:bg-primary-hover transition-all"
            >
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="mt-auto w-full flex justify-center items-end overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-max lg:h-[380px] object-center object-contain lg:object-cover mx-auto"
              style={{ maxWidth: "none" }} // Prevents responsive scaling
            >
              <source src="/home-3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoCards;
