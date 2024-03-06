import Link from "next/link";
import { format, parseISO } from "date-fns";

export default function BlogCard({ blog }) {
  return (
    <div className="my-8 border-b py-4 rounded-lg">
      <time dateTime={blog?.publishedAt} className="italic text-slate-600">
        {format(parseISO(blog?.publishedAt), "LLLL d, yyyy")}
      </time>
      <Link href={`/blog/${blog?.slug}`}>
        <h2 className="text-2xl font-bold">{blog?.title}</h2>
      </Link>
      <p className="text-slate-600">{blog?.description}</p>
    </div>
  );
}
