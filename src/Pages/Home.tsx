import React from 'react';

import { Index as Header } from '../components/global/Header/index';
import { Index as Footer } from '../components/global/Footer/index';

import { Index as Main } from '../components/Main/index';
import { Container } from '../assets/styles/ClassUtils.style';
import { Head } from '../components/global/Head/Head';

const Home = () => {
   return (
      <Container>
         <Head
            title="Personal Balance"
            description="Personal Balance on week"
         />
         <div className="card">
            <Header />
            <Main />
            <Footer />
         </div>
      </Container>
   );
};

export default Home;
