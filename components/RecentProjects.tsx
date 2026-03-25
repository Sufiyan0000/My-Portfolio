import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { div } from "motion/react-client";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <div className="py-20 text-black dark:text-blue-100 sm:mx-20" id="projects">
      <h1 className="heading text-5xl font-bold text-center capitalize mb-2">
        A small section of{" "}
        <span className="text-purple-400"> recent projects.</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 md:gap-y-7 gap-y-1 sm:mx-80 mx-0">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem]  flex items-center justify-center sm:w-[570px] w-[70vw]" 
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img src={img} alt={title} className="z-10 absolute bottom-0" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-1">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center rounded-full">
                  {iconLists.map((icon,index) => (
                    <div key={icon} className="border border-white/[0.2] w-8 h-8 rounded-full bg-black lg:h-10 lg:w-10 flex justify-center items-center"
                    style={{
                      transform:`translateX(-${5*index*2}px`
                    }}
                    >
                      <img src={icon} alt="icon"
                      className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-2">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple-300">Check Live Site</p> 
                  <FaLocationArrow color="#CBACF9"/>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
