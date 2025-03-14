import { FC } from 'react';
import { IconProps } from '../../../types/icon.types';

const CaretDown: FC<IconProps> = ({ className = 'fill-black', size = 24 }) => {
	return (
		<svg width={size} height={size} xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMidYMid' viewBox='0 0 256 256'>
			<path className={className} fillRule='evenodd' clipRule='evenodd' d='M72.158 119.649c-11.578-11.362-2.954-31.242 12.729-31.005 15.682.238 71.904.238 87.357.238 15.453 0 23.578 19.299 12.17 30.815-2.119 2.14-4.694 4.746-7.524 7.612-12.403 12.561-29.725 30.102-35.25 35.125-6.786 6.17-18.794 7.154-26.124-.31-4.841-4.929-17.145-16.914-28.28-27.759-5.727-5.579-11.145-10.856-15.078-14.716zm14.225-13.763c-2.214-.011-2.735 1.24-1.173 2.794l40.888 40.324c1.555 1.547 2.705 1.547 4.283 0l39.596-39.868c1.578-1.548 1.065-2.812-1.145-2.823l-82.449-.427z' />
		</svg>
	);
};

export default CaretDown;
