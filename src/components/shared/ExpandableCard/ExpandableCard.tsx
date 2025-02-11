import { FC, useState } from "react";

const ExpandableCard: FC<{ title: string; content: string }> = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getSummary = (text: string) => {
    return text.length > 55? text.substring(0, 55) + "..." : text;
  };

  return (
    <div className="relative bg-white px-6 py-2 rounded-lg shadow-md transition-all cursor-pointer">
      <h3 className="text-xl font-semibold underline" onClick={() => setIsExpanded(true)}>{title}</h3>
      {!isExpanded ? (
        <p className="text-gray-700 mt-2" onClick={() => setIsExpanded(true)}>{getSummary(content)}</p>
      ) : (
        <div className="fixed inset-0 z-100 w-full h-full bg-white p-10 flex flex-col items-center justify-center overflow-auto">
          <button className="absolute top-4 right-4 p-2 bg-gray-200 w-[50px] h-[50px] rounded-full" onClick={() => setIsExpanded(false)}>
            <span className="text-xl font-bold">X</span>
          </button>
          <h3 className="text-2xl font-bold mb-4 text-center">{title}</h3>
          <p className="text-gray-700 text-center max-w-2xl">{content}</p>
        </div>
      )}
    </div>
  );
};

export default ExpandableCard;
