"use client";
import React, { useState } from "react";
import Step1_VIN from "../../pages/SellCar/Step1";
import Step2_Confirm from "../../pages/SellCar/Step2";
import Step3_Mileage from "../../pages/SellCar/Step3";
import Step4_Contact from "../../pages/SellCar/Step4";
import Step5_Offer from "../../pages/SellCar/Step5";

const SellCarPage = () => {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [formData, setFormData] = useState({
    vin: "",
    year: "",
    make: "",
    model: "",
    city: "",
    mileage: "",
    condition: "Excellent",
    contact: { firstName: "", lastName: "", email: "", phone: "" },
  });

  // Screen 1 and 2 are both Step 1 (VIN vs Manual Details)
  const renderScreen = () => {
    switch (currentScreen) {
      case 1:
        return (
          <Step1_VIN
            onNext={() => setCurrentScreen(3)}
            onSwitch={() => setCurrentScreen(2)}
          />
        );
      case 2:
        return (
          <Step1_Details
            onNext={() => setCurrentScreen(3)}
            onBack={() => setCurrentScreen(1)}
          />
        );
      case 3:
        return (
          <Step2_Confirm
            onNext={() => setCurrentScreen(4)}
            onBack={() => setCurrentScreen(2)}
          />
        );
      case 4:
        return (
          <Step3_Mileage
            onNext={() => setCurrentScreen(5)}
            onBack={() => setCurrentScreen(3)}
          />
        );
      case 5:
        return (
          <Step4_Contact
            onNext={() => setCurrentScreen(6)}
            onBack={() => setCurrentScreen(4)}
          />
        );
      case 6:
        return <Step5_Offer onBack={() => setCurrentScreen(5)} />;
      default:
        return <Step1_VIN />;
    }
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-[700px] mx-auto">
        {/* Progress Bar */}
        <div className="mb-10 text-center">
          <p className="text-gray-400 text-sm mb-2">
            Step{" "}
            {Math.min(
              currentScreen === 2
                ? 1
                : currentScreen - (currentScreen > 2 ? 1 : 0),
              5,
            )}{" "}
            of 5
          </p>
          <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
            <div
              className="bg-primary h-full transition-all duration-500"
              style={{
                width: `${(Math.min(currentScreen === 2 ? 1 : currentScreen - (currentScreen > 2 ? 1 : 0), 5) / 5) * 100}%`,
              }}
            />
          </div>
        </div>
        {renderScreen()}
      </div>
    </div>
  );
};

export default SellCarPage;
