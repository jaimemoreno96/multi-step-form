import { StepButtons } from "../components/ui/StepButtons";
import { StepDescription } from "../components/ui/StepDescription";
import { StepTitle } from "../components/ui/StepTitle";

const StepContainer = ({ children, title, description }: any) => {
  return (
    <div className="py-10 px-20 w-[620px]">
      <StepTitle title={title} />
      <StepDescription description={description} />
      {children}
      <StepButtons />
    </div>
  );
};
export default StepContainer;
