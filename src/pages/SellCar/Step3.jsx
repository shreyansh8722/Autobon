const Step3_Mileage = ({ onNext, onBack }) => (
  <div className="text-center">
    <h2 className="text-2xl font-bold mb-2">Vehicle Details</h2>
    <p className="text-gray-500 mb-8">Tell us about your 2021 Honda Civic</p>

    <div className="text-left mb-8">
      <label className="block font-bold mb-2">Current Mileage (km)</label>
      <input
        type="text"
        placeholder="Eg. 90000kms"
        className="w-full p-4 border rounded-lg outline-none"
      />
    </div>

    <div className="text-left mb-10">
      <label className="block font-bold mb-4">Overall Condition</label>
      <div className="grid grid-cols-2 gap-4">
        {[
          { label: "Excellent", desc: "Like new, no issues", active: true },
          { label: "Good", desc: "Minor wear, runs great" },
          { label: "Fair", desc: "Some repairs needed" },
          { label: "Poor", desc: "Major issues or damage" },
        ].map((item) => (
          <div
            key={item.label}
            className={`p-4 border rounded-lg cursor-pointer ${item.active ? "border-primary bg-[#F0F7FF]" : "border-gray-200"}`}
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-4 h-4 rounded-full border flex items-center justify-center ${item.active ? "border-primary" : "border-gray-300"}`}
              >
                {item.active && (
                  <div className="w-2 h-2 bg-primary rounded-full" />
                )}
              </div>
              <p className="font-bold text-sm">{item.label}</p>
            </div>
            <p className="text-[11px] text-gray-400 ml-6">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="flex gap-4">
      <button
        onClick={onBack}
        className="flex-1 border py-4 rounded-lg font-bold text-gray-500"
      >
        Back
      </button>
      <button
        onClick={onNext}
        className="flex-1 bg-primary text-white py-4 rounded-lg font-bold"
      >
        Continue
      </button>
    </div>
  </div>
);

export default Step3_Mileage;
