import { createSlice } from "@reduxjs/toolkit";
import { NewSubscription, PlanName } from "../types";
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
    billingOption: false,
  },
  addons,
};

export const newSubscriptionSlice = createSlice({
  name: "newSubscription",
  initialState: undefined,
  reducers: null,
});
