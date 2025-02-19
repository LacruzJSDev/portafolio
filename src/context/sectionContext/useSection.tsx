import { useContext } from 'react';
import { SectionContext, SectionContextType } from './sectionContext';

export function useSection(): SectionContextType {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error('useSection debe ser usado dentro de un SectionProvider');
  }
  return context;
}
