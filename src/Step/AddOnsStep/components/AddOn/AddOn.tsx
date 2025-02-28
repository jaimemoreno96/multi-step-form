import { useState } from "react";
import { AddOnCheckBox } from "./components/AddOnCheckBox";
import { AddOnDescription } from "./components/AddOnDescription";
import { AddOnPrice } from "./components/AddOnPrice";
import { AddOnTitle } from "./components/AddOnTitle";

const AddOn = ({ addOn }: any) => {
  const [added, setAdded] = useState(false);
  return (
    <figure
      className={`relative flex gap-x-6 p-5 border rounded-lg ${
        added
          ? "border-primary-purplish-blue bg-neutral-alabaster"
          : "border-neutral-light-gray"
      }`}
    >
      <AddOnCheckBox added={added} setAdded={setAdded} />
      <div>
        <AddOnTitle title={addOn.title} />
        <AddOnDescription description={addOn.description} />
      </div>
      <div className="ml-auto flex items-center">
        <AddOnPrice price={addOn.price.yearly} />
      </div>
    </figure>
  );
};
export default AddOn;
