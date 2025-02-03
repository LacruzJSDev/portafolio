import { FC } from 'react';

const Skills: FC = () => {
	return (
		<section>
			<div className='first-part-of-section p-6 bg-primary-500'>
				<h1 className='text-primary-900 whitespace-nowrap mb-16'>Habilidades</h1>
				<div></div>
			</div>
			<div className='second-part-of-section p-6'>
				<div className='flex gap-8'>
					<div>
						<div>
							<h3 className='underline mb-2'>Lenguajes</h3>
							<p>JavaScript</p>
							<p>TypeScript</p>
						</div>
						<div>
							<h3 className='underline mb-2'>Frameworks</h3>
							<p>React</p>
							<p>NextJS</p>
						</div>
					</div>
					<div>
						<div>
							<h3 className='underline mb-2'>Lenguajes</h3>
							<p>JavaScript</p>
							<p>TypeScript</p>
						</div>
						<div>
							<h3 className='underline mb-2'>Frameworks</h3>
							<p>React</p>
							<p>NextJS</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
