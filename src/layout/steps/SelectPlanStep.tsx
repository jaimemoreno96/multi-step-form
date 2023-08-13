/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { Plan } from "../../components/SelectPlanStep/Plan";
import iconArcade from "../../assets/icons/icon-arcade.svg";
import iconAdvanced from "../../assets/icons/icon-advanced.svg";
import iconPro from "../../assets/icons/icon-pro.svg";
import { BillingOptionLabel } from "../../components/SelectPlanStep/BillingOption";

const SelectPlanStep = () => {
  const [optionBilling, setOptionBilling] = useState(false);
  const [plans, setPlans] = useState([
    {
      index: 1,
      icon: iconArcade,
      name: "Arcade",
      price: optionBilling ? 90 : 9,
      billing: optionBilling ? "yr" : "mo",
      selected: false,
    },
    {
      index: 2,
      icon: iconAdvanced,
      name: "Advanced",
      price: optionBilling ? 120 : 12,
      billing: optionBilling ? "yr" : "mo",
      selected: false,
    },
    {
      index: 3,
      icon: iconPro,
      name: "Pro",
      price: optionBilling ? 150 : 15,
      billing: optionBilling ? "yr" : "mo",
      selected: false,
    },
  ]);

  return (
    <div className="flex flex-col">
      <div className="flex mb-8">
        {plans.map((plan) => (
          <Plan plan={plan} isLast={plan.index === plans.length} />
        ))}
      </div>
      <div className="flex w-full py-2 justify-center items-center rounded-lg bg-neutral-alabaster">
        <BillingOptionLabel option="Monthly" isSelected={!optionBilling} />
        <Switch
          checked={optionBilling}
          onChange={setOptionBilling}
          className="bg-primary-marine-blue relative inline-flex h-5 w-10 mx-6 items-center rounded-full"
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              optionBilling ? "translate-x-6" : "translate-x-1"
            } inline-block h-3 w-3 transform rounded-full bg-white transition`}
          />
        </Switch>
        <BillingOptionLabel option="Yearly" isSelected={optionBilling} />
      </div>
    </div>
  );
};
export default SelectPlanStep;
