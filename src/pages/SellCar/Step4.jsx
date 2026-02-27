const Step4_Contact = ({ onNext, onBack }) => (
  <div className="text-center">
    <h2 className="text-2xl font-bold mb-2">Almost Done!</h2>
    <p className="text-gray-500 mb-8">
      Enter your contact information to receive your offer
    </p>

    <div className="space-y-4 text-left mb-10 lg:px-20">
      <div>
        <label className="text-xs font-bold text-gray-500 mb-1 block">
          First Name
        </label>
        <input
          type="text"
          placeholder="John"
          className="w-full p-4 border  border-border  bg-[#F9FAFB]"
        />
      </div>
      <div>
        <label className="text-xs font-bold text-gray-500 mb-1 block">
          Last Name
        </label>
        <input
          type="text"
          placeholder="Doe"
          className="w-full p-4 border  border-border  bg-[#F9FAFB]"
        />
      </div>
      <div>
        <label className="text-xs font-bold text-gray-500 mb-1 block">
          Email Address
        </label>
        <input
          type="email"
          placeholder="john@example.com"
          className="w-full p-4 border  border-border  bg-[#F9FAFB]"
        />
      </div>
      <div>
        <label className="text-xs font-bold text-gray-500 mb-1 block">
          Phone Number
        </label>
        <input
          type="text"
          placeholder="+1 (555) 123-4567"
          className="w-full p-4 border  border-border  bg-[#F9FAFB]"
        />
      </div>
    </div>

    <div className="flex gap-4">
      <button
        onClick={onBack}
        className=" w-max px-20 border border-[#BFBFBF] py-4 rounded-none font-bold text-gray-500 hover:bg-gray-50 transition-colors"
      >
        Back
      </button>
      <button
        onClick={onNext}
        className="flex-1 bg-primary text-white py-4 rounded-none font-bold hover:bg-primary/90 transition-colors"
      >
        Continue
      </button>
    </div>
    <p className="text-[10px] text-gray-400 mt-4">
      By submitting, you agree to receive communications from Autobon. An
      account will be created for you.
    </p>
  </div>
);

export default Step4_Contact;
