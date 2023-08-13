const StepButtons = () => {
  return (
    <div className="flex">
      <div className="w-full flex justify-start">
        <button
          className="text-neutral-cool-gray font-ubuntu-medium px-6 py-3 "
          type="button"
        >
          Go Back
        </button>
      </div>
      <div className="w-full flex justify-end">
        <button
          className="text-white font-ubuntu-medium px-6 bg-primary-marine-blue rounded-lg"
          type="button"
        >
          Next Step
        </button>
        <button
          className="text-white font-ubuntu-medium px-6 bg-primary-purplish-blue rounded-lg hidden"
          type="button"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};
export default StepButtons;
