import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Todo list"
          description="Maximize efficiency and productivity with our intuitive Todo List project, simplifying task organization and prioritization for seamless workflow management.
          "
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="ProjectCard component displays an interactive card on a website with a specified image, title, and description."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Python games"
          description="Discover a dynamic collection of creatively crafted Python games, promising endless fun and learning opportunities.






          "
        />
      </div>
    </div>
  );
};

export default Projects;
