import UpdateProjectForm from "@/components/forms/UpdateProjectForm";
import { Separator } from "@/components/ui/separator";
import { getProjectById } from "@/lib/actions/project.action";
import { IProject } from "@/types";

export default async function UpdateProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const res = await getProjectById(id);
  const project: IProject = res?.data;
  console.log({ project });
  if (res.error || !res.data) {
    return (
      <div className="text-destructive text-center text-4xl ">
        Project not found
      </div>
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { image, createdAt, updatedAt, ...rest } = project;
  return (
    <div className="md:px-10">
      <h1 className="main-heading pb-4">Update Project</h1>
      <Separator />
      <div className="mt-8 max-w-3xl">
        <UpdateProjectForm initialValues={rest} projectId={id} />
      </div>
    </div>
  );
}
