const PlanSummary = ({ plan, optionBilling, planPrice }: any) => {
  return (
    <div className="flex justify-between">
      <div>
        <p className="font-ubuntu-medium text-base text-primary-marine-blue">
          {plan}({optionBilling ? "Yearly" : "Monthly"})
        </p>
        <p className="font-ubuntu-regular text-sm text-neutral-cool-gray underline">
          Change
        </p>
      </div>
      <div className="flex items-center">
        <p className="font-ubuntu-bold text-base text-primary-marine-blue">
          ${planPrice}/mo
        </p>
      </div>
    </div>
  );
};
export default PlanSummary;
