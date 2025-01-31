import { FC, useState } from 'react';
import Button from '../../components/UI/Button/Button';
import Welcome from '../../components/sections/Welcome/Welcome';
import About from '../../components/sections/About/About';
import { CornerFullscreenV1 } from '../../components/shared/FullScreenButton/FullScreenButton';
import Divider from '../../components/UI/Divider/Divider';
import CaretDown from '../../assets/icons/interface/CaretDown';
import CaretUp from '../../assets/icons/interface/CaretUp';
import Contact from '../../components/sections/Contact/Contact';

const sections = [
	{ id: 'welcome', content: <Welcome /> },
	{ id: 'about', content: <About /> },
	{ id: 'contact', content: <Contact /> },
];

const Home: FC = () => {
	const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);

	const nextSection = () => {
		if (currentSectionIndex < sections.length - 1) {
			setCurrentSectionIndex(currentSectionIndex + 1);
		}
	};

	const prevSection = () => {
		if (currentSectionIndex > 0) {
			setCurrentSectionIndex(currentSectionIndex - 1);
		}
	};
console.log('currentSectionIndex', currentSectionIndex, sections.length);

	return (
		<div className='relative w-screen h-screen overflow-hidden'>
			<CornerFullscreenV1 />
			<div className='relative w-full h-full'>
  {sections.map((section, index) => (
    <div 
      key={section.id} 
      className={`
        absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out
        ${index === currentSectionIndex 
          ? 'translate-x-0 md:translate-x-0' 
          : index < currentSectionIndex 
            ? 'translate-y-full md:-translate-x-full' 
            : 'translate-y-full md:translate-x-full'
        }
      `}
    >
      {section.content}
    </div>
  ))}
</div>
			<div className='absolute bottom-0 left-0 hidden md:flex justify-between w-full px-16 py-4'>
				<Button label='anterior' onClick={prevSection} />
				<Button label='siguiente' onClick={nextSection} />
			</div>
			<div className='absolute bottom-0 left-0 flex flex-col justify-center items-center md:hidden w-full px-16'>
				<div className='h-[50px] w-[50px]'>
				{currentSectionIndex > 0 && <div className='cursor-pointer' onClick={prevSection}><CaretUp size={50} className={'fill-primary-600'}/></div>}
				</div>
				<Divider height={'h-1'} color={'bg-primary-600'} />
				<div className='h-[50px] w-[50px]'>
				{sections.length !== currentSectionIndex + 1 && <div className='cursor-pointer' onClick={nextSection}><CaretDown size={50} className={'fill-primary-600'}/></div>}
				</div>
			</div>
		</div>
	);
};

export default Home;
