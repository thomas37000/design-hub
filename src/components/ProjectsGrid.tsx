import { useState, useEffect } from "react";

import ProjectCard from "./ProjectCard";
import { ProjectsDesigner } from "@/types";
import { supabase } from "@/integrations/supabase/client";
import { Database } from "@/integrations/supabase/types";

const ProjectsGrid = () => {
  const [projects, setProjects] = useState<ProjectsDesigner[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getProjects();
  }, []);

  async function getProjects() {
    try {
      const { data, error } = await supabase
        .from("designer_projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error(error);
        setError(error);
      } else {
        setProjects(data as ProjectsDesigner[]);
        console.log(data);
      }
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold">Selected Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A curated collection of projects spanning branding, digital projects, and visual design.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};


export default ProjectsGrid;