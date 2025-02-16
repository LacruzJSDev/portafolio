import { useState } from "react";

interface ExpandableImageProps {
  src: string;
  alt?: string;
  size?: string; // Tamaño inicial (ejemplo: "150px")
  expandedSize?: string; // Tamaño cuando está expandida (ejemplo: "500px")
}

export default function ExpandableImage({
  src,
  alt = "Image",
  size = "150px",
  expandedSize = "40vh",
}: ExpandableImageProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {!isExpanded && (
        <div
          className="cursor-pointer transition-transform duration-300"
          style={{ width: size, height: "auto" }}
          onClick={() => setIsExpanded(true)}
        >
          <img
            src={src}
            alt={alt}
            className="object-cover rounded-md shadow-lg w-full h-auto"
          />
        </div>
      )}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-whitebg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setIsExpanded(false)}
        >
          <img
            src={src}
            alt={alt}
            className="rounded-md shadow-lg cursor-pointer transition-transform duration-300"
            style={{ width: expandedSize, height: "auto" }}
          />
        </div>
      )}
    </>
  );
}
