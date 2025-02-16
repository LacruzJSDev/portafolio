import { FC, useEffect, useRef, useState } from "react";
import Button from "../../components/UI/Button/Button";
import Welcome from "../../components/sections/Welcome/Welcome";
import About from "../../components/sections/About/About";
import { CornerFullscreenV1 } from "../../components/shared/FullScreenButton/FullScreenButton";
import Divider from "../../components/UI/Divider/Divider";
import CaretDown from "../../assets/icons/interface/CaretDown";
import CaretUp from "../../assets/icons/interface/CaretUp";
import Contact from "../../components/sections/Contact/Contact";
import Projects from "../../components/sections/Projects/Projects";
import Skills from "../../components/sections/Skills/Skills";
import Works from "../../components/sections/Works/Works";
import IndexList from "../../components/shared/IndexList/IndexList";
import useScrollOrTouchDirection from "../../hooks/useScrollDirection";

const sections = [
  { id: "welcome", content: <Welcome /> },
  { id: "skills", content: <Skills /> },
  { id: "works", content: <Works /> },
  { id: "about", content: <About /> },
  { id: "projects", content: <Projects /> },
  { id: "contact", content: <Contact /> },
];

const Home: FC = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const { scrollUp, scrollDown, resetScroll } =
    useScrollOrTouchDirection(divRef);
    
  const savedSectionIndex = localStorage.getItem("currentSectionIndex");
  const initialSectionIndex = savedSectionIndex
    ? parseInt(savedSectionIndex)
    : 0;

  const [currentSectionIndex, setCurrentSectionIndex] =
    useState<number>(initialSectionIndex);

  useEffect(() => {
    updateSectionIndex(currentSectionIndex);
  }, [currentSectionIndex]);

  useEffect(() => {
    if (scrollDown && currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex(prev => prev + 1);
      resetScroll();
    }
    if (scrollUp && currentSectionIndex > 0) {
      setCurrentSectionIndex(prev => prev - 1);
      resetScroll();
    }
  }, [scrollDown, scrollUp, currentSectionIndex]);

  const updateSectionIndex = (index: number) => {
    localStorage.setItem("currentSectionIndex", index.toString());
  };

  const nextSection = () => {
    if (currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
    }
  };

  const prevSection = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
    }
  };

  return (
    <div className="relative w-screen h-svh md:h-screen overflow-hidden" ref={divRef}>
      <div className="absolute z-10 hidden md:block top-0 right-0">
        <CornerFullscreenV1 />
      </div>
      <div className={"absolute z-10 top-[20%] w-full md:w-40"}>
        <IndexList
          setCurrentSectionIndex={setCurrentSectionIndex}
          currentSectionIndex={currentSectionIndex}
        />
      </div>
      <div className="relative w-full h-full">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`
        absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out
        ${
          index === currentSectionIndex
            ? "translate-x-0 md:translate-x-0"
            : index < currentSectionIndex
            ? "translate-y-full md:-translate-x-full"
            : "translate-y-full md:translate-x-full"
        }
      `}
          >
            {section.content}
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 hidden md:flex justify-between w-full px-16 py-4">
        <Button
          label="anterior"
          bgColorClass="bg-highlight-primary-900"
          onClick={prevSection}
          className="hover:scale-[1.1]"
        />
        <Button
          label="siguiente"
          bgColorClass="bg-highlight-primary-900"
          onClick={nextSection}
          className="hover:scale-[1.1]"
        />
      </div>
      <div className="absolute bottom-0 right-4 flex flex-col justify-center items-center md:hidden w-4">
        <div className="h-[50px] w-[50px]">
          {currentSectionIndex > 0 && (
            <div className="cursor-pointer" onClick={prevSection}>
              <CaretUp size={50} className={"fill-highlight-primary-900"} />
            </div>
          )}
        </div>
        <Divider color={"bg-highlight-primary-900"} height="2px" />
        <div className="h-[50px] w-[50px]">
          {sections.length !== currentSectionIndex + 1 && (
            <div className="cursor-pointer" onClick={nextSection}>
              <CaretDown size={50} className={"fill-highlight-primary-900"} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
