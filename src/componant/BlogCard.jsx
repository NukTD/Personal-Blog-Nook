
import manImg from "../img/man-cat.jpg";

function BlogCard({image,category,title,description,author,date}) {
  return (
    <div className="blog-card">
      <img src={image} className="w-full h-2/5 rounded-xl object-cover" />
      <div className="flex flex-col text-left">
        <span className="bg-[#D7F2E9] text-base font-bold text-[#12B279] px-3 py-2 rounded-3xl  ">
          {category}
        </span>
        <a href="#"><h2 className="font-bold text-xl text-[#26231E] my-2 hover:underline">{title}</h2></a>
        <p className="text-base text-[#75716B] mb-2">{description}</p>
      </div>
      <div className="text-left flex items-center">
        <img src={manImg} className="w-8 h-8 rounded-full mr-3" />
        <span className="mr-3 text-[#43403B]"> {author}</span>
        <span className="mr-3 text-[#DAD6D1]">|</span>
        <span className="text-[#75716B]">{date}</span>
      </div>
    </div>
  );
}

export default BlogCard