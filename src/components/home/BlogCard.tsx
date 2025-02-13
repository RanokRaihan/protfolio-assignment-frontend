import { IBlogPost } from "@/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

interface BlogCardProps {
  blog: IBlogPost;
}
const BlogCard = ({ blog }: BlogCardProps) => {
  const { title, content, image } = blog || {};
  return (
    <div className="bg-white dark:bg-slate-950 border dark:border-slate-800  shadow-lg rounded-lg overflow-hidden w-full ">
      <div className="p-4 rounded-md overflow-hidden">
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
          {content}
        </p>
        <div className="flex justify-center mt-8">
          <Button variant="default" asChild>
            <Link href={`/blogs/${blog._id}`}>
              Read full blog <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
