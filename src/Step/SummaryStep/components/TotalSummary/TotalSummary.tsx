const TotalSummary = ({ total, billingOption }: any) => {
  return (
    <div className="flex justify-between p-5">
      <p className="font-ubuntu-regular text-sm text-neutral-cool-gray">
        Total ({billingOption ? "per year" : "per month"})
      </p>
      <p className="font-ubuntu-bold text-xl text-primary-purplish-blue">
        +${total}/mo
      </p>
    </div>
  );
};
export default TotalSummary;
