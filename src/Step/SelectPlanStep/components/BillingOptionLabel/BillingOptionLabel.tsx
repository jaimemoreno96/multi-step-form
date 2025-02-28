const BillingOptionLabel = ({ option, isSelected }: any) => {
  return (
    <p
      className={`text-base font-ubuntu-medium ${
        isSelected ? "text-primary-marine-blue" : "text-neutral-cool-gray"
      }`}
    >
      {option}
    </p>
  );
};
export default BillingOptionLabel;
