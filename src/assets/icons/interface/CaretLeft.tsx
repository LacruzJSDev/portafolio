import { FC } from 'react';
import { IconProps } from '../../../types/icon.types';

const CaretDown: FC<IconProps> = ({ className = 'fill-black', size = 24 }) => {
	return (
		<svg width={size} height={size} xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMidYMid' viewBox='0 0 256 256'>
			<path className={className} xmlns='http://www.w3.org/2000/svg' fillRule='evenodd' clipRule='evenodd' d='M136.916 184.407c11.363 11.578 31.242 2.954 31.005-12.728-.237-15.682-.237-71.898-.237-87.355v-.003c0-15.453-17.987-23.243-29.502-11.835-3.95 3.913-9.505 9.312-15.348 14.99-11.192 10.879-23.441 22.784-27.494 27.242-6.169 6.786-8.362 19.001-.898 26.332 4.938 4.85 16.962 17.194 27.823 28.345 5.555 5.703 10.806 11.094 14.651 15.012zm13.777-13.569c.011 2.214-1.465 1.562-3.02 0v-.001l-40.04-39.91c-1.548-1.554-1.561-4.107-.013-5.684l41.117-41.082c1.548-1.578 1.944-.605 1.956 1.605v85.072z' />
		</svg>
	);
};

export default CaretDown;
