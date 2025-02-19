import { FC } from "react";
import ExpandableCard from "../../shared/ExpandableCard/ExpandableCard";
import IndexList from "../../shared/IndexList/IndexList";

const Skills: FC = () => {
  return (
    <section>
      <div className="first-part-of-section bg-primary-500 text-center flex flex-col justify-between items-center">
        <h1 className="text-primary-900 mt-2 md:mt-10 md:mb-10 text-4xl font-bold">
          Habilidades
        </h1>
        <div className="block md:hidden">
          <IndexList />
        </div>
      </div>
      <div className="second-part-of-section px-4 py-2 grid gap-6">
        {[
          {
            title: "Frontend Development",
            content: "HTML, CSS, JavaScript, TypeScript, React, Next.js",
          },
          {
            title: "Backend & APIs",
            content:
              "Node.js, Express, REST API, MongoDB, MySQL, Sequelize, Mongoose",
          },
          {
            title: "Arquitectura & Escalabilidad",
            content:
              "Desarrollo modular, diseño de bases de datos optimizadas, patrones de arquitectura",
          },
          {
            title: "Explorando nuevas tecnologías",
            content: "Angular, Vue, NestJS",
          },
        ].map((skill, index) => (
          <ExpandableCard
            key={index}
            title={skill.title}
            content={skill.content}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
