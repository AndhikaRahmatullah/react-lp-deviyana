import React from 'react';

const HomeQuestion = () => {
  const pathImages = ['/assets/question-pizza-1.jpg', '/assets/question-pizza-2.jpg', '/assets/question-pizza-3.jpg', '/assets/question-pizza-4.jpg'];

  return (
    <section className="flex flex-col gap-10 px-10 py-12 2xl:container lg:flex-row lg:px-20">
      <div className="mt-8 basis-1/2">
        <p className="font-palanquin-dark text-4xl md:text-6xl">The taste of Italy</p>

        <div className="join join-vertical mt-10 w-full">
          <div className="collapse join-item collapse-arrow border-b border-base-300">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-base font-bold text-[#808080]">Wood-fired ovens</div>
            <div className="collapse-content px-10 text-base text-[#111]">
              <ul className="list-disc">
                <li>Interdum velit euismod in pellentesque.</li>
                <li>Tristique et egestas quis ipsum suspendisse.</li>
                <li>Nibh nisl condimentum id venenatis.</li>
                <li>Diam volutpat commodo sed egestas egestas fringilla.</li>
              </ul>
            </div>
          </div>
          <div className="collapse join-item collapse-arrow border-b border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-base font-bold text-[#808080]">Flavors and aromas</div>
            <div className="collapse-content px-10 text-base text-[#111]">
              <ul className="list-disc">
                <li>Mattis nunc sed blandit libero volutpat.</li>
                <li>Tortor at risus viverra adipiscing at in tellus.</li>
                <li>Purus ut faucibus pulvinar elementum.</li>
                <li>Blandit turpis cursus in hac habitasse</li>
              </ul>
            </div>
          </div>
          <div className="collapse join-item collapse-arrow border-b border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-base font-bold text-[#808080]">Certificated Made in Italy</div>
            <div className="collapse-content px-10 text-base text-[#111]">
              <ul className="list-disc">
                <li>Interdum velit euismod in pellentesque.</li>
                <li>Tristique et egestas quis ipsum suspendissee.</li>
                <li>Nibh nisl condimentum id venenatis pellentesque.</li>
                <li>Diam volutpat commodo sed egestas egestas.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid basis-1/2 grid-cols-1 gap-5 md:grid-cols-2">
        {pathImages.map((image, i) => (
          <div key={i}>
            <img src={image} className="h-full w-full rounded-3xl object-cover object-center" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeQuestion;
