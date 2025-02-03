import { FC } from 'react';
import { IconProps } from '../../../types/icon.types';

const Contact: FC<IconProps> = ({ className = 'fill-black', size = 24 }) => {
	return (
		<svg width={size} height={size} xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMidYMid' viewBox='0 0 24 24' xmlSpace='preserve'>
			<g id='contact-card'>
				<g>
					<path className={className} d='M12,20H0v-3.5c0-2.4,1.3-4.5,3.2-5.6C2.5,10.2,2,9.2,2,8.1c0-2.2,1.8-4,4-4s4,1.8,4,4c0,1.1-0.4,2.1-1.2,2.8    c1.9,1.1,3.2,3.3,3.2,5.6V20z M2,18h8v-1.5c0-2.4-1.8-4.5-4-4.5c-2.1,0-4,2.1-4,4.5V18z M6,6C4.9,6,4,6.9,4,8s0.9,2,2,2s2-0.9,2-2    S7.1,6,6,6z M24,17H14v-2h10V17z M21,13h-7v-2h7V13z M24,9H14V7h10V9z' />
				</g>
			</g>
		</svg>
	);
};

export default Contact;
