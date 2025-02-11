import { FC } from "react";
import ExpandableCard from "../../shared/ExpandableCard/ExpandableCard";

const About: FC = () => {
  return (
    <section>
      <div className="first-part-of-section p-6 bg-primary-500 text-center">
        <h1 className="text-primary-900 mb-8 text-4xl font-bold">Sobre mí</h1>
      </div>
      <div className="second-part-of-section p-6">
        <ExpandableCard 
          title="Mi Historia" 
          content="Soy un desarrollador Full Stack con un enfoque meticuloso para entender proyectos en su totalidad. Me gusta abstraer problemas y encontrar soluciones que no solo funcionen, sino que sean escalables y eficientes. Mi experiencia en Alemania me enseñó a trabajar en equipos diversos, perfeccionar mi atención al detalle y desarrollar una mentalidad orientada a resultados. Actualmente, sigo aprendiendo y explorando nuevas tecnologías para perfeccionar mis habilidades y aportar soluciones innovadoras en cada proyecto."
        />
      </div>
    </section>
  );
};

export default About;
