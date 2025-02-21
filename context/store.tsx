"use client";

import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export type TContextValue = {
  showMobileNav: boolean;
  setShowMobileNav: Dispatch<SetStateAction<boolean>>;
};

export const AppContext = createContext<TContextValue | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <AppContext.Provider value={{ showMobileNav, setShowMobileNav }}>
      {children}
    </AppContext.Provider>
  );
};
