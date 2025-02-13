import ProjectCard from "@/components/home/ProjectCard";
import { getAllProjects } from "@/lib/actions/project.action";
import { IProject } from "@/types";

export default async function ProjectsPage() {
  const res = await getAllProjects();
  const projects: IProject[] = res?.data;
  if (!projects) {
    return <div>No project found</div>;
  }
  if (res.error) {
    return <div>Something went wrong</div>;
  }
  return (
    <main className="w-full pt-20 min-h-svh">
      <h1 className="main-heading text-center  my-6">
        <span className="border-b-2 border-primary inline-block px-6 pb-2">
          All Projects
        </span>
      </h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {projects.map((project) => (
          <ProjectCard key={project?.title} project={project} />
        ))}
      </div>
    </main>
  );
}
