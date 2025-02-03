import { FC, useState } from 'react';
import mySelf from '../../../assets/images/mySelf.png';
import LinkedIn from '../../../assets/icons/companies/LinkedIn';
import GitHub from '../../../assets/icons/companies/GitHub';
import React from '../../../assets/icons/companies/React';
import MongoDB from '../../../assets/icons/companies/MongoDB';
import ExpressJS from '../../../assets/icons/companies/ExpressJS';
import Node from '../../../assets/icons/companies/NodeJS.svg';
import Divider from '../../UI/Divider/Divider';
import Email from '../../../assets/icons/interface/Email';

const Welcome: FC = () => {
	const [isCopied, setIsCopied] = useState<boolean>(false);

	const handleCopy = async (whatToCopy: string) => {
		try {
			await navigator.clipboard.writeText(whatToCopy);
			setIsCopied(true);
			setTimeout(() => setIsCopied(false), 2000);
		} catch (error) {
			console.error('Error al copiar el correo:', error);
		}
	};
	return (
		<section>
			<div className='first-part-of-section'>
				<img src={mySelf} alt='Me self photography' className='object-[center_20%] md:object-top' />
			</div>
			<div className='second-part-of-section'>
				<h1 className='text-highlight-primary-900 mb-8 md:mb-28 mt-0 md:mt-8'>Juan Carlos Lacruz Lacruz</h1>
				<div className='flex flex-col gap-4 justify-items-start h-full '>
					<div>
						<h2>Desarrollardor FullStack MERN</h2>
						<Divider color='bg-highlight-primary-900' height='3px' />
					</div>
					<div className='flex flex-col gap-8 mt-0 lg:mt-6 '>
						<div className='icon-list-container'>
							<h3>Tecnologías Principales</h3>
							<div className='icon-list-content'>
								<div className='icon-card'>
									<div className='icon'>
										<MongoDB className='fill-black' size={30} />
									</div>
									<p className='whitespace-nowrap'>Mongo DB</p>
								</div>
								<div className='icon-card'>
									<div className='icon'>
										<ExpressJS className='fill-black' size={30} />
									</div>
									<p className='whitespace-nowrap'>Express JS</p>
								</div>
								<div className='icon-card'>
									<div className='icon'>
										<React className={'fill-black'} size={30} />
									</div>
									<p className='whitespace-nowrap'>React</p>
								</div>
								<div className='icon-card h-[30px] w-[30px]'>
									<img src={Node} alt='Node JS Icon' />
									<p className='whitespace-nowrap'>Node</p>
								</div>
							</div>
						</div>
						<div className='icon-list-container'>
							<h3>Conécta</h3>
							<div className='icon-list-content'>
								<div className='icon-card'>
									<a className='icon-container' href='https://es.linkedin.com/in/juan-carlos-lacruz-lacruz' target='_blank'>
										<div className='icon'>
											<LinkedIn className={'fill-black'} size={30} />
										</div>
										<p>LinkedlIn</p>
									</a>
								</div>
								<div className='icon-card'>
									<a className='icon-container' href='https://github.com/LacruzJSDev' target='_blank'>
										<div className='icon'>
											<GitHub className='fill-black' size={30} />
										</div>
										<p>GitHub</p>
									</a>
								</div>
								<div className='icon-card' onClick={() => handleCopy('jclacruzlacruz@icloud.com')}>
									<div className='icon'>
										<Email className='fill-black' />
									</div>
									<p>{isCopied ? '¡Copiado!' : 'Correo'}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Welcome;
