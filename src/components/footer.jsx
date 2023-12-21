import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="my-20">
      <h3 className="font-bold text-4xl text-darkWhite mb-12">Jacob Kyalo</h3>
      <p className="text-2xl text-darkWhite mb-10">
        Passionate Fullstack developer aiming to develop apps that help
        businesses grow.
      </p>
      <ul className="flex flex-wrap items-center gap-10 text-darkWhite">
        <li>
          <Link
            href="https://linkedin.com/in/jacobkyalo"
            target="_blank"
            className="flex gap-x-4 items-center"
          >
            <BsLinkedin size={26} className="text-blue" />
            <span className="text-xl lg:text-2xl border-b">Linkedin</span>
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/Jacobkyalo"
            target="_blank"
            className="flex gap-x-4 items-center"
          >
            <BsGithub size={26} className="text-blue" />
            <span className="text-xl lg:text-2xl border-b">Github</span>
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
      </ul>
      <small className="block mt-20 lg:text-lg text-darkWhite">
        Designed and developed by Jacob Kyalo &copy;{new Date().getFullYear()}
      </small>
    </footer>
  );
}
