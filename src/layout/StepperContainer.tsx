import bgSteps from "../assets/images/bg-sidebar-desktop.svg";
import { Stepper } from "../components/Stepper";

const StepperContainer = ({ steps, setActive }: any) => {
  return (
    <div className="relative">
      <img className="" src={bgSteps} alt="bg steps" />
      <div className="absolute top-10 left-8">
        <Stepper steps={steps} setActive={setActive} />
      </div>
    </div>
  );
};
export default StepperContainer;
