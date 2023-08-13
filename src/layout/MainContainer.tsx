import { useState } from "react";

import StepContainer from "./StepContainer";
import StepperContainer from "./StepperContainer";

import { steps } from "../mock";

const MainContainer = () => {
  const [active, setActive] = useState(0);
  const currentStep = steps.at(active);

  return (
    <main className="flex justify-center items-center h-screen bg-neutral-magnolia">
      <div className="p-4 bg-white rounded-2xl flex">
        <StepperContainer setActive={setActive} steps={steps} />
        <StepContainer
          title={currentStep?.title}
          description={currentStep?.description}
        >
          {currentStep?.component()}
        </StepContainer>
      </div>
    </main>
  );
};
export default MainContainer;
