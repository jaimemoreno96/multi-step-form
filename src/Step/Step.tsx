import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { StepButtons } from "./components/StepButtons";
import { StepDescription } from "./components/StepDescription";
import { StepTitle } from "./components/StepTitle";
import { YourInfoStep } from "./YourInfoStep";
import { SelectPlanStep } from "./SelectPlanStep";
import { AddOnsStep } from "./AddOnsStep";
import { SummaryStep } from "./SummaryStep";

const Step = ({ children, title, description }: any) => {
  const router = createBrowserRouter([
    { index: true, path: "/", element: <YourInfoStep /> },
    { path: "/yourinfo", element: <YourInfoStep /> },
    { path: "/selectplan", element: <SelectPlanStep /> },
    { path: "/addons", element: <AddOnsStep /> },
    { path: "/summary", element: <SummaryStep /> },
  ]);
  return (
    <div className="flex flex-col py-10 px-20 ml-4 w-[620px]">
      <StepTitle title={title} />
      <StepDescription description={description} />
      {children}
      <RouterProvider router={router} />
      <StepButtons />
    </div>
  );
};
export default Step;
