import React from 'react';
import { Main } from './Main.style';

import { Index as Iformation } from './Information/index';

export const Index = () => {
   return (
      <Main className="padding-all">
         <h1>Spending - Last 7 days</h1>
         <Iformation />
      </Main>
   );
};

export default Index;
