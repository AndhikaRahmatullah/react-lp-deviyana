import React from 'react';

const HomeGreeting = () => {
  const summaryCards = [
    {
      pathImage: '/assets/sum-pizza.png',
      title: 'ABOUT US',
    },
    {
      pathImage: '/assets/sum-leaves.png',
      title: 'ORGANIC',
    },
    {
      pathImage: '/assets/sum-knife.png',
      title: 'PIZZA',
    },
    {
      pathImage: '/assets/sum-pasta.png',
      title: 'PASTA',
    },
  ];

  return (
    <section className="px-10 py-12 2xl:container lg:px-20">
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4">
        {summaryCards.map((sum, i) => (
          <div key={i} className="flex w-full flex-col items-center justify-center gap-5 rounded-3xl border-2 border-[#e73d0c] px-2 py-7 md:p-14">
            <img src={sum.pathImage} className="h-[70px] w-[70px]" />
            <p className="font-roboto-condensed text-2xl">{sum.title}</p>
          </div>
        ))}
      </div>

      <div className="mt-24 flex flex-col items-center lg:flex-row">
        <div className="h-full basis-1/2">
          <img src="/assets/greeting-pizza.jpg" className="h-full rounded-3xl" />
        </div>

        <div className="flex basis-1/2 flex-col items-center justify-center gap-5 py-7 md:px-12">
          <p className="font-palanquin-dark text-lg tracking-widest">WELCOME TO</p>
          <p className="font-palanquin-dark text-3xl font-medium md:text-5xl">Devi's Pizzeria</p>
          <p className="text-center text-lg leading-relaxed">
            We are specialized in authentic Neapolitan pizza, baked hot and fast in a brick oven to achieve a not-too-thick, not-to-thin chewy, smoky crust, made from a recipe that’s been handed down
            through five generations of pizzaioli (pizza makers).{' '}
          </p>

          <ul className="list-disc text-xl font-medium">
            <li>Tasty, fresh daily</li>
            <li>Best pizza in BOGOR</li>
          </ul>

          <a
            href="#menu"
            className="mt-2 rounded-full border-2 border-[#e73d0c] bg-transparent px-11 py-5 text-sm font-bold tracking-widest transition-all duration-300 hover:border-[#111] hover:bg-[#111] hover:text-white"
          >
            SEE OUR MENU
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeGreeting;
