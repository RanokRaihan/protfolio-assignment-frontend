import { getBlogs } from "@/lib/actions/blog.action";
import { IBlogPost } from "@/types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import BlogCard from "./BlogCard";

const BlogSection = async () => {
  const blogsRes = await getBlogs();
  const blogs: IBlogPost[] = blogsRes?.data;
  return (
    <section className="bg-gray-50 dark:bg-slate-900/50 py-4">
      <div className="container mx-auto p-4  space-y-14 ">
        <h2 className="mb-4 text-center">
          <span className="main-heading border-b border-primary pb-2">
            My Blogs
          </span>
        </h2>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 p-4">
          {blogs.slice(0, 3).map((blog) => (
            <BlogCard key={blog?.title} blog={blog} />
          ))}
        </div>
        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/blogs">
              Read all blogs <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
