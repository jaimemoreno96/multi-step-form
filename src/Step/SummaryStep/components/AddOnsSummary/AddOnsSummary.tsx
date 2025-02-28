const AddOnsSummary = ({ purchasedAddOn }: any) => {
  return (
    <div className="flex justify-between">
      <p className="font-ubuntu-regular text-sm text-neutral-cool-gray">
        {purchasedAddOn.title}
      </p>
      <p className="font-ubuntu-regular text-sm text-primary-marine-blue">
        +${purchasedAddOn.price}/mo
      </p>
    </div>
  );
};
export default AddOnsSummary;
