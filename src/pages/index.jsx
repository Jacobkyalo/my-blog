import Link from "next/link";
import Head from "next/head";
import { Inter } from "next/font/google";
import {
  BsFillFileEarmarkFill,
  BsGithub,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { skills } from "@/data";
import Container from "@/components/container";
import ProjectCard from "@/components/project-card";
import Hr from "@/components/hr";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  <Head>
    <title>Home - Jacob Kyalo</title>
    <meta name="description" content="My blog" />
  </Head>;
  return (
    <main>
      <Container>
        <section className="my-28">
          <h1
            className={`${inter.className} text-5xl sm:text-8xl lg:text-[150px] font-black mb-10 sm:mb-6 text-white`}
          >
            Jacob Kyalo
          </h1>
          <h4 className="text-blue text-5xl font-bold mb-6">
            Fullstack developer & technical writer
          </h4>
          <p className="text-2xl lg:text-3xl text-darkWhite my-10 sm:my-16">
            <span className="block">
              I&apos;m passionate about web development, mobile
            </span>
            <span>development, and technical writing</span>
          </p>
          <>
            <ul className="flex flex-wrap flex-1 items-center gap-x-12 text-darkWhite">
              <li>
                <Link
                  href="mailto:kyalojacob84@gmail.com"
                  className="flex gap-x-4 items-center hover:text-blue transition-all duration-200 ease-in-out"
                >
                  <MdEmail size={30} className="text-blue" />
                  <span className="text-xl lg:text-2xl">Email</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/Jacobkyalo"
                  target="_blank"
                  className="flex gap-x-4 items-center hover:text-blue transition-all duration-200 ease-in-out"
                >
                  <BsGithub size={26} className="text-blue" />
                  <span className="text-xl lg:text-2xl">Github</span>
                </Link>
              </li>
            </ul>
          </>
        </section>
        <section className="my-40">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-24">
            <h1 className="font-bold text-darkWhite  text-5xl sm:text-7xl lg:text-[78px]">
              I develop{" "}
              <span className="text-blue">fullstack web and mobile apps</span>
            </h1>
            <div>
              <p className="text-2xl lg:text-3xl text-darkWhite mb-10">
                A developer with a strong problem solving and design skills,
                specializing in designing, creating and developing fullstack
                apps for businesses and firms
              </p>
              <ul className="grid grid-cols-2 gap-10 text-darkWhite">
                <li>
                  <Link
                    href="https://linkedin.com/in/jacobkyalo"
                    target="_blank"
                    className="flex gap-x-4 items-center"
                  >
                    <BsLinkedin size={26} className="text-blue" />
                    <span className="text-xl lg:text-2xl border-b">
                      Linkedin
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://twitter.com/jacobkyalo202"
                    target="_blank"
                    className="flex gap-x-4 items-center"
                  >
                    <BsTwitter size={26} className="text-blue" />
                    <span className="text-xl lg:text-2xl border-b">
                      Twitter
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:kyalojacob84@gmail.com"
                    target="_blank"
                    className="flex gap-x-4 items-center"
                  >
                    <MdEmail size={26} className="text-blue" />
                    <span className="text-xl lg:text-2xl border-b">Email</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/Jacobkyalo"
                    target="_blank"
                    className="flex gap-x-4 items-center"
                  >
                    <BsFillFileEarmarkFill size={26} className="text-blue" />
                    <span className="text-xl lg:text-2xl border-b">Resume</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="my-40">
          <h1 className="mb-20 font-bold text-4xl sm:text-6xl text-white">
            Featured Projects
          </h1>
          <ProjectCard />
          {/* view all projects button */}
          <Link href="/projects">
            <span className="text-blue text-sm block mt-8 sm:text-lg font-bold">
              View all projects &rarr;
            </span>
          </Link>
        </section>
        <section className="my-40">
          <h1 className="mb-8 font-bold text-4xl sm:text-6xl text-white">
            Tools & Skills
          </h1>
          <p className="text-2xl lg:text-3xl text-darkWhite mb-10">
            During my career, I have used and developed skills competence
            <br className="hidden lg:block" /> in different tools, skills and
            frameworks as highlighted below:
          </p>
          <div className="flex flex-wrap flex-1 items-center gap-y-10 gap-x-8">
            {skills?.map((skill, index) => (
              <strong
                key={index}
                className="text-2xl sm:text-4xl text-blue font-bold"
              >
                {skill}
              </strong>
            ))}
          </div>
        </section>
        <section className="my-40">
          <h1 className="mb-20 font-bold text-4xl sm:text-6xl text-white">
            Featured Blogs
          </h1>
          <div className="bg-blue bg-opacity-20 p-6 rounded-xl mb-10">
            <span className="mb-6 block text-blue text-base">
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              {"  "}. 4 min read
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">
              Writing better and clean TailwindCSS code in 2023
            </h2>
            <p className="text-darkWhite text-lg mb-6">
              How can we write better and cleaner TailwindCSS code that is
              scalable and and free from errors
            </p>
            <Link href="/blog/writing-better-and-clean-tailwindcss-code">
              <span className="text-blue text-lg font-bold">
                Read more &rarr;
              </span>
            </Link>
          </div>
          <div className="bg-blue bg-opacity-20 p-6 rounded-xl mb-10">
            <span className="mb-6 block text-blue text-base">
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              {"  "}. 4 min read
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">
              Writing better and clean TailwindCSS code in 2023
            </h2>
            <p className="text-darkWhite text-lg mb-6">
              How can we write better and cleaner TailwindCSS code that is
              scalable and and free from errors
            </p>
            <Link href="/blog/writing-better-and-clean-tailwindcss-code">
              <span className="text-blue text-lg font-bold">
                Read more &rarr;
              </span>
            </Link>
          </div>

          {/* view all blogs button */}
          <Link href="/blog">
            <span className="text-blue text-sm sm:text-lg font-bold">
              View all blogs &rarr;
            </span>
          </Link>
        </section>
        <Hr />
        <Footer />
      </Container>
    </main>
  );
}
