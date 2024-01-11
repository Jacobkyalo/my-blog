import Link from "next/link";
import { NextSeo } from "next-seo";
import { Poppins } from "next/font/google";
import {
  BsFillFileEarmarkFill,
  BsGithub,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { allBlogs } from "contentlayer/generated";
import { skills } from "@/data/skills";
import Container from "@/components/container";
import ProjectCard from "@/components/project-card";
import Hr from "@/components/hr";
import Footer from "@/components/footer";
import BlogCard from "@/components/blog-card";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function Home() {
  return (
    <>
      <NextSeo
        title="Jacob Kyalo - Fullstack developer & technical writer"
        description="Fullstack developer & technical writer"
        canonical="/"
        openGraph={{
          url: "/",
          title: "Jacob Kyalo - Fullstack developer & technical writer",
          description: "Fullstack developer & technical writer",
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
          <section className="my-28">
            <h1
              className={`${poppins.className} text-5xl sm:text-8xl lg:text-[150px] font-black mb-10 sm:mb-6 text-white`}
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
                      href="https://twitter.com/jacobkyalo_dev"
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
                      <span className="text-xl lg:text-2xl border-b">
                        Email
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://github.com/Jacobkyalo"
                      target="_blank"
                      className="flex gap-x-4 items-center"
                    >
                      <BsFillFileEarmarkFill size={26} className="text-blue" />
                      <span className="text-xl lg:text-2xl border-b">
                        Resume
                      </span>
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
            {allBlogs
              ?.sort(
                (a, b) =>
                  new Date(b.publishedAt).getTime() -
                  new Date(a.publishedAt).getTime()
              )
              .slice(0, 2)
              .map((blog) => (
                <Link href={`/blog/${blog.slug}`} key={blog._id}>
                  <BlogCard blog={blog} />
                </Link>
              ))}

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
    </>
  );
}
