import { Button } from "@/components/ui/button";
import { getProjectById } from "@/lib/actions/project.action";
import { IProject } from "@/types";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

interface ProjectDetailsPageProps {
  params: Promise<{ id: string }>;
}
export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const id = (await params).id;
  const res = await getProjectById(id);
  const project: IProject = res?.data;
  if (!project) {
    return <div>No project found</div>;
  }
  if (res.error) {
    return <div>Something went wrong</div>;
  }
  return (
    <main className="w-full pt-20 min-h-svh">
      <div className="container mx-auto p-4">
        <div className="rounded-md overflow-hidden max-w-3xl mx-auto">
          <Image
            width={720}
            height={405}
            src={project?.image}
            alt={`${project?.title} project image`}
            className="rounded-md w-full  object-cover"
          />
        </div>
        <div className="mt-6">
          <h1 className="main-heading mb-4">{project?.title}</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {project?.technologies?.split(",").map((tag, index) => (
              <Tag key={tag} text={tag} index={index} />
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-xl ">
            {project?.description}
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Button asChild>
              <a href={project?.liveLink} target="_blank">
                Live Preview <ExternalLink />
              </a>
            </Button>
            {project?.codeLink && (
              <Button asChild variant="secondary">
                <a href={project?.codeLink} target="_blank">
                  Explore Codebase <ExternalLink />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

const Tag = ({ text, index }: { text: string; index: number }) => {
  const colors = [
    "bg-orange-600",
    "bg-indigo-600",
    "bg-green-600",
    "bg-blue-600",
    "bg-purple-600",
    "bg-red-600",
  ];
  return (
    <span
      className={`uppercase inline-block px-4 py-1 text-xs font-semibold rounded-full text-white ${
        colors[index % colors.length]
      }`}
    >
      {text}
    </span>
  );
};
