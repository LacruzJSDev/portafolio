import { useState } from "react";

interface CopyBoardProps {
  whatToCopy: string;
  errorMessage?: string;
}

interface UseCopyBoardReturn {
  isCopied: boolean;
  handleCopy: () => void;
}

const useCopyBoard = ({ whatToCopy, errorMessage }: CopyBoardProps): UseCopyBoardReturn => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard) {
        // Usamos la API moderna del portapapeles
        await navigator.clipboard.writeText(whatToCopy);
        setIsCopied(true);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = whatToCopy;
  
        textArea.classList.add('absolute', 'top-0', 'left-0', 'opacity-0', 'pointer-events-none', 'z-50');
  
        document.body.appendChild(textArea);
  
        textArea.select();
        document.execCommand('copy');
  
        document.body.removeChild(textArea);
  
        setIsCopied(true);
      }
  
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Error al copiar al portapapeles:", error);
      alert(errorMessage ? errorMessage : "No se pudo copiar al portapapeles.");
    }
  };
   

  return { isCopied, handleCopy };
};

export default useCopyBoard;
