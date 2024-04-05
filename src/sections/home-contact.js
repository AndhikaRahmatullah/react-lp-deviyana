import React from 'react';

const HomeContact = () => {
  return (
    <section
      style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/assets/contact-bg.jpg")' }}
      className="bg-cover bg-center bg-no-repeat px-10 py-20 lg:px-48 lg:py-40"
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-3xl bg-white p-5">
          <p className="text-center font-palanquin-dark text-2xl font-bold">F​IND US</p>
          <p className="mt-3 text-center text-lg">Ciampea, Bogor, Jawa Barat, Indonesa. 16620</p>
        </div>

        <div className="rounded-3xl bg-white p-5">
          <p className="text-center font-palanquin-dark text-2xl font-bold">HOURS</p>
          <p className="mt-3 text-center text-lg font-bold">Monday – Saturday</p>
          <p className="text-center text-lg">9am – 7pm</p>
          <p className="text-center text-lg font-bold">Sunday</p>
          <p className="text-center text-lg">10am – 6pm</p>
        </div>

        <div className="rounded-3xl bg-white p-5">
          <p className="text-center font-palanquin-dark text-2xl font-bold">CALL US</p>
          <p className="mt-3 text-center text-lg font-bold text-[#e73d0c] underline">085882245234</p>
          <p className="mt-3 text-center text-lg font-bold text-[#e73d0c] underline">088290338993</p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center">
        <p className="text-lg font-medium tracking-wider text-white">Devi Yana Armanto</p>
      </div>
    </section>
  );
};

export default HomeContact;
