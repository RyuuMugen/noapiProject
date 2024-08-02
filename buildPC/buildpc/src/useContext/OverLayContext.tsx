"use client";

import React, { ReactNode, createContext, useContext, useState } from "react";

interface OverlayContextProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const OverlayContext = createContext<OverlayContextProps | undefined>(
  undefined
);

interface OverlayProviderProps {
  children: ReactNode;
}

export const useOverlayContext = () => {
  const context = useContext(OverlayContext);
  if (!context) {
    throw new Error("useOverlay must be used within a OverlayProvider");
  }
  return context;
};

export const OverLayProvider: React.FC<OverlayProviderProps> = ({
  children,
}) => {
  const [active, setActive] = useState(false);

  return (
    <OverlayContext.Provider value={{ active, setActive }}>
      {children}
    </OverlayContext.Provider>
  );
};
