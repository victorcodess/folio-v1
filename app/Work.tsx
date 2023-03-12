import ProjectCard from "./ProjectCard";
import { projectDetails, ProjectProps } from "./projectDetails";
import Image from "next/image";

const Work = () => {
  return (
    <section
      className="bg-[#0E1016] bg-cover w-full relative flex flex-col items-center justify-center z-10 py-16 lg:py-28 bg-center"
      id="work"
    >
      <h2 className="text-[#e4ded7] mb-10 lg:mb-20 text-[36px] lg:text-[48px]">
        Featured Work
      </h2>

      <div className="grid gap-y-6 gap-x-6 grid-cols-1 grid-rows-2 lg:grid-cols-2 w-[90%] lg:max-w-[1440px]">
        {projectDetails.map((project: ProjectProps) => (
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
    </section>
  );
};

export default Work;
