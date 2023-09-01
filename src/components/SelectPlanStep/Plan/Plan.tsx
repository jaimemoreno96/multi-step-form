import { PlanDeal } from "./PlanDeal";
import { PlanIcon } from "./PlanIcon";
import { PlanName } from "./PlanName";
import { PlanPrice } from "./PlanPrice";

const Plan = ({ plan, isLast, optionBilling }: any) => {
  const { name, icon, price } = plan;
  return (
    <figure
      className={`w-full border border-neutral-light-gray rounded-lg p-4 cursor-pointer ${
        !isLast && "mr-4"
      }`}
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
