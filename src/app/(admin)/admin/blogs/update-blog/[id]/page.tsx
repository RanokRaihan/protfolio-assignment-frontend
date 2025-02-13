import UpdateBlogForm from "@/components/forms/UpdateBlogForm";
import { getBlogById } from "@/lib/actions/blog.action";
import { IBlogPost } from "@/types";
import { Separator } from "@radix-ui/react-separator";

export default async function UpdateBlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const res = await getBlogById(id);
  if (res.error || !res.data) {
    return (
      <div className="text-destructive text-center text-4xl ">
        Blog not found
      </div>
    );
  }
  const blog: IBlogPost = res.data;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { image, createdAt, updatedAt, ...rest } = blog;

  return (
    <div className="md:px-10">
      <h1 className="main-heading pb-4">Update blog</h1>
      <Separator />
      <div className="mt-8 max-w-3xl">
        <UpdateBlogForm initialValue={rest} blogId={id} />
      </div>
    </div>
  );
}
