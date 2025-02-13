import ProjectForm from "@/components/forms/ProjectForm";
import { Separator } from "@/components/ui/separator";

export default function AddProjectPage() {
  return (
    <div>
      <h1 className="main-heading pb-4">Add New Project</h1>
      <Separator />
      <div className="mt-8 max-w-3xl">
        <ProjectForm />
      </div>
    </div>
  );
}
