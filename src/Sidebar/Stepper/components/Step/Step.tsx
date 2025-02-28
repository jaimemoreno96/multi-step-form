import { StepBubble } from "./StepBubble";
import { StepName } from "./StepName";
import { StepNumber } from "./StepNumber";

const Step = ({ step, setActive }: any) => {
  const activateStep = (stepIndex: number) => {
    setActive(stepIndex - 1);
  };
  return (
    <div
      className="flex mb-6 cursor-pointer items-center"
      onClick={() => activateStep(step.index)}
    >
      <StepBubble index={step.index} />
      <div className="ml-4">
        <StepNumber stepNumber={step.index} />
        <StepName stepName={step.name} />
      </div>
    </div>
  );
};
export default Step;
