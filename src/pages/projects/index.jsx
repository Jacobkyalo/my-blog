import Container from "@/components/container";
import Footer from "@/components/footer";
import ProjectCard from "@/components/project-card";
import Link from "next/link";

export default function Projects() {
  return (
    <>
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
