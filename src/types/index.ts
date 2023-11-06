export interface StepType {
  index: number;
  name: string;
  title: string;
  description: string;
  component: () => JSX.Element;
  completed?: boolean;
  active?: boolean;
}

export interface YourInfoStepType {
  name: string;
  email: string;
  phone: string;
}

export interface SelectPlanStepType {
  plan: PlanName;
  billingOption: BillingOption;
}

export interface AddOnsStepType {
  addOns: AddOn[];
}

export interface NewSubscription {
  steps: StepType[];
  yourInfo: YourInfoStepType;
  selectPlan: SelectPlanStepType;
  addons: AddOnsStepType;
}

export interface PlanType {
  index: number;
  icon: string;
  name: PlanName;
  price: { yearly: number; monthly: number };
  selected: boolean;
}

export enum PlanName {
  ARCADE = "arcade",
  ADVANCED = "advanced",
  PRO = "pro",
}

export interface AddOn {
  title: string;
  description: string;
  added: boolean;
  price: number;
}

export enum BillingOption {
  MONTHLY = "monthly",
  YEARLY = "yearly",
}

export interface AppState {
  newSubscription: NewSubscription;
}

export interface InputType {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

export interface YourInfoError {
  name: string;
  email: string;
  phone: string;
}
