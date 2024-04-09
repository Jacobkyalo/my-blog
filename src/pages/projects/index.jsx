import Link from "next/link";
import Head from "next/head";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/project-card";
import AppNavbar from "@/components/app-navbar";
import AppSeparator from "@/components/app-separator";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Jacob</title>
        <meta name="description" content="Projects" />
        <meta name="author" content="Jacob Kyalo" />
      </Head>
      <AppNavbar />

      <main>
        <section className="my-16">
          <>
            <h1 className="text-3xl sm:text-5xl font-black mb-2">Projects</h1>
            <p className="font-medium sm:text-lg">
              Here are some things I&apos;ve worked on. More on my{" "}
              <Link
                href="https://github.com/JacobKyalo"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                GitHub &rarr;
              </Link>
            </p>
          </>
        </section>
        <AppSeparator />
        <section className="my-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
