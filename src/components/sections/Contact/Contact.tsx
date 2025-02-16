import { FC } from "react";
import Divider from "../../UI/Divider/Divider";
import { ArrowRightFromLine, ClipboardCopy } from "lucide-react";
import useCopyBoard from "../../../hooks/useCopyBoard";

const Contact: FC = () => {
  const email: string = "jclacruzlacruz@icloud.com";
  const linkedIn: string =
    "https://es.linkedin.com/in/juan-carlos-lacruz-lacruz";
		const gitHub: string =
    "https://github.com/LacruzJSDev"
  const { handleCopy, isCopied } = useCopyBoard({
    whatToCopy: email,
		errorMessage: 'No se pudo copiar al portapapeles. Use el icono de mandar un correo directo.'
  });
  return (
    <section>
      <div className="first-part-of-section p-6 flex flex-col items-center bg-primary-500">
        <h1 className="text-primary-900 whitespace-nowrap mb-16">Contacto</h1>
      </div>
      <div className="second-part-of-section p-6">
        <div>
          <h2>Ubicación</h2>
          <Divider color="bg-highlight-primary-900" height="3px" />
          <div className="mt-2 lg:mt-4">
            <p className="text-xl text-gray-800">Afincado en Valencia.</p>
            <p className="text-xl text-gray-900">
              Abierto al teletrabajo o ubicaciones diferentes dentro de España.
            </p>
          </div>
        </div>
        <div className="mt-4 lg:mt-8">
          <h2>Correo eléctrónico</h2>
          <Divider color="bg-highlight-primary-900" height="3px" />
          <div className="flex items-center gap-4 mt-2 lg:mt-4">
            <div>
              <p className="text-xl text-gray-800">
                jc.lacruzlacruz@icloud.com
              </p>
            </div>
            <div className="cursor-pointer" onClick={handleCopy}>
              <ClipboardCopy
                size={24}
                className={isCopied ? "stroke-green-700" : "stroke-black"}
              />
            </div>
            <div>
              <a href={`mailto:${email}`}>
                <ArrowRightFromLine size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4 lg:mt-8">
          <h2>LinkedIn</h2>
          <Divider color="bg-highlight-primary-900" height="3px" />
          <div className="mt-2 lg:mt-4">
            <a href={linkedIn} target="_blank" rel="noreferrer">
              <p className="text-xl text-gray-800 underline inline">
                Perfil profesional orientado como programador FullStack.
              </p>
            </a>
          </div>
        </div>
				<div className="mt-4 lg:mt-8">
          <h2>GitHub</h2>
          <Divider color="bg-highlight-primary-900" height="3px" />
          <div className="mt-2 lg:mt-4">
            <a href={gitHub} target="_blank" rel="noreferrer">
              <p className="text-xl text-gray-800 underline inline">
                Repositorio de proyectos y código de interés.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
