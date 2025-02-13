import ProjectTable from "@/components/tables/ProjectTable";
import { Separator } from "@/components/ui/separator";
import { getAllProjects } from "@/lib/actions/project.action";
import { IProject } from "@/types";

export default async function ProjectsPage() {
  const res = await getAllProjects();
  const projects: IProject[] = res?.data;
  if (res.error) return <div>Error Occured!!</div>;
  return (
    <div className="p-4 ">
      <h1 className="main-heading pb-4">All Projects</h1>
      <Separator />

      <div>
        <ProjectTable projects={projects} />
      </div>
    </div>
  );
}
