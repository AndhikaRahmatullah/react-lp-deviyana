import React from 'react';

const HomeMenu = () => {
  const menuList = [
    {
      pathImage: '/assets/menu-pizza-1.jpg',
      title: 'Cheese Pizza',
      desc: 'Get our Manhattan Classic Cheese Pizza with your choice of sauce and crust.',
    },
    {
      pathImage: '/assets/menu-pizza-2.jpg',
      title: 'Pepperoni Pizza',
      desc: 'Get our classic Pepperoni pizza with your choice of sauce and crust.',
    },
    {
      pathImage: '/assets/menu-pizza-3.jpg',
      title: 'Vegetarian Pizza',
      desc: 'Tomato Sauce, Mozzarella, Green Pepper, Onions, Fresh Mushrooms, Tomatoes, and Black Olives.',
    },
    {
      pathImage: '/assets/menu-pizza-4.jpg',
      title: 'Rustica Pizza',
      desc: 'Tomato sauce, mozzarella, sausage, crispy bacon, roasted red peppers, and black olives.',
    },
    {
      pathImage: '/assets/menu-pizza-5.jpg',
      title: 'Delicious Pizza',
      desc: 'A mix of Porcini Mushrooms and Decadent Truffle Paste, Mozzarella, Fresh Mushrooms, Caramelized Onions.',
    },
    {
      pathImage: '/assets/menu-pizza-6.jpg',
      title: 'Tomato Pizza',
      desc: 'The Classic Marinara Sauce, Roma Tomatoes, Fresh Mozzarella, Fresh Basil, and an Extra Virgin Olive Oil drizzle.',
    },
  ];

  return (
    <section id="menu" className="bg-[#1a1a1a] px-10 py-12 2xl:container lg:px-20">
      <div>
        <p className="text-center font-palanquin-dark text-4xl text-white md:text-[65px]">Italy Pizza Menu</p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {menuList.map((menu, i) => (
          <div key={i} className="flex w-fit flex-col gap-5 rounded-3xl bg-white p-[30px]">
            <div>
              <img src={menu.pathImage} className="h-full w-full rounded-3xl" />
            </div>

            <div className="flex flex-col gap-5">
              <p className="font-palanquin-dark text-2xl">{menu.title}</p>
              <p className="text-lg italic leading-relaxed">{menu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeMenu;
