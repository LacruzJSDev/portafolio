import { FC } from 'react';
import mySelf from '../../../assets/images/mySelf.png';
import LinkedIn from '../../../assets/icons/companies/LinkedIn';
import GitHub from '../../../assets/icons/companies/GitHub';
import React from '../../../assets/icons/companies/React';
import MongoDB from '../../../assets/icons/companies/MongoDb';
import ExpressJS from '../../../assets/icons/companies/ExpressJS';
import Node from '../../../assets/icons/companies/NodeJS.svg';
import Divider from '../../UI/Divider/Divider';

const Welcome: FC = () => {
	return (
		<section className='relative flex flex-col md:flex-row w-full h-full'>
			<h1 className='text-primary-700 font-oswald-bold absolute top-2/8 left-1/10 text-6xl md:text-9xl lg:7xl whitespace-break-spaces mg:whitespace-nowrap z-10'>Juan Carlos Lacruz Lacruz</h1>
			<div className='w-full md:w-1/2 h-1/2 md:h-full overflow-hidden'>
				<img src={mySelf} alt='Me self photography' className='w-full h-full object-cover object-[center_20%] md:object-center' />
			</div>
			<div className='w-full md:w-1/2 h-1/2 md:h-full overflow-hidden'>
				<div className='flex flex-col gap-4 justify-items-start md:justify-end h-full p-6 md:pb-16'>
					<div>
						<h2 className='text-5xl md:7xl '>Desarrollardor FullStack MERN</h2>
						<Divider />
					</div>
					<div className='flex flex-col gap-0 md:gap-4 mt-0 lg:mt-6'>
						<h3 className='text-3xl md:5xl'>Tecnologías</h3>
						<div className='flex gap-10 p-1'>
							<div className='flex flex-col items-center'>
								<MongoDB className='fill-black' size={30} />
								<p className='whitespace-nowrap'>Mongo DB</p>
							</div>
							<div className='flex flex-col items-center'>
								<ExpressJS className='fill-black' size={30} />
								<p className='whitespace-nowrap'>Express JS</p>
							</div>
							<div className='flex flex-col items-center'>
								<React className={'fill-black'} size={30} />
								<p className='whitespace-nowrap'>React</p>
							</div>
							<div className='flex flex-col items-center h-[30px] w-[30px]'>
								<img src={Node} alt='Node JS Icon' />
								<p className='whitespace-nowrap'>Node</p>
							</div>
						</div>
					</div>
					<div className='flex flex-col gap-4'>
						<h3 className='text-3xl md:5xl'>Conécta</h3>
						<div className='flex gap-10 p-1'>
							<div>
								<a className='cursor-pointer flex flex-col items-center' href=''>
									<LinkedIn className={'fill-black'} size={30} />
									<p>LinkedlIn</p>
								</a>
							</div>
							<div>
								<a className='cursor-pointer flex flex-col items-center' href='https://github.com/LacruzJSDev' target='_blank'>
									<GitHub className='fill-black' size={30} />
									<p>GitHub</p>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Welcome;
