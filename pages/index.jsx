import React from 'react';
import Head from 'next/head';

import MainMenu from '../components/MainMenu';

const Home = () => (
  <div>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <MainMenu />
  </div>
);

export default Home;
