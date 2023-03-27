import React from 'react';

import { Index as Header } from '../components/global/Header/index';
import { Index as Footer } from '../components/global/Footer/index';

import { Index as Main } from '../components/Main/index';

const Home = () => {
   return (
      <>
         <Header />
         <Main />
         <Footer />
      </>
   );
};

export default Home;
