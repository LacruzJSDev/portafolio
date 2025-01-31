import { useState, useEffect, useMemo } from 'react';
type Device = 'mobile' | 'tablet' | 'desktop';
interface ResponsiveSize {
	width: number;
	height: number;
	device: Device;
}
export const useResponsive = (customBreakpoints?: { tablet: number; desktop: number }) => {
	const breakpoints = useMemo(() => customBreakpoints || { tablet: 768, desktop: 1024 }, [customBreakpoints]);

	const [size, setSize] = useState<ResponsiveSize>({
		width: window.innerWidth,
		height: window.innerHeight,
		device: 'desktop',
	});

	useEffect(() => {
		const calculateSize = () => {
			const width = window.innerWidth;
			const height = window.innerHeight;
			let device: Device = 'desktop';

			if (width < breakpoints.tablet) {
				device = 'mobile';
			} else if (width >= breakpoints.tablet && width < breakpoints.desktop) {
				device = 'tablet';
			}

			setSize({ width, height, device });
		};

		calculateSize();

		window.addEventListener('resize', calculateSize);
		return () => window.removeEventListener('resize', calculateSize);
	}, [breakpoints]);

	return size;
};
