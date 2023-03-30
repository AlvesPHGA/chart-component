import React from 'react';
import { Main } from './Main.style';

import { Index as Info } from './Infos/index';

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

         <Info />
      </Main>
   );
};

export default Index;
