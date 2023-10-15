import Link from "next/link";
import Image from "next/image";
import { ClipboardDocumentIcon, CubeIcon } from "@heroicons/react/24/solid";
import Container from "./container";
import Logo from "../assets/images/logo.svg";

export default function Navbar() {
  return (
    <>
      <Container>
        <header className="flex justify-between items-center py-6">
          <Link href="/">
            <Image
              src={Logo}
              priority
              alt="my_logo_image"
              className="border-2 border-blue rounded-full"
            />
          </Link>
          <nav>
            <ul className="flex items-center  gap-x-6 sm:gap-x-12">
              <li>
                <Link
                  href="/projects"
                  className="flex items-center gap-x-2 text-xs sm:text-sm"
                >
                  <CubeIcon className="h-3 sm:h-4 w-3 sm:w-4 text-blue" />
                  <span className="text-darkWhite transition-all duration-200 ease-in-out hover:text-blue">
                    Projects
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="flex items-center gap-x-2 text-xs sm:text-sm"
                >
                  <ClipboardDocumentIcon className="h-3 sm:h-4 w-3 sm:w-4 text-blue" />
                  <span className="text-darkWhite transition-all duration-200 ease-in-out hover:text-blue">
                    Blog
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </Container>
    </>
  );
}
