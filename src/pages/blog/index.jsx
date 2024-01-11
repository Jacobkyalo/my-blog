import Link from "next/link";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { useState } from "react";
import { allBlogs } from "contentlayer/generated";
import { BsSearch } from "react-icons/bs";
import BlogCard from "@/components/blog-card";
import Container from "@/components/container";
import Footer from "@/components/footer";

export default function Blog() {
  const [searchedBlogs, setSearchedBlogs] = useState([]);
  const [searchText, setSearchText] = useState("");

  const router = useRouter();

  const filterBlogs = () => {
    router.push(`/blog?search=${searchText}`);
    const filteredBlogs = allBlogs.filter((blog) => {
      return blog.title.toLowerCase().includes(searchText.toLowerCase());
    });
    setSearchedBlogs(filteredBlogs);
  };

  return (
    <>
      <NextSeo
        title="Blog - Jacob Kyalo"
        description="My blog"
        canonical="/blog"
        openGraph={{
          url: "/blog",
          title: "Blog - Jacob Kyalo",
          description: "My blog",
          images: [
            {
              url: "/logo.svg",
              width: 1280,
              height: 720,
              alt: "Jacob Kyalo",
            },
          ],
        }}
        twitter={{
          handle: "@jacobyalo_dev",
          site: "@jacobkyalo_dev",
          cardType: "summary_large_image",
        }}
      />
      <main>
        <Container>
          <section className="my-20">
            <h1 className="mb-4 font-bold text-4xl sm:text-6xl text-white">
              Latest blogs
            </h1>
            <p className="text-darkWhite text-lg mb-6 w-full max-w-lg">
              Find some of my latest blogs here and read them to learn something
              new today.
            </p>
            <form onKeyUp={filterBlogs}>
              <div className="flex items-center justify-between p-3 border-2 border-blue rounded-md w-full max-w-2xl">
                <input
                  type="text"
                  name="search"
                  placeholder="Search blogs..."
                  autoComplete="off"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="bg-transparent outline-none text-white text-lg w-full px-2"
                />
                <BsSearch size={20} className="text-white font-bold" />
              </div>
            </form>
          </section>
          {router.asPath === `/blog?search=${searchText}` ? (
            <>
              <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 mb-40">
                {searchedBlogs
                  ?.sort(
                    (a, b) =>
                      new Date(b.publishedAt).getTime() -
                      new Date(a.publishedAt).getTime()
                  )
                  .map((blog) => (
                    <Link href={`/blog/${blog.slug}`} key={blog._id}>
                      <BlogCard blog={blog} />
                    </Link>
                  ))}
              </section>
            </>
          ) : (
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 mb-40">
              {allBlogs
                ?.sort(
                  (a, b) =>
                    new Date(b.publishedAt).getTime() -
                    new Date(a.publishedAt).getTime()
                )
                .map((blog) => (
                  <Link href={`/blog/${blog.slug}`} key={blog._id}>
                    <BlogCard blog={blog} />
                  </Link>
                ))}
            </section>
          )}
          <Footer />
        </Container>
      </main>
    </>
  );
}
