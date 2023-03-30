import React from 'react';
import { Main } from './Main.style';

export const Index = () => {
   return (
      <Main className="padding-all">
         <h1>Spending - Last 7 days</h1>
         <div className="graphic">
            <div className="graphic__item">
               <div className="item"></div>
               <span className="sub__legend mediumBrown">mon</span>
            </div>
            <div className="graphic__item">
               <div className="item item--active">{}</div>
               <span className="sub__legend mediumBrown">tue</span>
            </div>
            <div className="graphic__item">
               <div className="item"></div>
               <span className="sub__legend mediumBrown">wed</span>
            </div>
            <div className="graphic__item">
               <div className="item"></div>
               <span className="sub__legend mediumBrown">thu</span>
            </div>
            <div className="graphic__item">
               <div className="item"></div>
               <span className="sub__legend mediumBrown">fri</span>
            </div>
            <div className="graphic__item">
               <div className="item"></div>
               <span className="sub__legend mediumBrown">sat</span>
            </div>
            <div className="graphic__item">
               <div className="item"></div>
               <span className="sub__legend mediumBrown">sun</span>
            </div>
         </div>

         <div className="border"></div>

         <div className="infos">
            <div className="total">
               <span className="sub__legend mediumBrown">Total this month</span>
               <h2>$478.33</h2>
            </div>
            <div className="percents">
               <span className="sub__legend">+2.4%</span>
               <span className="sub__legend mediumBrown">from last month</span>
            </div>
         </div>
      </Main>
   );
};

export default Index;
