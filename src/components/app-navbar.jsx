import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const AppNavbarLinks = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/projects", text: "Projects" },
  { href: "/blog", text: "Blog" },
];

export default function AppNavbar() {
  const router = useRouter();

  return (
    <header className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-6 sm:gap-0 py-8">
      <Link href="/" className="flex items-center gap-x-4">
        <Image
          src="/logo_path.svg"
          alt="app_logo_path"
          width={30}
          height={30}
        />
        <h2 className="font-bold text-black text-lg">Jacob</h2>
      </Link>
      <nav className="bg-white bg-opacity-0 rounded-full shadow-lg sm:shadow-none p-4 sm:p-0 border sm:border-none">
        <ul className="flex items-center gap-x-4">
          {AppNavbarLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${
                  router.pathname === link.href ? "bg-blue-600 text-white" : ""
                } px-2 py-1 rounded`}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
