"use client";

import React, { ReactNode } from "react";
import { store } from "./store";
import { Provider } from "react-redux";

export const Providers = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
}