import { Helmet } from "react-helmet";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allBlogs } from "contentlayer/generated";
import AppSeparator from "@/components/app-separator";
import { components } from "@/components/mdx-components";

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((blog) => ({ params: { slug: blog.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blog = allBlogs.find((blog) => blog.slug === params.slug);

  if (!blog)
    return {
      notFound: true,
    };

  return { props: { blog } };
}

export default function BlogPost({ blog }) {
  const MDXContent = useMDXComponent(blog.body.code);

  return (
    <>
      <Helmet>
        <title>{`${blog.title}`}</title>
        <meta name="description" content={`${blog.description}`} />
        <meta name="author" content="Jacob Kyalo" />
      </Helmet>
      <main className="w-full md:container md:max-w-4xl">
        <section className="my-16">
          <Link href="/blog">
            <span className="text-blue-600 hover:underline block mb-6 font-bold">
              &larr; All Blogs
            </span>
          </Link>

          <h2 className="text-3xl sm:text-5xl font-black mb-4">
            {blog?.title}
          </h2>
          <p className="text-lg text-slate-600 mb-6">{blog?.description}</p>
          <span className="text-slate-600">
            Published on{" "}
            <time dateTime={blog?.publishedAt} className="font-bold">
              {format(parseISO(blog?.publishedAt), "LLLL d, yyyy")}
            </time>{" "}
            - by Jacob Kyalo
          </span>
        </section>
        <AppSeparator />
        <section className="mt-16 prose prose-headings-underline">
          <MDXContent components={components} />
        </section>
      </main>
    </>
  );
}
