import ProjectGrid from "./ProjectGrid";

const Work = () => {
  return (
    <section
      className="bg-[#0E1016] bg-cover w-full relative flex flex-col items-center justify-center z-10 py-16 md:py-20 lg:py-28 bg-center"
      id="work"
    >
      <h2 className="text-[#e4ded7] mb-10 md:mb-16 lg:mb-16 text-[36px] md:text-[42px] lg:text-[48px]">
        Featured Work
      </h2>

      <ProjectGrid />
    </section>
  );
};

export default Work;
