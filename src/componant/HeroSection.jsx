
import manImg from '../img/man-cat.jpg'

function HeroSection() {
  return (
    <>
      <main className="grid grid-cols-3 gap-4 items-center pb-16">
        <div>
          <p className="text-right text-6xl font-bold text-[#26231E] pb-5 leading-[65px] ">
            Stay <br />
            Informed, <br />
            Stay Inspired <br />
          </p>
          <p className="text-right text-base mt-5 text-[#75716B]">
            Discover a World of Knowledge at Your <br />
            Fingertips. Your Daily Dose of Inspiration <br />
            and information.
          </p>
        </div>

        {/* Mid Img */}
        <div className="w-96 h-[33rem] overflow-hidden flex justify-self-center my-9">
          <img
            src={manImg}
            alt="Man and Cat"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="text-left">
          <h2 className="text-xs text-[#75716B]">-Author</h2>
          <h3 className="text-2xl text-[#43403B]">Thompson P.</h3>
          <p className="text-base text-[#75716B]">
            I am a pet enthusiast and freelance writer who specializes in animal
            behavior and care. With a deep love for cats, I enjoy sharing
            insights on feline companionship and wellness.
          </p>
          <p className="text-base text-[#75716B]">
            When I'm not writing, I spend time volunteering at my local animal
            shelter, helping cats find loving homes.
          </p>
        </div>
      </main>
    </>
  );
}

export default HeroSection