import { FC } from 'react';
import { IconProps } from '../../../types/icon.types';

const CaretLeft: FC<IconProps> = ({ className = 'fill-black', size = 24 }) => {
	return (
		<svg width={size} height={size} xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMidYMid' viewBox='0 0 256 256'>
			<path className={className} xmlns='http://www.w3.org/2000/svg' fillRule='evenodd' clipRule='evenodd' d='M117.846 184.606c-11.362 11.579-29.419 2.755-29.182-12.927h-.001c.237-15.683.237-71.905.237-87.358 0-15.453 18.3-23.578 29.817-12.17 11.515 11.409 37.257 38.828 43.427 45.614 6.168 6.786 7.463 14.243 0 21.574-4.855 4.769-17.331 17.589-28.586 29.155-6.047 6.214-11.741 12.066-15.712 16.112zm-12.381-15.368c-.012 2.217 1.246 2.732 2.808 1.162l39.283-39.46a4.055 4.055 0 0 0 .03-5.693l-38.874-39.606c-1.54-1.568-2.808-1.058-2.82 1.152l-.427 82.445z' />
		</svg>
	);
};

export default CaretLeft;
