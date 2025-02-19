import { FC } from "react";
import { Home, Wrench, Star, User, FileText, Mail } from "lucide-react";
import { useSection } from "../../../context/sectionContext/useSection";

const menuItems = [
  { label: "Inicio", icon: Home, index: 0 },
  { label: "Habilidades", icon: Wrench, index: 1 },
  { label: "Experiencia", icon: Star, index: 2 },
  { label: "Sobre mí", icon: User, index: 3 },
  { label: "Proyectos", icon: FileText, index: 4 },
  { label: "Contacto", icon: Mail, index: 5 },
];

const IndexList: FC = () => {
  const { sectionIndex, setSectionIndex } = useSection();
  return (
    <>
      <ul className="flex z-50 flex-row lg:flex-col justify-center items-center lg:items-start mb-2 space-x-4 lg:space-x-0 lg:space-y-2">
        {menuItems.map(({ label, icon: Icon, index }) => (
          <li
            key={index}
            className={`group flex flex-col lg:flex-row items-center justify-start gap-2 hover:scale-[1.1] transition-all cursor-pointer ${
              sectionIndex === index ? "text-primary-500" : "text-white"
            }`}
            onClick={() => setSectionIndex(index)}
          >
            <div
              className={`rounded-md p-1 transition-all ${
                sectionIndex === index
                  ? "bg-primary-900 text-white"
                  : "bg-white text-black"
              }`}
            >
              <Icon size={22} />
            </div>
            <p className="hidden text-white lg:block lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {label}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default IndexList;
