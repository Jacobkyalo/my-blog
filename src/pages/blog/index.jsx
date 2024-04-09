import Head from "next/head"
import { allBlogs } from "contentlayer/generated";
import BlogCard from "@/components/blog-card";
import AppNavbar from "@/components/app-navbar";
import AppSeparator from "@/components/app-separator";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Jacob </title>
        <meta name="description" content="Blog" />
        <meta name="author" content="Jacob Kyalo" />
      </Head>
      <AppNavbar />

      <main>
        <section className="my-16">
          <>
            <h1 className="text-3xl sm:text-5xl font-black mb-2">Blog</h1>
            <p className="font-medium sm:text-lg">
              Sometimes I write about things I learn.
            </p>
          </>
        </section>
        <AppSeparator />
        <section>
          {allBlogs
            ?.sort(
              (a, b) =>
                new Date(b.publishedAt).getTime() -
                new Date(a.publishedAt).getTime()
            )
            ?.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
        </section>
      </main>
    </>
  );
}
