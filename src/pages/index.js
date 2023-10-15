import Link from "next/link";
import { Inter } from "next/font/google";
import Container from "@/components/container";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Container>
        <section className="py-28">
          <h1
            className={`${inter.className} text-6xl sm:text-8xl lg:text-9xl font-bold mb-6 text-white`}
          >
            Jacob Kyalo
          </h1>
          <h4 className="text-blue text-4xl font-semibold mb-6">
            Fullstack developer & technical writer
          </h4>
          <p className="text-2xl text-darkWhite my-10 sm:my-16">
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
                  className="flex gap-x-4 items-center"
                >
                  <MdEmail size={30} className="text-blue" />
                  <span className="text-xl">Email</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/Jacobkyalo"
                  target="_blank"
                  className="flex gap-x-4 items-center"
                >
                  <BsGithub size={26} className="text-blue" />
                  <span className="text-xl">Github</span>
                </Link>
              </li>
            </ul>
          </>
        </section>
      </Container>
    </main>
  );
}
