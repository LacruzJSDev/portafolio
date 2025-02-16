import { useState, useEffect, useRef } from 'react';

interface ScrollDirection {
  scrollUp: boolean;
  scrollDown: boolean;
  isAtStart: boolean;
  isAtEnd: boolean;
  wheelDelta: number;
  touchDelta: number;
  resetScroll: () => void;
}

const useScrollOrTouchDirection = (ref: React.RefObject<HTMLDivElement | null>): ScrollDirection => {
  const [scrollUp, setScrollUp] = useState(false);
  const [scrollDown, setScrollDown] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [wheelDelta, setWheelDelta] = useState(0);
  const [touchDelta, setTouchDelta] = useState(0);

  const touchStartY = useRef<number | null>(null);
  const lastScrollTime = useRef<number>(Date.now());
  const isTransitioning = useRef<boolean>(false);
  const scrollThreshold = 800; // Tiempo mínimo entre transiciones (ms)
  const wheelThreshold = 50; // Umbral para el evento wheel
  const touchThreshold = 50; // Umbral para el evento touch

  const resetScroll = () => {
    setScrollUp(false);
    setScrollDown(false);
    setWheelDelta(0);
    setTouchDelta(0);
  };

  useEffect(() => {
    const element = ref?.current || window;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      
      const currentTime = Date.now();
      if (isTransitioning.current || currentTime - lastScrollTime.current < scrollThreshold) {
        return;
      }

      // Acumular delta hasta alcanzar el umbral
      setWheelDelta(prev => {
        const newDelta = prev + event.deltaY;
        
        if (Math.abs(newDelta) >= wheelThreshold) {
          if (newDelta > 0) {
            setScrollDown(true);
            setScrollUp(false);
          } else {
            setScrollDown(false);
            setScrollUp(true);
          }
          
          isTransitioning.current = true;
          lastScrollTime.current = currentTime;
          
          // Programar el reset del estado de transición
          setTimeout(() => {
            isTransitioning.current = false;
          }, scrollThreshold);
          
          return 0; // Reset delta after triggering
        }
        
        return newDelta;
      });

      const target = ref?.current || document.documentElement;
      const scrollTop = target.scrollTop || document.documentElement.scrollTop;
      const scrollHeight = target.scrollHeight || document.documentElement.scrollHeight;
      const clientHeight = target.clientHeight || window.innerHeight;

      setIsAtStart(scrollTop <= 0);
      setIsAtEnd(scrollTop + clientHeight >= scrollHeight);
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0].clientY;
      setWheelDelta(0);
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (touchStartY.current === null) return;
      
      const currentTime = Date.now();
      if (isTransitioning.current || currentTime - lastScrollTime.current < scrollThreshold) {
        return;
      }

      const touchCurrentY = event.touches[0].clientY;
      const deltaY = touchCurrentY - touchStartY.current;
      
      // Solo actualizar touchDelta si no estamos en transición
      setTouchDelta(deltaY);

      // Verificar si el movimiento excede el umbral
      if (Math.abs(deltaY) >= touchThreshold) {
        if (deltaY > 0) {
          setScrollUp(true);
          setScrollDown(false);
        } else {
          setScrollUp(false);
          setScrollDown(true);
        }
        
        isTransitioning.current = true;
        lastScrollTime.current = currentTime;
        touchStartY.current = null;
        
        // Programar el reset del estado de transición
        setTimeout(() => {
          isTransitioning.current = false;
        }, scrollThreshold);
      }

      const target = ref?.current || document.documentElement;
      const scrollTop = target.scrollTop || document.documentElement.scrollTop;
      const scrollHeight = target.scrollHeight || document.documentElement.scrollHeight;
      const clientHeight = target.clientHeight || window.innerHeight;

      setIsAtStart(scrollTop <= 0);
      setIsAtEnd(scrollTop + clientHeight >= scrollHeight);
    };

    const handleTouchEnd = () => {
      touchStartY.current = null;
      setTouchDelta(0);
    };

    if (element instanceof HTMLElement) {
      element.addEventListener('wheel', handleWheel, { passive: false });
      element.addEventListener('touchstart', handleTouchStart);
      element.addEventListener('touchmove', handleTouchMove);
      element.addEventListener('touchend', handleTouchEnd);
    } else {
      window.addEventListener('wheel', handleWheel, { passive: false });
      window.addEventListener('touchstart', handleTouchStart);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      if (element instanceof HTMLElement) {
        element.removeEventListener('wheel', handleWheel);
        element.removeEventListener('touchstart', handleTouchStart);
        element.removeEventListener('touchmove', handleTouchMove);
        element.removeEventListener('touchend', handleTouchEnd);
      } else {
        window.removeEventListener('wheel', handleWheel);
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [ref]);

  return {
    scrollUp,
    scrollDown,
    isAtStart,
    isAtEnd,
    wheelDelta,
    touchDelta,
    resetScroll
  };
};

export default useScrollOrTouchDirection;