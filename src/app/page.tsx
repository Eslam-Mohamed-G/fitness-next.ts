export default function Home() {
  return (
    <div className="min-h-screen px-4 gap-16 lg:ps-20 font-[family-name:var(--font-geist-sans)]">
      <div className='flex flex-row h-[80vh] items-center pt-0 md:items-start md:pt-10 overflow-hidden'>
        <div className='relative pt-0 md:pt-12 lg:ps-16'>
          <p className="text-[red] text-[24px] font-bold mb-4 capitalize">fitness club</p>
          <p className="text-black text-[44px] font-bold max-w-72">Sweat, Smile And Repeat</p>
          <p className="z-50">Check out the most effective exercises personalized to you</p>
          <button className="bg-[red] text-white capitalize rounded py-2 px-4 mt-4 cursor-pointer hover:bg-[#d00000] transition-all duration-300">
            Explore exercises
          </button>
          <p className="uppercase text-rose-100 font-bold text-[200px] absolute -left-[3%] -bottom-[100%] hidden md:inline-block">exercises</p>
        </div>

        <div className="uppercase text-rose-100 font-bold text-6xl text-center absolute top-24 left-[80%] md:hidden z-0">
          {"exercises".split("").map((letter, index) => (
            <p key={index}>
              {letter}
            </p>
          ))}
        </div>

        <div className='w-[38%] absolute top-0 right-5 lg:right-10 hidden md:block'>
          <img src="/images/banner.png" alt="banner" className='w-full h-[65vh] lg:h-[90vh] -z-10' />
        </div>
      </div>
    </div>
  );
}