import { Switch } from "@headlessui/react";

const BillingOptionSwitch = ({ optionBilling, setOptionBilling }: any) => {
  return (
    <Switch
      checked={optionBilling}
      onChange={setOptionBilling}
      className="bg-primary-marine-blue relative inline-flex h-5 w-10 mx-6 items-center rounded-full"
    >
      <span className="sr-only">Change option billing</span>
      <span
        className={`${
          optionBilling ? "translate-x-6" : "translate-x-1"
        } inline-block h-3 w-3 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
};
export default BillingOptionSwitch;
