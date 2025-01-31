import { FC } from 'react';

interface DividerProps {
	width?: string;
	height?: string;
	color?: string;
}

const Divider: FC<DividerProps> = ({ width = 'w-full', height = 'h-0.5', color = 'bg-black' }) => {
	return <div className={`divider ${width} ${height} ${color}`}></div>;
};

export default Divider;
