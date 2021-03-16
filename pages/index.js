import Head from 'next/head';

import MainMenu from '../components/MainMenu';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainMenu />
    </div>
  );
};

export default Home;
