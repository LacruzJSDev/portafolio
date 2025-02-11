import { FC } from 'react';

interface ButtonProps {
	label: string;
	type?: 'button' | 'submit' | 'reset';
	bgColorClass?: string;
	textColorClass?: string;
	className?: string;
	onClick: () => void;
}

const Button: FC<ButtonProps> = ({ label, type = 'button', bgColorClass = 'bg-primary-600', textColorClass = 'text-white', className = '', onClick }) => {
	return (
		<button className={`${bgColorClass} ${textColorClass} px-4 md:px-8 py-1 md:py-2 rounded-md cursor-pointer ${className}`} type={type} onClick={onClick}>
			{label}
		</button>
	);
};

export default Button;
