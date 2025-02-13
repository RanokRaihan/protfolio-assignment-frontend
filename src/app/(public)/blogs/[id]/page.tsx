import { Button } from "@/components/ui/button";
import { getBlogById } from "@/lib/actions/blog.action";
import { IBlogPost } from "@/types";
import { ArrowLeft, Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function BlogDetailsPage({
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
  const { title, content, image, readTime } = blog;

  return (
    <main className="w-full pt-20 min-h-svh">
      <div className="container mx-auto p-4">
        <div className="rounded-md overflow-hidden max-w-3xl max-h-96 mx-auto">
          <Image
            width={720}
            height={405}
            src={image}
            alt="Image"
            className="rounded-md w-full  object-cover object-center"
          />
        </div>
        <div className="mt-6">
          <h1 className="main-heading ">{title}</h1>
          <div className="text-gray-600 dark:text-gray-500 flex items-center gap-2 mb-6 mt-2">
            <span>By {blog.author}</span>
            {blog.createdAt && (
              <>
                <Dot />
                <span>{new Date(blog.createdAt).toDateString()}</span>
              </>
            )}
            <Dot />
            <span>{readTime} Read</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-xl">{content}</p>
          <div className="flex justify-center gap-4 mt-8">
            <Button asChild>
              <Link href="/blogs">
                <ArrowLeft /> All Blogs
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
