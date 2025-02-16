import { FC } from "react";
import ExpandableCard from "../../shared/ExpandableCard/ExpandableCard";

const About: FC = () => {
  const cards = [
    {
      title: "Mi Historia",
      content:
        "Soy un desarrollador Full Stack con un enfoque meticuloso para entender proyectos en su totalidad. Me gusta abstraer problemas y encontrar soluciones que no solo funcionen, sino que sean escalables y eficientes. Mi experiencia en Alemania me enseñó a trabajar en equipos diversos, perfeccionar mi atención al detalle y desarrollar una mentalidad orientada a resultados. Actualmente, sigo aprendiendo y explorando nuevas tecnologías para perfeccionar mis habilidades y aportar soluciones innovadoras en cada proyecto.",
    },
    {
      title: "Proyecto en TypeScript",
      content:
        "Un proyecto del que me siento muy orgulloso es una aplicación que desarrollé para una amiga que animadora sociocultural en un centro de día de ancianos, con la aplicación se puede llevar un control de las actividades que se realizan y los residentes que participan. La aplicación tiene un CRUD completo de residentes, actividades y usuarios, además de la posibilidad de generar resúmenes en PDF de las actividades y participantes.",
    },
    {
      title: "Calculadora de Ahorro",
      content:
        "En mi trabajo actual, estoy desarrollando una herramienta que recomienda ofertas de luz y gas para ayudar a las personas a ahorrar en sus facturas. La aplicación analiza las opciones y calcula la mejor alternativa según el consumo, optimizando los costos.",
    },
    {
      title: "Backend Escalable",
      content:
        "Estoy trabajando en un backend en TypeScript del que me siento especialmente orgulloso. La estructura del proyecto está pensada para escalar, y aunque aún no está terminado, ya tiene una base sólida y preparada para crecer conforme se sumen nuevas funcionalidades.",
    },
    {
      title: "Redis y Docker",
      content:
        "Uno de los mayores retos que enfrenté fue montar imágenes Docker para mejorar el rendimiento de un proyecto backend que estaba desarrollando. Decidí usar Redis para almacenar en caché los registros de los usuarios, y de esta forma, al consultar la base de datos, primero se consultaba en Redis, lo que mejoró notablemente el rendimiento del sistema. Al final, logré crear un archivo `docker-compose` para levantar tanto el frontend como el backend con un solo comando.",
    },
    {
      title: "WebSockets",
      content:
        "En el proyecto mencionado anteriormente, implementé WebSockets para conectar el backend con los clientes en tiempo real. Conseguí conectarme exitosamente con Postman para probar las conexiones, lo que me dio una buena base para seguir desarrollando funcionalidades en tiempo real en el futuro.",
    },
    {
      title: "Stack Tecnológico",
      content:
        "Mis tecnologías principales son React, Angular (en lo que ahora estoy aprendiendo), Tailwind CSS, Bootstrap, Chakra UI, MongoDB, PostgreSQL, Docker, y Docker Compose. Aunque mi especialización es el stack MERN (MongoDB, Express, React y Node.js), estoy abierto a seguir aprendiendo cualquier nueva tecnología.",
    },
    {
      title: "Trabajo en Equipo",
      content:
        "Trabajo con Scrum en sprints de dos semanas en mi trabajo actual. Prefiero el trabajo en equipo porque aprendes muchísimo de los demás y compartes ideas que enriquecen el proyecto. Sin embargo, también disfruto cuando trabajo solo porque tengo mayor control sobre mi flujo de trabajo y la estructura del código.",
    },
    {
      title: "Filosofía de Desarrollo",
      content:
        "Me motiva la lógica detrás del desarrollo, el constante reto de encontrar soluciones eficientes a problemas. Practico Clean Code y siempre trato de dejar el código mejor de lo que lo encontré. Para mí, resolver un problema técnico siempre debe ser una oportunidad de aprendizaje y mejora.",
    },
  ];

  const cardGroups = [];
  for (let i = 0; i < cards.length; i += 3) {
    cardGroups.push(cards.slice(i, i + 3));
  }

  return (
    <section>
      <div className="first-part-of-section p-6 bg-primary-500 text-center">
        <h1 className="text-primary-900 mb-8 text-4xl font-bold">Sobre mí</h1>
      </div>
      <div className="second-part-of-section overflow-x-auto py-4 snap-x snap-mandatory flex gap-4">
        {cardGroups.map((group, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-start w-auto lg:w-96 px-4"
          >
            {group.map((card, i) => (
              <div
                key={i}
                className="flex-shrink-0 snap-start w-90 lg:w-96 mb-8"
              >
                <ExpandableCard title={card.title} content={card.content} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
