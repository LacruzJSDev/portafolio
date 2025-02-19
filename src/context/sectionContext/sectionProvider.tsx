import { useState, ReactNode } from "react";
import { SectionContext, SectionContextType } from "./sectionContext";

interface SectionProviderProps {
  children: ReactNode;
}

export const SectionProvider = ({ children }: SectionProviderProps) => {
  const [sectionIndex, setSectionIndex] = useState<number>(0);

  const value: SectionContextType = {
    sectionIndex,
    setSectionIndex,
  };

  return (
    <SectionContext.Provider value={value}>{children}</SectionContext.Provider>
  );
};
