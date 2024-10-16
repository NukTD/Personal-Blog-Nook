import React from 'react'
import manImg from '../img/man-cat.jpg'

function HeroSection() {
  return (
    <>
      <main className="grid grid-cols-3 gap-4 items-center ">
        <div>
          <p className="text-right text-3xl font-bold ">
            Stay <br />
            Informed, <br />
            Stay Inspired <br />
          </p>
          <p className="text-right text-base mt-5 text-stone-600">
            Discover a World of Knowledge at Your <br />
            Fingertips. Your Daily Dose of Inspiration <br />
            and information.
          </p>
        </div>

        <div className="w-60 h-[20rem] overflow-hidden flex justify-self-center my-9">
          <img
            src={manImg}
            alt="Man and Cat"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className='text-left'>
          <h2>-Author</h2>
          <h3>Thompson P.</h3>
          <p>
            I am a pet enthusiast and freelance writer who specializes in animal
            behavior and care. With a deep love for cats, I enjoy sharing
            insights on feline companionship and wellness.
          </p>
          <p className="text-gray-500">
            When I'm not writing, I spend time volunteering at my local animal
            shelter, helping cats find loving homes.
          </p>
        </div>
      </main>
    </>
  );
}

export default HeroSection