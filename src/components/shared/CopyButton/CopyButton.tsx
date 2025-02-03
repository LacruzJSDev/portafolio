// import { FC, useState } from 'react';
// import Email from '../../../assets/icons/interface/Email';

// interface CopyButtonProps {
// 	whatToCopy: string;
// 	icon: 'email' | 'phone';
// 	size?: string;
// 	label: string;
// }

// const CopyButton: FC<CopyButtonProps> = ({ whatToCopy, icon, size = '30px', label }) => {
// 	const [isCopied, setIsCopied] = useState(false);

// 	const handleCopy = async () => {
// 		try {
// 			await navigator.clipboard.writeText(whatToCopy);
// 			setIsCopied(true);
// 			setTimeout(() => setIsCopied(false), 2000);
// 		} catch (error) {
// 			console.error('Error al copiar el correo:', error);
// 		}
// 	};

// 	return (
// 		<div className={`w-[${size}] h-[${size}] flex flex-col items-center`}>
// 			<div className='cursor-pointer flex flex-col items-center' onClick={handleCopy}>
// 				{/* {icon === 'email' ? <Email className='fill-black' /> : null} */}
// 				<p>{isCopied ? '¡Copiado!' : label}</p>
// 			</div>
// 		</div>
// 	);
// };

// export default CopyButton;
