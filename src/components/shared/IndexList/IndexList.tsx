import { FC } from 'react';
import Home from '../../../assets/icons/interface/Home';
import Wrench from '../../../assets/icons/interface/Wrench';
import Star from '../../../assets/icons/interface/Star';
import About from '../../../assets/icons/interface/About';
import Document from '../../../assets/icons/interface/Document';
import Contact from '../../../assets/icons/interface/Contact';

interface IndexListProps {
	setCurrentSectionIndex: (index: number) => void;
}

const IndexList: FC<IndexListProps> = ({ setCurrentSectionIndex }) => {
	return (
		<div>
			<ul className='flex flex-row md:flex-col items-start p-10 gap-0 md:gap-2'>
				<li className='group flex flex-col md:flex-row items-center justify-start gap-1 hover:scale-[1.1] transition-all' onClick={() => setCurrentSectionIndex(0)}>
					<div className=' bg-white rounded-md p-1'>
						<Home size={22} />
					</div>
					<p className='text-white invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap'>Inicio</p>
				</li>
				<li className='group flex flex-col md:flex-row items-center justify-center gap-1 hover:scale-[1.1] transition-all' onClick={() => setCurrentSectionIndex(1)}>
					<div className='icon bg-white rounded-md p-1'>
						<Wrench size={20} />
					</div>
					<p className='text-white invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap'>Habilidades</p>
				</li>
				<li className='group flex flex-col md:flex-row items-center justify-center gap-1 hover:scale-[1.1] transition-all' onClick={() => setCurrentSectionIndex(2)}>
					<div className='icon bg-white rounded-md p-1'>
						<Star size={22} />
					</div>
					<p className='text-white invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap'>Experiencia</p>
				</li>
				<li className='group flex flex-col md:flex-row items-center justify-center gap-1 hover:scale-[1.1] transition-all' onClick={() => setCurrentSectionIndex(3)}>
					<div className='icon bg-white rounded-md p-1'>
						<About size={22} />
					</div>
					<p className='text-white invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap'>Sobre mí</p>
				</li>
				<li className='group flex flex-col md:flex-row items-center justify-center gap-1 hover:scale-[1.1] transition-all' onClick={() => setCurrentSectionIndex(4)}>
					<div className='icon bg-white rounded-md p-1'>
						<Document size={22} />
					</div>
					<p className='text-white invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap'>Proyectos</p>
				</li>
				<li className='group flex flex-col md:flex-row items-center justify-center gap-1 hover:scale-[1.1] transition-all' onClick={() => setCurrentSectionIndex(5)}>
					<div className='icon bg-white rounded-md p-1'>
						<Contact size={22} />
					</div>
					<p className='text-white invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap'>Contacto</p>
				</li>
			</ul>
		</div>
	);
};

export default IndexList;
