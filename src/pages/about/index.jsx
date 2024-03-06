import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GitHub, Linkedin, Mail, Twitter } from "react-feather";
import { skills } from "@/data/skills";
import AppNavbar from "@/components/app-navbar";
import AppSeparator from "@/components/app-separator";

const socialLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jacobkyalo",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/jacobkyalo_dev",
    icon: Twitter,
  },
  {
    name: "GitHub",
    link: "https://github.com/Jacobkyalo",
    icon: GitHub,
  },

  {
    name: "Email",
    link: "mailto:kyalojacob84@gmail.com",
    icon: Mail,
  },
];
export default function About() {
  return (
    <>
      <Head>
        <title>About | Jacob</title>
        <meta name="description" content="About" />
        <meta name="author" content="Jacob Kyalo" />
      </Head>
      <AppNavbar />

      <main>
        <section className="my-16 w-full">
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-0 items-center justify-between">
            <div className="order-2 sm:order-1">
              <h1 className="text-3xl sm:text-5xl font-black mb-2">Hey</h1>
              <p className="font-medium sm:text-lg">
                Nice to meet you! I live in Nairobi, Kenya.
              </p>
            </div>
            <Image
              src="/my_photo_collage.jpg"
              alt="my_photo"
              priority
              width={500}
              height={500}
              className="rounded-lg border-2 order-1 sm:order-2 border-blue-600 w-72 h-72 object-cover"
            />
          </div>
        </section>
        <AppSeparator />
        <section className="my-16">
          <div className="flex flex-col sm:flex-row  gap-10 sm:gap-0 justify-between w-full">
            <div className="flex-1 sm:pe-10">
              <h2 className="font-black text-2xl sm:text-3xl mb-10">
                About Me
              </h2>
              <p className="font-medium sm:text-lg text-slate-600">
                I am a software developer who is passionate about building
                scalable software solutions. I specialize in building web
                applications using modern technologies like React, Next.js, and
                Tailwind CSS. I am also experienced in building APIs using
                Node.js and Express.js. I am currently learning about DevOps and
                how to build scalable and maintainable infrastructure.
              </p>
            </div>
            <div className="px-0 sm:px-10 sm:border-l-2 ">
              <h2 className="font-black text-2xl sm:text-3xl mb-10">
                Social links
              </h2>
              <ul>
                {socialLinks.map((link, index) => (
                  <li className="mb-4" key={index}>
                    <Link
                      href={link.link}
                      className="flex items-center gap-x-2 hover:underline text-blue-600 font-medium text-lg sm:text-xl"
                    >
                      <span className="text-black">
                        {React.createElement(link.icon)}
                      </span>
                      {link.name} &rarr;
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="my-16">
          <h2 className="font-black text-2xl sm:text-3xl mb-2">
            Tools & Skills
          </h2>
          <p className="font-medium sm:text-lg text-slate-600">
            I have experience working with the following technologies:
          </p>
          <ul className="list-disc list-inside mt-4">
            {skills.map((skill, index) => (
              <li key={index} className="text-slate-600">
                {skill}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
