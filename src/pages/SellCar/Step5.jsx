const Step5_Offer = ({ onBack }) => (
  <div className="text-center">
    <h2 className="text-2xl font-bold mb-2">Your Estimated Offer</h2>
    <p className="text-gray-500 mb-8">Based on current market conditions</p>

    <div className="mb-10">
      <p className="text-gray-500 font-bold text-sm mb-2">Estimated Value</p>
      <h1 className="text-6xl font-black text-gray-800">$7,508</h1>
      <p className="text-gray-400 text-sm mt-4">
        Final offer may vary after inspection
      </p>
    </div>

    <div className="border border-primary rounded-xl p-4 flex items-center gap-6 mb-12 bg-[#F0F7FF] max-w-[500px] mx-auto">
      <img src="/honda-civic.png" alt="Car" className="w-24 object-contain" />
      <div className="text-left">
        <h3 className="font-bold">2021 Honda Civic</h3>
        <p className="text-xs text-gray-500">76,990 km • Excellent condition</p>
      </div>
    </div>

    <div className="flex gap-4 max-w-[400px] mx-auto">
      <button
        onClick={onBack}
        className="flex-1 border py-4 rounded-lg font-bold text-gray-500"
      >
        Back
      </button>
      <button className="flex-1 bg-primary text-white py-4 rounded-lg font-bold">
        Continue
      </button>
    </div>
  </div>
);

export default Step5_Offer;
