import BlogCard from "@/components/home/BlogCard";
import { getBlogs } from "@/lib/actions/blog.action";
import { IBlogPost } from "@/types";

export default async function AllBlogsPage() {
  const res = await getBlogs();
  const blogs: IBlogPost[] = res?.data;

  return (
    <main className="w-full pt-20 min-h-svh">
      <h1 className="main-heading text-center my-6 ">
        <span className="border-b-2 border-primary inline-block px-6 pb-2">
          All Blogs
        </span>
      </h1>
      {res.error || !res.data ? (
        <div className="text-destructive text-center text-4xl ">
          Blog not found
        </div>
      ) : null}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {blogs.map((blog) => (
          <BlogCard key={blog?._id} blog={blog} />
        ))}
      </div>
    </main>
  );
}
