import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const ProjectsGrid = () => {
  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold">Selected Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A curated collection of projects spanning branding, digital products, and visual design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
