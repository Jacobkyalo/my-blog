import Link from "next/link";
import { getYear } from "@/lib/utils";

export default function AppFooter() {
  return (
    <footer className="my-16">
      <small className="text-base">
        &copy; {getYear()} -{" "}
        <Link
          href="https://x.com/jacobkyalo_dev"
          target="_blank"
          className="text-blue-600"
        >
          @ Jacob Kyalo
        </Link>
      </small>
    </footer>
  );
}
