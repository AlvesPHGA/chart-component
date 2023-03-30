import React from 'react';
import { Info } from './Info.style';

export const Index = () => {
   return (
      <Info>
         <div className="total">
            <span className="sub__legend mediumBrown">Total this month</span>
            <h2>$478.33</h2>
         </div>
         <div className="percents">
            <span className="sub__legend">+2.4%</span>
            <span className="sub__legend mediumBrown">from last month</span>
         </div>
      </Info>
   );
};

export default Index;
