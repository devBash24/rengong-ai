"use client";
import { createContext, useContext } from "react";
import { INavigationContext } from "./navigatorProvider";

const NavigationContext = createContext<INavigationContext | null>(null);

const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};

export { NavigationContext, useNavigation };
