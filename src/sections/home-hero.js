import React from 'react';

const HomeHero = () => {
  return (
    <section
      style={{ backgroundImage: 'url("/assets/bg-hero.jpg")' }}
      className="flex min-h-screen flex-col items-start gap-14 pt-7 md:gap-20 md:pt-20 lg:h-screen lg:flex-row lg:items-center lg:justify-between lg:pt-0"
    >
      <div className="px-10 lg:max-w-md lg:pl-20 lg:pr-0">
        <p className="font-palanquin-dark text-5xl text-white md:text-6xl lg:text-5xl">Life is a combination of magic and pizza</p>
        <p className="mt-5 font-palanquin-dark text-lg tracking-widest text-white">– DEVI YANA ARMANTO</p>

        <div className="mt-14">
          <a href="#menu" className="rounded-full border-2 border-[#e73d0c] bg-transparent px-11 py-5 text-sm font-bold tracking-widest text-white transition-all duration-300 hover:bg-[#e73d0c]">
            VIEW MENU
          </a>
        </div>
      </div>

      <div className="h-full px-10 lg:px-0">
        <img src="/assets/hero.jpg" className="h-full" />
      </div>
    </section>
  );
};

export default HomeHero;
