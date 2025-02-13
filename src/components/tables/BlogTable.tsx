import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IBlogPost } from "@/types";
import { Pen } from "lucide-react";
import Link from "next/link";
import { DeleteBlogDialog } from "../admin/DeleteBlogDialog";
import { Button } from "../ui/button";

const BlogTable = ({ blogs }: { blogs: IBlogPost[] }) => {
  return (
    <Table>
      <TableCaption>A list of all your Projects.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Blog Title</TableHead>
          <TableHead>author</TableHead>
          <TableHead>Content</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {blogs.map((blog) => (
          <TableRow key={blog?._id}>
            <TableCell className="font-medium">{blog?.title}</TableCell>
            <TableCell>{blog?.author}</TableCell>
            <TableCell>
              {blog?.content?.length > 30
                ? `${blog.content.slice(0, 60)}...`
                : blog.content}
            </TableCell>
            <TableCell className="flex gap-2">
              <Button size="icon" asChild>
                <Link href={`/admin/blogs/update-blog/${blog?._id}`}>
                  <Pen />
                </Link>
              </Button>
              <DeleteBlogDialog id={blog?._id as string} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BlogTable;
