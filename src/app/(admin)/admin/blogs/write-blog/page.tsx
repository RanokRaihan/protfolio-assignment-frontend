import WriteBlogForm from "@/components/forms/WriteBlogForm";
import { Separator } from "@/components/ui/separator";

export default function WriteBlogPage() {
  return (
    <div className="md:px-10">
      <h1 className="main-heading pb-4">Write a blog</h1>
      <Separator />
      <div className="mt-8 max-w-3xl">
        <WriteBlogForm />
      </div>
    </div>
  );
}
