function Navbar() {
  return (
    <>
      <hr></hr>
      <nav className='flex justify-between my-1'>
        <div>
          <span className='pl-10'>Thanate D.</span>
        </div>
        <div>
          <button className="border border-black rounded-2xl w-24 p-1 text-sm text-center mr-1">
            Login
          </button>
          <button className="rounded-2xl w-24 p-1 text-white bg-black text-sm text-center">
            Sign up
          </button>
        </div>
      </nav>
      <hr></hr>
    </>
  );
}

export default Navbar
