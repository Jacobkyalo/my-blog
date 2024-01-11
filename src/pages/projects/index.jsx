import { NextSeo } from "next-seo";
import Link from "next/link";
import Container from "@/components/container";
import Footer from "@/components/footer";
import ProjectCard from "@/components/project-card";

export default function Projects() {
  return (
    <>
      <NextSeo
        title="Projects - Jacob Kyalo"
        description="My Projects"
        canonical="/projects"
        openGraph={{
          url: "/projects",
          title: "Projects - Jacob Kyalo",
          description: "My Projects",
          images: [
            {
              url: "/logo.svg",
              width: 1280,
              height: 720,
              alt: "Jacob Kyalo",
            },
          ],
        }}
        twitter={{
          handle: "@jacobyalo_dev",
          site: "@jacobkyalo_dev",
          cardType: "summary_large_image",
        }}
      />
      <main>
        <Container>
          <section className="my-20">
            <h1 className="mb-4 font-bold text-4xl sm:text-6xl text-white">
              Latest Projects
            </h1>
            <p className="text-darkWhite text-lg mb-6 w-full max-w-lg">
              Here are some of my latest projects. I am always working on
              something new, so check back often to see what I am up to. If you
              want to see more of my work, check out my{" "}
              <Link href="https://github.com/Jacobkyalo" target="_blank">
                GitHub
              </Link>
            </p>
          </section>
          <section className="flex flex-col gap-y-16 mb-40">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </section>
          <Footer />
        </Container>
      </main>
    </>
  );
}
