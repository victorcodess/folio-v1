"use client";
import ProjectCard from "./ProjectCard";
import { devProjects, designProjects, ProjectProps } from "./projectDetails";
import { useState } from "react";

const ProjectGrid = () => {
  const [filter, setFilter] = useState(true);

  return (
    <>
      <div className="flex gap-16 text-[#e4ded7] mb-10 md:mb-16  lg:mb-20 ">
        <h4
          className={`text-[16px] md:text-[20px] lg:text-[24px] ${
            filter ? "text-[#e4ded7]" : "text-[#e4ded7]/30"
          }`}
          onClick={() => setFilter(true)}
        >
          Development
        </h4>{" "}
        <h4
          className={`text-[16px] md:text-[20px] lg:text-[24px] ${
            filter ? "text-[#e4ded7]/30" : "text-[#e4ded7]"
          }`}
          onClick={() => setFilter(false)}
        >
          Design
        </h4>
      </div>

      {filter ? (
        <div className="grid gap-y-6 gap-x-6 grid-cols-1 grid-rows-2 lg:grid-cols-2 w-[90%] lg:max-w-[1200px]">
          {devProjects.map((project: ProjectProps) => (
            <ProjectCard
              id={project.id}
              key={project.id}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
              image={project.image}
              available={project.available}
            />
          ))}
        </div>
      ) : (
        <div className="grid gap-y-6 gap-x-6 grid-cols-1 grid-rows-2 lg:grid-cols-2 w-[90%] lg:max-w-[1200px]">
          {designProjects.map((project: ProjectProps) => (
            <ProjectCard
              id={project.id}
              key={project.id}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
              image={project.image}
              available={project.available}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ProjectGrid;
