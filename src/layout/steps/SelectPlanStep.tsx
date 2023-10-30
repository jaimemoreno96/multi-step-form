/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { Plan } from "../../components/SelectPlanStep/Plan";
import { BillingOptionLabel } from "../../components/SelectPlanStep/BillingOptionLabel";
import { BillingOptionSwitch } from "../../components/SelectPlanStep/BillingOptionSwitch";

import iconArcade from "../../assets/icons/icon-arcade.svg";
import iconAdvanced from "../../assets/icons/icon-advanced.svg";
import iconPro from "../../assets/icons/icon-pro.svg";

const SelectPlanStep = () => {
  const [optionBillingYearly, setOptionBillingYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [plans, setPlans] = useState([
    {
      index: 1,
      icon: iconArcade,
      name: "Arcade",
      price: { yearly: 90, monthly: 9 },
      selected: false,
    },
    {
      index: 2,
      icon: iconAdvanced,
      name: "Advanced",
      price: { yearly: 120, monthly: 12 },
      selected: false,
    },
    {
      index: 3,
      icon: iconPro,
      name: "Pro",
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
