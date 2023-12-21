import BlogCard from "@/components/blog-card";
import Container from "@/components/container";
import Footer from "@/components/footer";
import { BsSearch } from "react-icons/bs";

export default function Blog() {
  return (
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
          <form>
            <div className="flex items-center justify-between p-3 border-2 border-blue rounded-md w-full max-w-2xl">
              <input
                type="text"
                name="search"
                placeholder="Search blogs..."
                autoComplete="off"
                className="bg-transparent outline-none text-white text-lg w-full px-2"
              />
              <BsSearch size={20} className="text-white font-bold" />
            </div>
          </form>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 mb-40">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </section>
        <Footer />
      </Container>
    </main>
  );
}
