import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { AtSign } from "lucide-react";





export function Footer() {
  return (
    <>
      <footer className="flex justify-between items-center bg-[#EFEEEB] h-28">
        <div className="flex justify-center items-center mx-10">
          <div className="mr-3">Get in touch</div>
          <div className=" border bg-stone-900 w-5 h-5 rounded-full flex items-center justify-center mr-2">
            <Linkedin className="text-white w-3 h-3 " />
          </div>
          <div className=" border bg-stone-900 w-5 h-5 rounded-full flex items-center justify-center mr-2">
            <Github className="text-white w-3 h-3 " />
          </div>
          <div className=" border bg-stone-900 w-5 h-5 rounded-full flex items-center justify-center mr-2">
            <AtSign className="text-white w-3 h-3   " />
          </div>
        </div>

        <div className="mx-10">
          <a href="#" className="hover:underline">
            Home page
          </a>
          
        </div>
      </footer>
    </>
  );
}