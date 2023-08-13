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
  phone: number;
}

export interface SelectPlanStepType {
  plan: Plan;
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

export interface Plan {
  planType: PlanType;
  price: number;
  freeMonths: number;
}

export enum PlanType {
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
