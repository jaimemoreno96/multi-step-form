export interface PlanType {
  index: number;
  icon: string;
  name: PlanName;
  price: {
    yearly: number;
    monthly: number;
  };
  selected: boolean;
}

export enum PlanName {
  arcade = "ARCADE",
  advanced = "ADVANCED",
  pro = "PRO",
}
