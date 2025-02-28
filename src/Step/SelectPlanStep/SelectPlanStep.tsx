/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { Plan } from "./components/Plan";
import { BillingOptionLabel } from "./components/BillingOptionLabel";
import { BillingOptionSwitch } from "../../components/SelectPlanStep/BillingOptionSwitch";

import iconArcade from "./assets/icons/icon-arcade.svg";
import iconAdvanced from "./assets/icons/icon-advanced.svg";
import iconPro from "./assets/icons/icon-pro.svg";
import { PlanName, PlanType } from "./models";

const SelectPlanStep = () => {
  const [optionBillingYearly, setOptionBillingYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [plans, setPlans] = useState<PlanType[]>([
    {
      index: 1,
      icon: iconArcade,
      name: PlanName.arcade,
      price: { yearly: 90, monthly: 9 },
      selected: false,
    },
    {
      index: 2,
      icon: iconAdvanced,
      name: PlanName.advanced,
      price: { yearly: 120, monthly: 12 },
      selected: false,
    },
    {
      index: 3,
      icon: iconPro,
      name: PlanName.pro,
      price: { yearly: 150, monthly: 15 },
      selected: false,
    },
  ]);

  useEffect(() => {
    const plansAfterSelect = [...plans].map((plan) => {
      return { ...plan, selected: plan.index === selectedPlan };
    });

    setPlans(plansAfterSelect);
  }, [selectedPlan]);

  return (
    <div className="flex flex-col">
      <div className="flex mb-8">
        {plans.map((plan) => (
          <Plan
            key={plan.index}
            plan={plan}
            isLast={plan.index === plans.length}
            optionBilling={optionBillingYearly}
            setSelectedPlan={setSelectedPlan}
          />
        ))}
      </div>
      <div className="flex w-full py-2 justify-center items-center rounded-lg bg-neutral-alabaster">
        <BillingOptionLabel
          option="Monthly"
          isSelected={!optionBillingYearly}
        />
        <BillingOptionSwitch
          optionBilling={optionBillingYearly}
          setOptionBilling={setOptionBillingYearly}
        />
        <BillingOptionLabel option="Yearly" isSelected={optionBillingYearly} />
      </div>
    </div>
  );
};
export default SelectPlanStep;
