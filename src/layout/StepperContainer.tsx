import bgSteps from "../assets/images/bg-sidebar-desktop.svg";
import { Stepper } from "../components/Stepper";

const StepperContainer = ({ steps, setActive }: any) => {
  return (
    <aside className="relative">
      <img className="" src={bgSteps} alt="bg steps" />
      <div className="absolute top-10 left-8">
        <Stepper steps={steps} setActive={setActive} />
      </div>
    </aside>
  );
};
export default StepperContainer;
