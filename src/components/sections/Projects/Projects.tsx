import { FC } from "react";
import ExpandableCard from "../../shared/ExpandableCard/ExpandableCard";
import ExpandableImage from "../../shared/ExpandableImage/ExpandableImage";

const images = import.meta.glob(
  "/src/assets/images/resiAdminProyect/*.{png,jpg,jpeg,svg,webp}"
);

const imagesArray = Object.keys(images).map((path) => ({
  path,
  import: images[path],
}));

const proyects = [
  {
    title: "Resi Admin",
    content:
      "Proyecto desarrollado para solucion un problema real en un centro de día donde se debia pasar lista de los usuarios que asistian al centro. La aplicación permite llevar un control de los usuarios que asisten al centro, los que no asisten y los que han faltado. Además, se pueden añadir nuevos usuarios, modificar los datos de los usuarios existentes y eliminar usuarios. Se puede registrar que usuarios realizan las acitividadess para luego generar informes mensuales de asistencia. Puedes añadir nuevos empleados que gestionen la aplicacion segun roles para ampliar la funcionalidad de la aplicación. Tambien puedes añadir, editar y eliminar actividades que se realizan en el centro. Un MVP que se puede ampliar con nuevas funcionalidades.",
    children: (
      <div>
        <div className="flex flex-wrap justify-center gap-2">
          {imagesArray.map((image) => (
            <ExpandableImage src={image.path} alt="Resi Admin" />
          ))}
        </div>
        <div className="flex flex-col items-center">
          <a
            href="https://resiadmin.vercel.app/"
            target="_blank"
            className="underline"
          >
            Click Aqui para probar la palicación
          </a>
          <p>Usuario de prueba: pepi@pepi.com</p>
          <p>Contraseña: holahola</p>
          <p>
            El servicio puede iniciarse después de 5 minutos por estar usando
            servidores en Render gratuitos que pueden quedar desactivados
            después de 5 minutos de inactividad.
          </p>
          <p>
            Cabe la posibilidad de que el servidor tenga que despertarse
            manualmente. Si estás muy interesado en probar el producto y no
            logras acceder contacta conmigo para que reactive el servicio.
          </p>
        </div>
      </div>
    ),
  },
];
const Projects: FC = () => {
  console.log("imagesArray", imagesArray);

  return (
    <section>
      <div className="first-part-of-section p-6 flex flex-col items-center bg-primary-500">
        <h1 className="text-primary-900 whitespace-nowrap mb-16">Proyectos</h1>
      </div>
      <div className="second-part-of-section grid gap-6 px-4 py-2">
        {proyects.map((work, index) => (
          <ExpandableCard key={index} title={work.title} content={work.content}>
            {work.children}
          </ExpandableCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;
