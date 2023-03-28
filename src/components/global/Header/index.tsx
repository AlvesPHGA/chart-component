import React from 'react';
import { Header } from './Header';

export const Index = () => {
   return (
      <Header>
         <div className="content">
            <span className="sub__legend">My balance</span>
            <p>$921.48</p>
         </div>
         <div className="logo">
            <div className="circle">
               <div className="circle-02"></div>
            </div>
         </div>
      </Header>
   );
};

export default Index;
