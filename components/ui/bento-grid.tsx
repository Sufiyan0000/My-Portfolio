import { cn } from "@/components/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { Globe } from "./globe";
import { GlobeDemo } from "./globe-demo";
import { div, span } from "motion/react-client";
import { BackgroundLines } from "./background-lines";
import MagicButton from "./MagicButton";
import { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import Lottie from "react-lottie";
import { loop } from "@react-three/fiber/dist/declarations/src/core/loop";
import animationData from '@/data/confetti.json';
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  return (
    <div
      className={cn(
        "group/bento relative overflow-hidden shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border p-4 md:p-0 border-neutral-200 bg-white  transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none mx-5 md:mx-0",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0% , rgba(12,14,35,1) 100% ) ",
      }}
    >
      <div className={`${id === 6} && flex justify-center h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-contain,object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover object-center  w-full h-full"}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute  z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-2xl text-center md:text-4xl w-full h-full">
              {title}
            </div>
            <div className={`absolute -bottom-5 right-10`}>
              <Lottie options={{
                loop:copied,
                autoplay:copied,
                animationData:animationData,
                rendererSettings:{
                  preserveAspectRatio:'xMidYMid slice'
                }
              }}
              />
              </div>
              <MagicButton 
            title={copied ? 'Copied!':'Copy my Email'}
            icon={<IoCopyOutline />}
            position="left"
            otherClasses="flex items-center"
            />
           
          </BackgroundGradientAnimation>
        )}
        {id === 3 && (
          <BackgroundLines>
            <div className="absolute top-33 left-43 md:top-28 md:left-12 font-sans h-full font-extralight text-sm md:text-xs text-[#c1c2d3] dark:text-neutral-300 z-10 lg:text-base tracking-wider">
              {description}
            </div>
            <div className="absolute  z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-3xl w-full h-full">
              {title}
            </div>
            <div className="absolute bottom-25 left-50 md:bottom-15 md:left-8">
              <MagicButton 
              title='View Skills'
              icon={<FaArrowCircleRight size={20} />}
              position="right"

              />
            </div>
          </BackgroundLines>
        )}

        {id !== 6 && id !== 3 && (
          <div
            className={cn(
              titleClassName,
              "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
            )}
          >
            <div className="font-sans font-extralight text-sm md:text-xs text-[#c1c2d3] dark:text-neutral-300 z-10 lg:text-base tracking-wider">
              {description}
            </div>
            <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 dark:text-neutral-200">
              {title}
            </div>

            {id === 2 && <GlobeDemo />}
          </div>
        )}
      </div>
    </div>
  );
};
