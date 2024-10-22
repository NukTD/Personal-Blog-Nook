import { Search } from "lucide-react";
import BlogCard from "./BlogCard";
import { blogPosts } from "@/data/blogPosts";


export function ArticleSection() {
  console.log(blogPosts);
  

  return (
    <>
      <h2 className="text-3xl font-bold text-left mb-10">Lastest Article</h2>
      <div className=" sm:bg-[#EFEEEB] mb-16 h-20 flex items-center justify-between rounded-xl  ">
        <div className="sm:flex gap-14 mx-10 ">
          <button className="hover:bg-[#DAD6D1] py-4 px-4 rounded-lg transition duration-500">
            Highlight
          </button>
          <button className="hover:bg-[#DAD6D1] py-4 px-4 rounded-lg transition duration-500">
            Cat
          </button>
          <button className="hover:bg-[#DAD6D1] py-4 px-4 rounded-lg transition duration-500">
            Inspiration
          </button>
          <button className="hover:bg-[#DAD6D1] py-4 px-4 rounded-lg transition duration-500">
            General
          </button>
        </div>

        <div className="mx-10 relative">
          <input
            type="text"
            placeholder="Search"
            className="h-9 w-96 rounded-md pl-4"
          />
          <Search className="absolute top-2 right-3 text-slate-600" />
        </div>
      </div>

      <div className="blog-list grid grid-cols-2 gap-5">
        {blogPosts.map((post) => (
          <BlogCard
            key={post.id}
            image={post.image}
            category={post.category}
            title={post.title}
            description={post.description}
            author={post.author}
            date={post.date}
          />
        ))}
      </div>
    </>
  );
}


