import { PlanDeal } from "./PlanDeal";
import { PlanIcon } from "./PlanIcon";
import { PlanName } from "./PlanName";
import { PlanPrice } from "./PlanPrice";

const Plan = ({ plan, isLast }: any) => {
  return (
    <figure
      className={`w-full border border-neutral-light-gray rounded-lg p-4 cursor-pointer ${
        !isLast && "mr-4"
      }`}
    >
      <PlanIcon planName={plan.name} planIcon={plan.icon} />
      <PlanName planName={plan.name} />
      <PlanPrice planPrice={plan.price} planBilling={plan.billing} />
      <PlanDeal />
    </figure>
  );
};
export default Plan;
