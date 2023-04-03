import React from 'react';
import { Column } from './Column.style';

export const Index = ({ day, amount }: { day: string; amount: number }) => {
   console.log(amount);
   return (
      <Column>
         <div className="legend">
            <span>{amount}%</span>
         </div>
         <div
            className="item"
            style={{
               height: `${(amount + 100) / 16}rem`,
            }}
         ></div>
         <span className="sub__legend mediumBrown">{day}</span>
      </Column>
   );
};
