import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <div 
      className="group cursor-pointer animate-scale-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-card">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
            <p className="text-accent text-sm font-medium">{project.category}</p>
            <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
            <p className="text-muted-foreground">{project.description}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-4 space-y-1 group-hover:translate-x-2 transition-transform duration-300">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <span className="text-sm text-muted-foreground">{project.year}</span>
        </div>
        <p className="text-accent text-sm font-medium">{project.category}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
