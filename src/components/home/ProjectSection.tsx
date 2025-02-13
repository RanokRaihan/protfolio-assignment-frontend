import { getAllProjects } from "@/lib/actions/project.action";
import { IProject } from "@/types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import ProjectCard from "./ProjectCard";

const ProjectSection = async () => {
  const res = await getAllProjects();
  const projects: IProject[] = res?.data;
  if (!projects) {
    return <div>No project found</div>;
  }
  if (res.error) {
    return <div>Something went wrong</div>;
  }
  return (
    <section className="bg-gray-50 dark:bg-slate-900/50 py-4">
      <div className="container mx-auto p-4 text-center space-y-14 ">
        <h2 className="mb-4">
          <span className="main-heading border-b border-primary pb-2">
            My Projects
          </span>
        </h2>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3   gap-8 p-4">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project?.title} project={project} />
          ))}
        </div>
        <Button asChild size="lg" variant="outline">
          <Link href="/projects">
            View All Projects <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default ProjectSection;
