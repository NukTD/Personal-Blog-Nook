function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center my-1 container w-full max-w-full mx-auto ">
        <div>
          <span className="flex text-lg font-bold ">Thanate D.</span>
        </div>
        <div className="pb-3">
          <button className="border border-black rounded-3xl w-36 h-12 p-1 text-base text-[#26231E] text-center mr-2">
            Login
          </button>
          <button className="rounded-3xl w-36 h-12 p-1 text-base text-white bg-black  text-center">
            Sign up
          </button>
        </div>
      </nav>
      <hr></hr>
    </>
  );
}

export default Navbar
