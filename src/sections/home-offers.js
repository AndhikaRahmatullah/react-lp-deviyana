import React from 'react';

const HomeOffers = () => {
  const pizzaOffers = [
    {
      title: 'BOGORIAN',
      desc: 'Classic Bogor style thin crust',
      price: {
        small: 0,
        medium: 190,
        large: 210,
      },
    },
    {
      title: 'Deep Dish Pan',
      desc: 'Thick crust pan pizza',
      price: {
        small: 0,
        medium: 210,
        large: 230,
      },
    },
    {
      title: 'Sicilian',
      desc: 'Square deep dish with our housemade onion tomato sauce',
      price: {
        small: 260,
        medium: 0,
        large: 0,
      },
    },
  ];

  const specialtyPizzaOffers = [
    {
      title: 'BOGORIAN SPECIAL',
      desc: 'Pepperoni, sausage, bell pepper, onion and mushroom',
      price: {
        small: 0,
        medium: 270,
        large: 300,
      },
    },
    {
      title: 'Vegetarian',
      desc: 'Mushroom, bell pepper, onion, tomato and artichoke',
      price: {
        small: 0,
        medium: 240,
        large: 270,
      },
    },
    {
      title: 'Papperoni',
      desc: 'Pepperoni, sausage, meatball, ham and bacon',
      price: {
        small: 0,
        medium: 290,
        large: 320,
      },
    },
  ];

  return (
    <section style={{ backgroundImage: 'url("/assets/offers-bg.jpg")' }} className="bg-cover bg-right bg-no-repeat px-10 py-12 lg:px-20">
      <div className="flex flex-col justify-between gap-7 2xl:container lg:flex-row">
        <div className="basis-1/2 rounded-3xl bg-black bg-opacity-70 p-7">
          <p className="font-palanquin-dark text-3xl text-white md:text-5xl">Pizza</p>

          <div className="mt-8 flex flex-col gap-8">
            {pizzaOffers.map((offer, i) => (
              <div key={i}>
                <p className="font-palanquin-dark text-2xl text-white">{offer.title}</p>

                <div className="mt-5">
                  <p className="text-lg italic text-white">{offer.desc}</p>

                  {!!offer.price.small && (
                    <p className="text-lg italic text-white">
                      <span className="font-bold">{offer.price.small}K</span>
                    </p>
                  )}

                  {!!offer.price.medium && (
                    <p className="text-lg italic text-white">
                      Medium 14" <span className="font-bold">{offer.price.medium}K</span>
                    </p>
                  )}

                  {!!offer.price.large && (
                    <p className="text-lg italic text-white">
                      Large 16" <span className="font-bold">{offer.price.large}K</span>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="basis-1/2 rounded-3xl bg-black bg-opacity-70 p-7">
          <p className="font-palanquin-dark text-3xl text-white md:text-5xl">Specialty Piz​​​za</p>

          <div className="mt-8 flex flex-col gap-8">
            {specialtyPizzaOffers.map((offer, i) => (
              <div key={i}>
                <p className="font-palanquin-dark text-2xl text-white">{offer.title}</p>

                <div className="mt-5">
                  <p className="text-lg italic text-white">{offer.desc}</p>

                  {!!offer.price.small && (
                    <p className="text-lg italic text-white">
                      <span className="font-bold">{offer.price.small}K</span>
                    </p>
                  )}

                  {!!offer.price.medium && (
                    <p className="text-lg italic text-white">
                      Medium 14" <span className="font-bold">{offer.price.medium}K</span>
                    </p>
                  )}

                  {!!offer.price.large && (
                    <p className="text-lg italic text-white">
                      Large 16" <span className="font-bold">{offer.price.large}K</span>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeOffers;
