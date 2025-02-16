import { FC } from "react";
import mySelf from "../../../assets/images/mySelf.webp";
import LinkedIn from "../../../assets/icons/companies/LinkedIn";
import GitHub from "../../../assets/icons/companies/GitHub";
import ReactIcon from "../../../assets/icons/companies/React";
import MongoDB from "../../../assets/icons/companies/MongoDB";
import ExpressJS from "../../../assets/icons/companies/ExpressJS";
import Node from "../../../assets/icons/companies/NodeJS.svg";
import Divider from "../../UI/Divider/Divider";
import Email from "../../../assets/icons/interface/Email";
import useCopyBoard from "../../../hooks/useCopyBoard";
import GitHubCalendar from "react-github-calendar";

const Welcome: FC = () => {
  const { handleCopy, isCopied } = useCopyBoard({
    whatToCopy: "jclacruzlacruz@icloud.com",
  });

  return (
    <section>
      <div className="first-part-of-section relative">
        <img
          src={mySelf}
          alt="Me self photography"
          className="object-[center_20%] lg:object-top"
        />
      </div>
      <div className="second-part-of-section relative px-4 py-2 ">
        <div className="flex flex-col gap-4 h-full justify-start lg:justify-center">
          <h1 className="text-primary-600">Juan Carlos Lacruz Lacruz</h1>
          <div>
            <h2>Desarrollador Full Stack</h2>
            <Divider color="bg-highlight-primary-900" height="3px" />
          </div>
          <p className="text-lg text-gray-800">
            Apasionado por la tecnología, el aprendizaje continuo y la
            resolución inteligente de problemas en cada línea de código.
          </p>
          <div className="flex gap-8">
          <div className="flex flex-col gap-4">
          <div className="icon-list-container">
            <h3>Tecnologías Principales</h3>
            <div className="icon-list-content">
              {[MongoDB, ExpressJS, ReactIcon].map((Icon, idx) => (
                <div key={idx} className="icon-card">
                  <div className="icon">
                    <Icon className="fill-black" size={30} />
                  </div>
                  <p className="whitespace-nowrap">{Icon.name}</p>
                </div>
              ))}
              <div className="icon-card h-[30px] w-[30px]">
                <img src={Node} alt="Node JS Icon" />
                <p className="whitespace-nowrap">Node</p>
              </div>
            </div>
          </div>
          <div className="icon-list-container">
            <h3>Conéctame</h3>
            <div className="icon-list-content">
              <div className="icon-card h-[30px] w-[30px]">
                <a
                  href="https://es.linkedin.com/in/juan-carlos-lacruz-lacruz"
                  target="_blank"
                  className="icon"
                >
                  <LinkedIn className="fill-black" size={30} />
                  <p>LinkedIn</p>
                </a>
              </div>
              <div className="icon-card h-[30px] w-[30px]">
                <a
                  href="https://github.com/LacruzJSDev"
                  target="_blank"
                  className="icon"
                >
                  <GitHub className="fill-black" size={30} />
                  <p>GitHub</p>
                </a>
              </div>
              <div className="icon-card h-[30px] w-[30px]">
                <div className="icon" onClick={handleCopy}>
                  <Email className="fill-black" />
                  <p>{isCopied ? "¡Copiado!" : "Correo"}</p>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="github-widget hidden lg:block">
            <h3>Mi Actividad en GitHub</h3>
            <GitHubCalendar
              username="LacruzJSDev"
              colorScheme="light"
              fontSize={14}
              blockSize={8}
              blockMargin={2}
            />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
