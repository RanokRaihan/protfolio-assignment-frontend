import BlogTable from "@/components/tables/BlogTable";
import { Separator } from "@/components/ui/separator";
import { getBlogs } from "@/lib/actions/blog.action";
import { IBlogPost } from "@/types";

export default async function BlogsPage() {
  const res = await getBlogs();
  const blogs: IBlogPost[] = res?.data;

  return (
    <div className="p-4 ">
      <h1 className="main-heading pb-4">All Blogs</h1>
      <Separator />

      <div>
        <BlogTable blogs={blogs} />
      </div>
    </div>
  );
}
