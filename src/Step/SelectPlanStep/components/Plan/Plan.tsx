import { PlanDeal } from "./PlanDeal";
import { PlanIcon } from "./PlanIcon";
import { PlanName } from "./PlanName";
import { PlanPrice } from "./PlanPrice";

const Plan = ({ plan, isLast, optionBilling, setSelectedPlan }: any) => {
  const { name, icon, price, selected } = plan;
  return (
    <figure
      className={`w-full border rounded-lg p-4 cursor-pointer ${
        selected
          ? "border-primary-purplish-blue bg-neutral-alabaster"
          : "border-neutral-light-gray"
      }  ${!isLast && "mr-4"}`}
      onClick={() => setSelectedPlan(plan.index)}
    >
      <PlanIcon planName={name} planIcon={icon} />
      <PlanName planName={name} />
      <PlanPrice
        planPrice={optionBilling ? price.yearly : price.monthly}
        planBilling={optionBilling ? "yr" : "mo"}
      />
      {optionBilling && <PlanDeal />}
    </figure>
  );
};
export default Plan;
