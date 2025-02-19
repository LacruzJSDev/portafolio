import { FC } from "react";
import ExpandableCard from "../../shared/ExpandableCard/ExpandableCard";
import IndexList from "../../shared/IndexList/IndexList";

const Works: FC = () => {
  return (
    <section>
      <div className="first-part-of-section bg-primary-500 text-center flex flex-col justify-between md:justify-start items-center">
        <h1 className="text-primary-900 mt-2 md:mt-10 md:mb-10 text-4xl font-bold">
          Experiencia
        </h1>
        <p className="hidden md:block lg:hidden text-lg text-center">
          Profesional versátil con experiencia internacional.
        </p>
        <p className="hidden lg:block w-full lg:w-3/4 mx-auto text-lg leading-relaxed">
          Profesional versátil con experiencia internacional y formación
          multidisciplinaria. Ocho años de experiencia laboral en Berlín han
          forjado habilidades sólidas en productividad y trabajo en equipo,
          complementadas por una perspectiva global y adaptabilidad cultural.
        </p>
        <div className="block md:hidden">
          <IndexList />
        </div>
      </div>
      <div className="second-part-of-section grid gap-6 px-4 py-2">
        {[
          {
            title: "Scais S.L.",
            content:
              "Desarrollo e implementación de una calculadora inteligente que analiza facturas de gas y luz mediante IA. Integración de un sistema interactivo que permite a los usuarios modificar datos y recibir recomendaciones personalizadas. Optimización del backend con Node.js y Express, asegurando respuestas rápidas y procesamiento eficiente de datos. Aplicación de metodologías ágiles y colaboración con un equipo de desarrollo en la toma de decisiones técnicas.",
          },
          {
            title: "Power Electronics",
            content:
              "Producción y reparación de tarjetas electrónicas. Supervisaba la producción diaria, formaba a nuevos empleados y realizaba controles de calidad.",
          },
          {
            title: "SRG Global",
            content: "Producción en cadena sector automoción.",
          },
          {
            title: "Adam Audio GmbH",
            content:
              "Producción y ensamblaje de altavoces profesionales de estudio (monitores). Supervisaba la producción diaria, formaba a nuevos empleados y realizaba controles de calidad.",
          },
        ].map((work, index) => (
          <ExpandableCard
            key={index}
            title={work.title}
            content={work.content}
          />
        ))}
      </div>
    </section>
  );
};

export default Works;
