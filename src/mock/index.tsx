import {
  YourInfoStep,
  SelectPlanStep,
  AddOnsStep,
  SummaryStep,
} from "../layout/steps";
import { StepType } from "../types";

export const steps: StepType[] = [
  {
    index: 1,
    name: "your info",
    title: "Personal info",
    description: "Please provide your name, email address, and phone number.",
    component: () => <YourInfoStep />,
    completed: false,
  },
  {
    index: 2,
    name: "select plan",
    title: "Select your plan",
    description: "You have the option of monthly or yearly billing.",
    component: () => <SelectPlanStep />,
    completed: false,
  },
  {
    index: 3,
    name: "add-ons",
    title: "Pick add-ons",
    description: "Add-ons help enhance your gaming experience.",
    component: () => <AddOnsStep />,
    completed: false,
  },
  {
    index: 4,
    name: "summary",
    title: "Finishing up",
    description: "Double-check everything looks OK before confirming.",
    component: () => <SummaryStep />,
    completed: false,
  },
];
