import { createContext } from "react";

export interface SectionContextType {
  sectionIndex: number;
  setSectionIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const SectionContext = createContext<SectionContextType | undefined>(
  undefined
);
