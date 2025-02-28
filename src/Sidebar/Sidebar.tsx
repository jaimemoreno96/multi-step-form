import { Stepper } from "./Stepper";
import bgSteps from "../assets/images/bg-sidebar-desktop.svg";

const Sidebar = ({ steps, setActive }: any) => {
  return (
    <aside className="relative">
      <img className="w-full" src={bgSteps} alt="bg steps" />
      <div className="absolute top-10 left-8">
        <Stepper steps={steps} setActive={setActive} />{" "}
      </div>
    </aside>
  );
};
export default Sidebar;
