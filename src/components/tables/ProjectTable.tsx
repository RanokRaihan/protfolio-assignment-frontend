import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IProject } from "@/types";
import { Pen } from "lucide-react";
import Link from "next/link";
import { DeleteProjectDialog } from "../admin/DeleteProjectDialog";
import { Button } from "../ui/button";

const ProjectTable = ({ projects }: { projects: IProject[] }) => {
  return (
    <Table>
      <TableCaption>A list of all your Projects.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Project Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Technologies</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <TableRow key={project?._id}>
            <TableCell className="font-medium">{project?.title}</TableCell>
            <TableCell>
              {project?.description?.length > 30
                ? `${project.description.slice(0, 30)}...`
                : project.description}
            </TableCell>
            <TableCell>{project?.technologies}</TableCell>
            <TableCell className="flex gap-2">
              <Button size="icon" asChild>
                <Link href={`/admin/projects/update-project/${project?._id}`}>
                  <Pen />
                </Link>
              </Button>
              <DeleteProjectDialog id={project?._id as string} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProjectTable;
