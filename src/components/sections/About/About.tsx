import { FC } from 'react';

const About: FC = () => {
	return (
		<section className='relative flex w-full h-full'>
			<h1 className='text-primary-500 font-oswald-bold absolute top-2/6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl md:text-9xl whitespace-nowrap'>Quién soy</h1>
			<div className='w-1/2 h-full overflow-hidden'></div>
			<div className='w-1/2'></div>
		</section>
	);
};

export default About;
