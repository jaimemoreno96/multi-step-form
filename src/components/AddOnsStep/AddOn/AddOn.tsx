import { AddOnCheckBox } from "./AddOnCheckBox";
import { AddOnDescription } from "./AddOnDescription";
import { AddOnPrice } from "./AddOnPrice";
import { AddOnTitle } from "./AddOnTitle";

const AddOn = ({ addOn }: any) => {
  return (
    <figure className="relative flex gap-x-6 p-5 border border-neutral-light-gray rounded-lg">
      <AddOnCheckBox />
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
