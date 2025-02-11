import { FC } from "react";
import { Home, Wrench, Star, User, FileText, Mail } from "lucide-react";

interface IndexListProps {
  setCurrentSectionIndex: (index: number) => void;
  currentSectionIndex: number;
}

const menuItems = [
  { label: "Inicio", icon: Home, index: 0 },
  { label: "Habilidades", icon: Wrench, index: 1 },
  { label: "Experiencia", icon: Star, index: 2 },
  { label: "Sobre mí", icon: User, index: 3 },
  { label: "Proyectos", icon: FileText, index: 4 },
  { label: "Contacto", icon: Mail, index: 5 },
];

const IndexList: FC<IndexListProps> = ({ setCurrentSectionIndex, currentSectionIndex }) => {
  return (
    <>
      <ul className="flex flex-row md:flex-col justify-center items-center md:items-start p-10 space-x-4 md:space-x-0 md:space-y-2">
        {menuItems.map(({ label, icon: Icon, index }) => (
          <li
            key={index}
            className={`group flex flex-col md:flex-row items-center justify-start gap-2 hover:scale-[1.1] transition-all cursor-pointer ${
              currentSectionIndex === index ? "text-primary-500" : "text-white"
            }`}
            onClick={() => setCurrentSectionIndex(index)}
          >
            <div className={`rounded-md p-1 transition-all ${
              currentSectionIndex === index ? "bg-primary-900 text-white" : "bg-white text-black"
            }`}>
              <Icon size={22} />
            </div>
            <p className="hidden text-white md:block md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {label}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default IndexList;
