import Step from "./Step/Step";

const Stepper = ({ steps, setActive }: any) => {
  return (
    <>
      {steps.map((step: any) => (
        <Step step={step} setActive={setActive} />
      ))}
    </>
  );
};
export default Stepper;
