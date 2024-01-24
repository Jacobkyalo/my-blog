// import { NextSeo } from "next-seo";
import Head from "next/head";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allBlogs } from "contentlayer/generated";
import Container from "@/components/container";
import Hr from "@/components/hr";
import { components } from "@/components/mdx-components";
import logo from "@/assets/images/logo.svg";
import Footer from "@/components/footer";

export default function BlogPost({ blog }) {
  const MDXContent = useMDXComponent(blog.body.code);

  return (
    <>
      <Head>
        <title>{`${blog.title}`}</title>
        <meta name="description" content={`${blog.description}`} />
        <meta name="author" content="Jacob Kyalo" />
      </Head>
      <main className="w-full md:container md:max-w-4xl">
        <Container>
          <section className="my-20 ">
            <h1 className="mb-10 font-bold text-4xl sm:text-6xl text-white w-full max-w-6xl">
              {blog.title}
            </h1>
            <span className="mb-6 block text-blue text-base">
              Published on{" "}
              {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <div className="flex items-center gap-x-4 text-white mb-10">
              <Image src={logo} alt="logo" />
              <span className="text-lg text-white">Jacob Kyalo</span>
            </div>
          </section>
          <section className="prose text-darkWhite">
            <MDXContent components={components} />
          </section>
        </Container>
      </main>
      <Container>
        <Footer />
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((blog) => ({ params: { slug: blog.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blog = allBlogs.find((blog) => blog.slug === params.slug);

  if (!blog)
    return {
      notFound: true,
    };

  return { props: { blog } };
}
