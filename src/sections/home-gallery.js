import React from 'react';

const HomeGallery = () => {
  const pathImages = ['/assets/gallery-pizza-1.jpg', '/assets/gallery-pizza-2.jpg', '/assets/gallery-pizza-3.jpg', '/assets/gallery-pizza-4.jpg'];

  return (
    <section className="px-10 py-12 2xl:container lg:px-20">
      <div className="flex flex-col items-center justify-center gap-5">
        <p className="font-montserrat max-w-2xl text-center text-4xl font-bold leading-none md:text-[65px]">Satisfy Your Pizza Cravings Today!</p>
        <p className="max-w-3xl text-center text-xl">Stop by and find out what all the buzz is about. Order your favorites today or visit our restaurant to create your ideal pizza!</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-0 lg:grid-cols-4">
        {pathImages.map((image, i) => (
          <div key={i}>
            <img src={image} className="h-full w-full" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeGallery;
