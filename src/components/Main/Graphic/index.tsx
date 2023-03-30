import React from 'react';
import { Graphic } from './Graphic.style';

export const Index = () => {
   return (
      <Graphic>
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
      </Graphic>
   );
};
