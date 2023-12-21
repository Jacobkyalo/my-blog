import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";

export default function BlogCard() {
  return (
    <div className="bg-blue bg-opacity-20 p-6 rounded-xl">
      <span className="mb-6 block text-blue text-base">
        {new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
        {"  "}. 4 min read
      </span>
      <h2 className="text-3xl font-bold text-white mb-4 hover:text-blue transition-all duration-150">
        Writing better and clean TailwindCSS code in 2023
      </h2>
      <p className="text-darkWhite text-base mb-6">
        How can we write better and cleaner TailwindCSS code that is scalable
        and and free from errors
      </p>
      <div className="flex items-center gap-x-4 text-white mb-6">
        <Image src={logo} alt="logo" />
        <span className="text-base text-darkWhite">Jacob Kyalo</span>
      </div>
      <Link href="/blog/writing-better-and-clean-tailwindcss-code">
        <span className="text-blue text-lg font-bold">Read more &rarr;</span>
      </Link>
    </div>
  );
}
