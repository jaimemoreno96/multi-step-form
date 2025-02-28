import { Step } from "./components/Step";

const Stepper = ({ steps, setActive }: any) => {
  return (
    <>
      {steps.map((step: any) => (
        <Step key={step.index} step={step} setActive={setActive} />
      ))}
    </>
  );
};
export default Stepper;
