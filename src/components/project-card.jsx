import Link from "next/link";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { MdLink } from "react-icons/md";
import projectImage from "@/assets/images/dashboard.svg";

export default function ProjectCard() {
  return (
    <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
      <div>
        <h2 className="text-4xl font-bold text-blue mb-8">Better Tailwind</h2>
        <ul className="flex flex-wrap items-center gap-x-12 text-darkWhite">
          <li>
            <Link
              href="#"
              className="flex gap-x-4 items-center hover:text-blue transition-all duration-200 ease-in-out"
            >
              <MdLink size={30} className="text-blue" />
              <span className="text-xl lg:text-2xl">Link</span>
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/Jacobkyalo"
              target="_blank"
              className="flex gap-x-4 items-center hover:text-blue transition-all duration-200 ease-in-out"
            >
              <BsGithub size={24} className="text-blue" />
              <span className="text-xl lg:text-xl">Github</span>
            </Link>
          </li>
        </ul>
        <p className="text-darkWhite text-lg lg:text-2xl my-10">
          Better Tailwind is an award-winning component library that provides
          the building blocks needed to create an accessible app with speed ⚡️.
        </p>
      </div>
      <Image src={projectImage} alt="project-image" priority />
    </div>
  );
}
