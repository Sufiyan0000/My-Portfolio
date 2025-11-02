"use client";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/components/lib/utils";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="relative h-screen w-full pb-10 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="top-20 left-30 h-[80vh] w-[50vw]" fill="blue" />
         <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
      </div>

      <div className=" flex h-screen w-screen items-center justify-center bg-white dark:bg-black-100 absolute top-0 left-0 -ml-4">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_2%,black)] dark:bg-black" />
        
      </div>

      <div className="flex justify-center relative my-20 z-10 md:mx-15 w-full ">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase
           tracking-widest text-xs text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </h2>

          <TextGenerateEffect 
          className="text-center mt-4 md:text-4xl text-[35px]  lg:text-5xl font-bold"
          words="Transforming Ideas into Interactive Realities with Next.js"
          />

          <p className="text-center text-sm mb-4 md:text-lg lg:text-2xl z-10 mt-6 dark:text-blue-100 text-black">
            Hi , I'm Sufiyan, a Next.js Developer based in India.
          </p>

          <a href="#about">
            <MagicButton 
            title="Show my work"
            icon={<FaLocationArrow />}
            position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
