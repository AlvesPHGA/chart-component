import React from 'react';
import { Column } from './Column.style';

export const Index = ({ day, amount }: { day: string; amount: number }) => {
   return (
      <Column>
         <div className="item"></div>
         <span className="sub__legend mediumBrown">{day}</span>
      </Column>
   );
};
