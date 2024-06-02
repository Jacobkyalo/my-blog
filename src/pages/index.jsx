import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { allBlogs } from "contentlayer/generated";
import { projects } from "@/data/projects";
import AppNavbar from "@/components/app-navbar";
import AppContainer from "@/components/app-container";
import ProjectCard from "@/components/project-card";
import AppSeparator from "@/components/app-separator";
import BlogCard from "@/components/blog-card";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Jacob</title>
        <meta
          name="description"
          content="Fullstack developer & technical writer"
        />
        <meta name="author" content="Jacob Kyalo" />
        <meta property="og:title" content="Home | Jacob" />
        <meta property="og:image" content="/opengraph-image.png" />
        <meta property="twitter:title" content="Home | Jacob" />
        <meta property="twitter:image" content="/twitter-image.png" />
        <meta
          name="google-site-verification"
          content="AJ8oWCJPQuX5Qn4kPFg1fTb_56oc73AdYnfDOtkgBBM"
        />
      </Head>

      <AppNavbar />
      <main>
        <AppContainer>
          <section className="my-16">
            <div className="flex items-center gap-8 flex-col sm:flex-row">
              <Image
                src="/my_photo_collage.jpg"
                width={100}
                height={100}
                priority
                alt="my_photo"
                className="rounded-full object-cover border-4 border-blue-600"
              />
              <div className="text-center sm:text-left">
                <h1 className="text-3xl sm:text-5xl font-black mb-2">
                  I&apos;m Jacob Kyalo
                </h1>
                <p className="font-medium sm:text-lg">
                  A fullstack developer and Technical writer.{" "}
                  <Link href="/about" className="text-blue-600">
                    Learn More &rarr;
                  </Link>
                </p>
              </div>
            </div>
          </section>
          <AppSeparator />
          <section className="my-16">
            <h2 className="font-black text-2xl sm:text-3xl mb-10">
              Featured projects
            </h2>
            <div className="grid gap-10">
              {projects?.slice(0, 2)?.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
            <Link href="/projects" className="text-blue-600">
              <span className="mt-10 block font-bold">All projects &rarr;</span>
            </Link>
          </section>
          <AppSeparator />
          <section className="my-16">
            <h2 className="font-black text-2xl sm:text-3xl mb-10">
              Recent Blog Posts
            </h2>
            <div>
              {allBlogs
                ?.sort(
                  (a, b) =>
                    new Date(b.publishedAt).getTime() -
                    new Date(a.publishedAt).getTime()
                )
                ?.slice(0, 2)
                ?.map((blog) => (
                  <BlogCard key={blog._id} blog={blog} />
                ))}
            </div>
            <Link href="/blog" className="text-blue-600">
              <span className="mt-10 block font-bold">
                All Blog Posts &rarr;
              </span>
            </Link>
          </section>
        </AppContainer>
      </main>
    </>
  );
}
