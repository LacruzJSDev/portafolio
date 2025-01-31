import { IconProps } from '../../../types/icon.types';

const MaximizeIcon: React.FC<IconProps> = ({ className }) => (
	<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className={className}>
		<path d='M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7' />
	</svg>
);

export default MaximizeIcon;
