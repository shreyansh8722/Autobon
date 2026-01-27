const Step2_Confirm = ({ onNext, onBack }) => (
  <div className="text-center">
    <h2 className="text-2xl font-bold mb-2">Confirm Your Vehicle</h2>
    <p className="text-gray-500 mb-10">Is this information correct?</p>

    <div className="border-2 border-primary rounded-xl p-6 flex items-center gap-6 relative mb-12 bg-[#F0F7FF]">
      <img src="/honda-civic.png" alt="Car" className="w-32 object-contain" />
      <div className="text-left">
        <h3 className="text-xl font-bold">Honda Civic</h3>
        <p className="text-gray-500">2021</p>
      </div>
      <button className="absolute top-4 right-6 text-primary font-bold text-sm">
        Edit
      </button>
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

export default Step2_Confirm;
