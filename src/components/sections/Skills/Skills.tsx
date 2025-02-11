import { FC } from 'react';
import ExpandableCard from '../../shared/ExpandableCard/ExpandableCard';

const Skills: FC = () => {
  return (
    <section>
      <div className="first-part-of-section p-6 bg-primary-500 text-center">
        <h1 className="text-primary-900 mb-8 text-4xl font-bold">Habilidades</h1>
      </div>
      <div className="second-part-of-section p-6 grid gap-6">
        {[
          { title: "Frontend Development", content: "HTML, CSS, JavaScript, TypeScript, React, Next.js" },
          { title: "Backend & APIs", content: "Node.js, Express, REST API, MongoDB, MySQL, Sequelize, Mongoose" },
          { title: "Arquitectura & Escalabilidad", content: "Desarrollo modular, diseño de bases de datos optimizadas, patrones de arquitectura" },
          { title: "Explorando nuevas tecnologías", content: "Angular, Vue" }
        ].map((skill, index) => (
          <ExpandableCard key={index} title={skill.title} content={skill.content} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
