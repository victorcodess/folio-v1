import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ProjectProps } from "./projectDetails";
import Link from "next/link";
import Image from "next/image";
import carpool from "../public/carpool.png";

const ProjectCard = ({
  id,
  name,
  description,
  technologies,
  github,
  demo,
  image,
  available,
}: ProjectProps) => {
  return (
    <div
      style={
        {
          backgroundImage: `url(${image})`,
          // height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          position: "relative",
        } as React.CSSProperties
      }
      className={`w-full md:w-[100%] relative  items-stretch z-10 justify-center py-0 h-[500px] md:h-[600px] lg:h-[800px] bg-center rounded-3xl`}
    >
      <div className="absolute left-0 top-0 right-0 bottom-0 w-full h-full bg-[#0E1016]/60 mix-blend-multiply hover:bg-[#0E1016]/100 transition-colors ease-linear delay-100"></div>

      <div className="text-black absolute top-0 right-0 mt-8 mr-8 flex items-center justify-center gap-4">
        {available ? (
          <>
            <Link href={github} target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                className=" bg-[#e4ded7] p-5 lg:text-[28px] lg:w-[30px] rounded-full"
              />
            </Link>
            <Link href={demo} target="_blank">
              <FontAwesomeIcon
                icon={faLink}
                className=" bg-[#e4ded7] p-5 lg:text-[28px] lg:w-[30px] rounded-full"
              />
            </Link>
          </>
        ) : (
          <div className=" bg-[#e4ded7] px-4 py-2 rounded-xl">
            <h3 className="text-[16px] ">Coming soon</h3>
          </div>
        )}
      </div>
      <div className="text-white absolute bottom-0 left-0 mb-10 ml-8 lg:mb-16 lg:ml-14">
        <div className="mb-4 flex gap-4">
          {technologies.map((tech, id) => (
            <span
              key={id}
              className="text-[16px] lg:text-[20px] uppercase font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>
        <h3 className="text-[40px] lg:text-[48px] lg:leading-none text-[#e4ded7] max-w-[90%] lg:max-w-[500px]">
          {name}
        </h3>
        <p className="mt-4 text-[16px] font-normal max-w-[90%] hidden ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
