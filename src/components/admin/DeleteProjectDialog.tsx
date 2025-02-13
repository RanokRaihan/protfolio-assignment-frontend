"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { deleteProject } from "@/lib/actions/project.action";
import { Trash } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../ui/button";

export function DeleteProjectDialog({ id }: { id: string }) {
  const handleDelete = async () => {
    try {
      await deleteProject(id);
      toast.success("Blog deleted successfully");
    } catch (err) {
      const error = err as Error;
      toast.error(error.message || "Failed to delete blog");
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive" size="icon">
          <Trash />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Are you sure to delete the project?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete the
            project from the database.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button onClick={handleDelete} variant="destructive">
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
