import { createSlice } from "@reduxjs/toolkit";
import { NewSubscription } from "../types";
import { steps } from "../mock";

export const initialState: NewSubscription = {
  steps,
  yourInfo: {
    email: "",
    name: "",
    phone: 0,
  },
};

export const newSubscriptionSlice = createSlice({
  name: "newSubscription",
  initialState: undefined,
  reducers: null,
});
