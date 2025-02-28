const PlanPrice = ({ planPrice, planBilling }: any) => {
  return (
    <p className="font-ubuntu-regular text-sm text-neutral-cool-gray">
      ${planPrice}/{planBilling}
    </p>
  );
};
export default PlanPrice;
