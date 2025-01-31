import { useState, useEffect, useRef } from 'react';

interface ScrollDirection {
	scrollUp: boolean;
	scrollDown: boolean;
	isAtStart: boolean;
	isAtEnd: boolean;
	wheelDelta: number; // Valor para el scroll del ratón
	touchDelta: number; // Valor para el desplazamiento táctil
}

const useScrollOrTouchDirection = (ref: React.RefObject<HTMLDivElement | null>): ScrollDirection => {
	const [scrollUp, setScrollUp] = useState(false);
	const [scrollDown, setScrollDown] = useState(false);
	const [isAtStart, setIsAtStart] = useState(true);
	const [isAtEnd, setIsAtEnd] = useState(false);
	const [wheelDelta, setWheelDelta] = useState(0); // Valor del scroll con ratón
	const [touchDelta, setTouchDelta] = useState(0); // Valor del scroll táctil

	const touchStartY = useRef<number | null>(null);

	useEffect(() => {
		const element = ref?.current || window;

		// Manejo del evento `wheel` para ratón
		const handleWheel = (event: WheelEvent) => {
			setWheelDelta(event.deltaY);

			if (event.deltaY > 0) {
				setScrollDown(true);
				setScrollUp(false);
			} else if (event.deltaY < 0) {
				setScrollDown(false);
				setScrollUp(true);
			}

			const target = ref?.current || document.documentElement;
			const scrollTop = target.scrollTop || document.documentElement.scrollTop;
			const scrollHeight = target.scrollHeight || document.documentElement.scrollHeight;
			const clientHeight = target.clientHeight || window.innerHeight;

			setIsAtStart(scrollTop <= 0);
			setIsAtEnd(scrollTop + clientHeight >= scrollHeight);
		};

		// Manejo de eventos táctiles (`touchstart` y `touchmove`)
		const handleTouchStart = (event: TouchEvent) => {
			touchStartY.current = event.touches[0].clientY;
		};

		const handleTouchMove = (event: TouchEvent) => {
			if (touchStartY.current !== null) {
				const touchCurrentY = event.touches[0].clientY;
				const deltaY = touchCurrentY - touchStartY.current;
				setTouchDelta(deltaY);

				if (deltaY > 0) {
					setScrollUp(true);
					setScrollDown(false);
				} else if (deltaY < 0) {
					setScrollUp(false);
					setScrollDown(true);
				}
			}

			const target = ref?.current || document.documentElement;
			const scrollTop = target.scrollTop || document.documentElement.scrollTop;
			const scrollHeight = target.scrollHeight || document.documentElement.scrollHeight;
			const clientHeight = target.clientHeight || window.innerHeight;

			setIsAtStart(scrollTop <= 0);
			setIsAtEnd(scrollTop + clientHeight >= scrollHeight);
		};

		// Agregar los listeners
		if (element instanceof HTMLElement) {
			element.addEventListener('wheel', handleWheel);
			element.addEventListener('touchstart', handleTouchStart);
			element.addEventListener('touchmove', handleTouchMove);
		} else {
			window.addEventListener('wheel', handleWheel);
			window.addEventListener('touchstart', handleTouchStart);
			window.addEventListener('touchmove', handleTouchMove);
		}

		// Limpieza de los listeners al desmontar
		return () => {
			if (element instanceof HTMLElement) {
				element.removeEventListener('wheel', handleWheel);
				element.removeEventListener('touchstart', handleTouchStart);
				element.removeEventListener('touchmove', handleTouchMove);
			} else {
				window.removeEventListener('wheel', handleWheel);
				window.removeEventListener('touchstart', handleTouchStart);
				window.removeEventListener('touchmove', handleTouchMove);
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
	};
};

export default useScrollOrTouchDirection;
