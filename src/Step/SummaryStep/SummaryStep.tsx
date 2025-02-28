import { AddOnsSummary } from "./components/AddOnsSummary";
import { PlanSummary } from "./components/PlanSummary";
import { TotalSummary } from "./components/TotalSummary";

const SummaryStep = () => {
  const purchasedAddOns = [
    {
      title: "Online service",
      price: 1,
    },
    {
      title: "Larger storage",
      price: 2,
    },
  ];

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col gap-y-5 bg-neutral-alabaster rounded-lg p-5">
        <PlanSummary plan="Arcade" optionBilling={false} planPrice={9} />
        <hr />
        {purchasedAddOns.map((purchasedAddOn) => (
          <AddOnsSummary
            key={purchasedAddOn.title}
            purchasedAddOn={purchasedAddOn}
          />
        ))}
      </div>
      <TotalSummary total={12} billingOption={false} />
    </div>
  );
};
export default SummaryStep;
