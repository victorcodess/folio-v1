import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ProjectProps } from "./projectDetails";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({
  id,
  name,
  description,
  technologies,
  github,
  demo,
  image,
  bgColor,
  available,
}: ProjectProps) => {
  return (
    <div
      style={
        {
          // backgroundImage: `url(${image})`,
          // height: "100vh",
          backgroundColor: bgColor,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          position: "relative",
        } as React.CSSProperties
      }
      className={`w-full md:w-[100%] relative  items-stretch z-10 justify-center py-0 h-[550px] md:h-[650px] lg:h-[500px] bg-center rounded-3xl overflow-hidden`}
    >
      <Image
        src={image}
        alt={name}
        width={2159}
        height={1451}
        className={`absolute -bottom-2 w-[70%] md:w-[60%] lg:max-w-[55%] ${
          id % 2 === 0 ? "right-0" : "left-0"
        }`}
      />
      <div
        className={`text-black absolute top-0 ${
          id % 2 === 0 ? "left-0 ml-8 lg:ml-14" : "right-0 mr-8 lg:mr-14"
        } mt-6 lg:mt-10  flex items-center justify-center gap-4`}
      >
        {available ? (
          <>
            <Link href={github} target="_blank" className="rounded-full">
              <FontAwesomeIcon
                icon={faGithub}
                className=" bg-white p-5 text-[20px] md:text-[24px] lg:text-[28px] w-[20px] md:w-[25px] lg:w-[30px] rounded-full"
              />
            </Link>
            <Link href={demo} target="_blank">
              <FontAwesomeIcon
                icon={faLink}
                className=" bg-white p-5 text-[20px] md:text-[24px] lg:text-[28px] w-[20px] md:w-[25px] lg:w-[30px] rounded-full"
              />
            </Link>
          </>
        ) : (
          <div className=" bg-white px-4 py-2 md:px-5 md:py-3 lg:px-6 lg:py-3 rounded-xl">
            <h3 className="text-[16px] md:text-[18px] lg:text-[20px] ">
              Coming soon
            </h3>
          </div>
        )}
      </div>
      <div
        className={`text-white absolute  ${
          !(id % 2 === 0)
            ? "right-0 md:right-0 lg:right-0 top-32 lg:top-60 mr-0 ml-10 lg:mr-4  md:ml-0"
            : "left-10 top-32 lg:top-52 ml-0 md:mr-12 lg:ml-4"
        } mb-10  md:mb-16 lg:mb-14 `}
      >
        <h3 className="text-[40px] md:text-[44px] lg:text-[48px] leading-none md:leading-none lg:leading-none text-white max-w-[90%] lg:max-w-[450px]">
          {name}
        </h3>
        <p className="mt-4 text-[16px] opacity-80  font-normal w-[90%] max-w-[457px] ">
          {description}
        </p>
        <div className="mt-9 flex gap-4">
          {technologies.map((tech, id) => (
            <span
              key={id}
              className="text-[14px] md:text-[16px] lg:text-[18px] uppercase font-bold "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
