import Link from "next/link";
import Head from "next/head";
import AppNavbar from "@/components/app-navbar";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 Not Found | Jacob</title>
        <meta name="description" content="Not Found page (404)" />
        <meta name="author" content="Jacob Kyalo" />
      </Head>
      <AppNavbar />
      <main className="flex text-center items-center justify-center">
        <section className="my-28 sm:my-32">
          <p className="text-slate-600 mb-6">
            Seems like you lost your way. This page was not found
          </p>
          <Link
            href="/"
            className="bg-blue-600 text-white rounded-lg px-6 py-3"
          >
            Take me home
          </Link>
        </section>
      </main>
    </>
  );
}
