import { AddOn } from "../../components/AddOnsStep/AddOn";

const AddOnsStep = () => {
  const addOns = [
    {
      title: "Online service",
      description: "Access to multiplayer games",
      added: false,
      price: {
        yearly: 10,
        monthly: 1,
      },
    },
    {
      title: "Larger storage",
      description: "Extra 1TB of cloud save",
      added: false,
      price: {
        yearly: 20,
        monthly: 2,
      },
    },
    {
      title: "Customizable profile",
      description: "Custom theme on your profile",
      added: false,
      price: {
        yearly: 20,
        monthly: 2,
      },
    },
  ];

  return (
    <div className="flex flex-col gap-y-4">
      {addOns.map((addOn) => (
        <div>
          <AddOn addOn={addOn} />
        </div>
      ))}
    </div>
  );
};
export default AddOnsStep;
