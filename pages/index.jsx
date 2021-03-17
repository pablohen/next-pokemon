import React from 'react';
import Head from 'next/head';

import MainMenu from '../components/MainMenu';

const Home = () => (
  <div>
    <Head>
      <title>Home | Next-Pokémon</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <MainMenu />

    <div className="px-4">
      <p>Please use the main manu. I`ll put some notes here later...</p>
    </div>
  </div>
);

export default Home;
