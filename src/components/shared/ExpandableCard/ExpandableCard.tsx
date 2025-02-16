import { FC, ReactNode, useState } from "react";
import { createPortal } from "react-dom";

interface ExpandableCardProps {
  title: string;
  content: string;
  children?: ReactNode;
}

const ExpandableCard: FC<ExpandableCardProps> = ({ title, content, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getSummary = (text: string) =>
    text.length > 55 ? text.substring(0, 55) + "..." : text;

  return (
    <>
      <div
        className="relative bg-gray-50 px-6 py-2 rounded-lg shadow-md transition-all cursor-pointer min-h-[7rem] max-h-[7rem]"
        onClick={() => setIsExpanded(true)}
      >
        <h3 className="text-xl font-semibold underline">{title}</h3>
        <p className="text-gray-700 mt-2">{getSummary(content)}</p>
      </div>
      {createPortal(
        <div
          className={`fixed inset-0 z-[100] bg-white flex flex-col items-center justify-start lg:justify-center p-10 overflow-auto transition-opacity duration-300 ${
            isExpanded ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <button
            className="absolute top-4 right-4 p-2 bg-gray-200 w-[50px] h-[50px] rounded-full cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(false);
            }}
          >
            <span className="text-xl font-bold">X</span>
          </button>
          <h3 className="text-2xl font-bold mb-4 text-center">{title}</h3>
          <p className="text-gray-700 text-center max-w-2xl mb-4">{content}</p>
          {children && children }
        </div>,
        document.body
      )}
    </>
  );
};

export default ExpandableCard;
