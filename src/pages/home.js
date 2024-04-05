import React from 'react';
import HomeHero from 'src/sections/home-hero';
import HomeMenu from 'src/sections/home-menu';
import HomeOffers from 'src/sections/home-offers';
import HomeGallery from 'src/sections/home-gallery';
import HomeContact from 'src/sections/home-contact';
import HomeQuestion from 'src/sections/home-question';
import HomeGreeting from 'src/sections/home-greeting';

const HomePage = () => {
  return (
    <main>
      <HomeHero />
      <HomeGreeting />
      <HomeMenu />
      <HomeQuestion />
      <HomeOffers />
      <HomeGallery />
      <HomeContact />
    </main>
  );
};

export default HomePage;
