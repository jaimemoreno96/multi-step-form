import { useState } from "react";

import { Sidebar } from "./Sidebar";
import { Step } from "./Step";

import { steps } from "./mock";

const MainContainer = () => {
  const [active, setActive] = useState(0);
  const currentStep = steps.at(active);

  return (
    <main className="flex justify-center items-center h-screen bg-neutral-magnolia">
      <div className="p-4 bg-white rounded-2xl flex">
        <Sidebar setActive={setActive} steps={steps} />
        <Step title={currentStep?.title} description={currentStep?.description}>
          {currentStep?.component()}
        </Step>
      </div>
    </main>
  );
};
export default MainContainer;
