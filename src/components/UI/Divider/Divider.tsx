import { FC } from 'react';

interface DividerProps {
	width?: string;
	height?: string;
	color?: string;
}

const Divider: FC<DividerProps> = ({ width = 'w-full', height = '1px', color = 'bg-black' }) => {
	return <div style={{ height }} className={`divider ${width} ${color}`}></div>;
};

export default Divider;
