import { FC } from 'react';

const Works: FC = () => {
	return (
		<section>
			<div className='first-part-of-section p-6 flex flex-col items-center bg-primary-500'>
				<h1 className='text-primary-900 whitespace-nowrap mb-16'>Experiencia</h1>
				<p className=' w-full md:w-[70%] text-s'>Profesional versátil con experiencia internacional y formación multidisciplinaria, que combina conocimientos en forestales, producción, y programación. Ocho años de experiencia laboral en Berlín han forjado habilidades sólidas en productividad y trabajo en equipo, complementadas por una perspectiva global y adaptabilidad cultural.</p>
			</div>
			<div className='second-part-of-section p-6'>
				<div>
					<h3 className='underline'>Scais S.LS</h3>
					<p className='mb-2'>- Desarrollador FullStack - Agosto de 2024 - actualidad</p>
					<p>Proyecto: Calculadora que analiza facturas de gas y de luz obteniendo todos los datos con IA. Estos datos son editables por el usuario para luego obtener recomendaciones personalizadas que ofrecer a sus clientes y así ahorrar en la factura.</p>
				</div>
			</div>
		</section>
	);
};

export default Works;
