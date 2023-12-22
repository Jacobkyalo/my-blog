import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";

export default function BlogCard({ blog }) {
  const pathname = usePathname();

  return (
    <div
      className={`bg-blue ${
        pathname === "/" ? "mb-10" : "mb-0"
      } bg-opacity-20 p-6 rounded-xl`}
    >
      <span className="mb-6 block text-blue text-base">
        {new Date(blog.publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </span>
      <h2 className="text-3xl font-bold text-white mb-4 hover:text-blue transition-all duration-150">
        {blog.title}
      </h2>
      <p className="text-darkWhite text-base mb-6">{blog.description}</p>
      <div className="flex items-center gap-x-4 text-white mb-6">
        <Image src={logo} alt="logo" />
        <span className="text-base text-darkWhite">Jacob Kyalo</span>
      </div>
      <span className="text-blue text-lg font-bold">Read more &rarr;</span>
    </div>
  );
}
