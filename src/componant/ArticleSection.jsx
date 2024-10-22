import { Search } from "lucide-react";

function ArticleSection() {
  return (
    <>
      <h2 className="text-lg font-bold">Lastest Article</h2>
      <div className="bg-[#EFEEEB] mb-5 h-20 flex items-center justify-between rounded-xl  ">
        <div className="flex gap-10 mx-10 ">
          <a href="#">Highlight</a>
          <a href="#">Cat</a>
          <a href="#">Inspiration</a>
          <a href="#">General</a>
        </div>
       
        <div className="mx-10 relative">
          <input type="text" placeholder="Search" className="h-9 w-64 rounded-md pl-4"/>
          <Search className="absolute top-2 right-3 text-slate-600" />
        </div>
        
      </div>
    </>
  );
}

export default ArticleSection;
