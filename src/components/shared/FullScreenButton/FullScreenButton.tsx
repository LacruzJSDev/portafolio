import { useState, useEffect, FC } from 'react';
import MinimizeIcon from '../../../assets/icons/interface/MinimizeIcon';
import MaximizeIcon from '../../../assets/icons/interface/MaximizeIcon';

interface CornerFullScreen {
	bgColorClass?: string;
}

const FullscreenButton: FC = () => {
	const [isFullscreen, setIsFullscreen] = useState(false);

	useEffect(() => {
		const handleFullscreenChange = () => {
			setIsFullscreen(document.fullscreenElement !== null);
		};

		document.addEventListener('fullscreenchange', handleFullscreenChange);
		return () => {
			document.removeEventListener('fullscreenchange', handleFullscreenChange);
		};
	}, []);

	const toggleFullscreen = async () => {
		try {
			if (!document.fullscreenElement) {
				await document.documentElement.requestFullscreen();
			} else {
				if (document.exitFullscreen) {
					await document.exitFullscreen();
				}
			}
		} catch (error) {
			console.error('Error al cambiar el modo de pantalla completa:', error);
		}
	};

	return (
		<button onClick={toggleFullscreen} className='p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200' aria-label={isFullscreen ? 'Salir de pantalla completa' : 'Entrar en pantalla completa'}>
			{isFullscreen ? <MinimizeIcon className='w-6 h-6' /> : <MaximizeIcon className='w-6 h-6' />}
		</button>
	);
};

export const CornerFullscreenV1: FC<CornerFullScreen> = ({ bgColorClass = 'border-t-highlight-primary-900' }) => {
	return (
		<div className='absolute top-0 right-0 z-10'>
			<div className='w-32 h-32 overflow-hidden'>
				<div
					className={`${bgColorClass} absolute top-0 right-0 w-0 h-0 
                      border-t-[128px] 
                      border-l-[128px] border-l-transparent`}>
					<div className='absolute top-[-116px] right-[12px]'>
						<FullscreenButton />
					</div>
				</div>
			</div>
		</div>
	);
};

export const CornerFullscreenV2: FC<CornerFullScreen> = ({ bgColorClass = 'border-t-primary-500' }) => {
	return (
		<div className='absolute top-0 right-0'>
			<div className='w-32 h-32 overflow-hidden'>
				<div
					className={`${bgColorClass} absolute top-0 right-0 w-[181px] h-[181px] 
          origin-top-right rotate-45`}>
					<div className='absolute top-[20px] right-[75px] rotate-45'>
						<FullscreenButton />
					</div>
				</div>
			</div>
		</div>
	);
};

export default FullscreenButton;
