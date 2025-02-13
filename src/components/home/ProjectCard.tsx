import { IProject } from "@/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

interface ProjectCardProps {
  project: IProject;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { _id, title, description, image } = project || {};
  console.log(image);
  return (
    <div className="bg-white dark:bg-slate-950 border dark:border-slate-800  shadow-lg rounded-lg overflow-hidden w-full ">
      <div className="m-2 rounded-md overflow-hidden">
        <Image
          src={image}
          width={500}
          height={300}
          alt="project"
          className="w-full h-56 object-cover object-center"
        />
      </div>

      <div className="p-4">
        <h3 className="font-bold text-log mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-500 line-clamp-3 mt-4">
          {description}
        </p>
        <div className="flex justify-center mt-4">
          <Button variant="default" asChild>
            <Link href={`/projects/${_id}`}>
              View Project <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
