import React from 'react';
import { Main } from './Main.style';

import { Index as Info } from './Infos/index';
import { Index as Graphic } from './Graphic/index';

export const Index = () => {
   return (
      <Main className="padding-all">
         <h1>Spending - Last 7 days</h1>
         <Graphic />
         <div className="border"></div>
         <Info />
      </Main>
   );
};

export default Index;
