const Step1_Details = ({ onNext, onBack }) => (
  <div className="text-center">
    <h2 className="text-2xl font-bold mb-8">Get Your Instant Offer</h2>
    <div className="flex justify-center mb-8">
      <div className="inline-flex border rounded-full p-1 bg-white">
        <button
          onClick={onBack}
          className="px-8 py-2 rounded-full text-gray-500"
        >
          VIN
        </button>
        <button className="bg-[#E8F1FF] text-primary px-8 py-2 rounded-full font-bold">
          Vehicle Details
        </button>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4 mb-8">
      <select className="p-4 border rounded-lg bg-[#F9FAFB]">
        <option>Year</option>
      </select>
      <select className="p-4 border rounded-lg bg-[#F9FAFB]">
        <option>Make</option>
      </select>
      <select className="p-4 border rounded-lg bg-[#F9FAFB]">
        <option>Model</option>
      </select>
      <select className="p-4 border rounded-lg bg-[#F9FAFB]">
        <option>City</option>
      </select>
    </div>
    <p className="text-xs text-gray-400 mb-8">
      We use your city to provide you an accurate offer based on your current
      market.
    </p>
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

export default Step1_Details;
