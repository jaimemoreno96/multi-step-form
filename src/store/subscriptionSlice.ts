import { createSlice } from "@reduxjs/toolkit";
import { BillingOption, NewSubscription, PlanName } from "../types";
import { steps } from "../mock";

export const initialState: NewSubscription = {
  steps,
  yourInfo: {
    email: "",
    name: "",
    phone: "",
  },
  selectPlan: {
    plan: PlanName.ARCADE,
    billingOption: BillingOption.MONTHLY,
  },
  addons,
};

export const newSubscriptionSlice = createSlice({
  name: "newSubscription",
  initialState: undefined,
  reducers: null,
});
