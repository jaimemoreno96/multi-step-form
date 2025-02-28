export interface StepType {
  index: number;
  name: string;
  title: string;
  description: string;
  component: () => JSX.Element;
  completed?: boolean;
  active?: boolean;
  path?: string;
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
  ARCADE = "Arcade",
  ADVANCED = "Advanced",
  PRO = "Pro",
}

export interface AddOn {
  type: AddOnType;
  description: string;
  added: boolean;
  price: number;
}

export enum AddOnType {
  ONLINE_SERVICE = "Online service",
  LARGER_STORAGE = "Larger storage",
  CUSTOMIZABLE_PROFILE = "Customizable profile",
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
