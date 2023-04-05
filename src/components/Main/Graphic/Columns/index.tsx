import React from 'react';
import { Column } from './Column.style';

export const Index = ({ day, amount }: { day: string; amount: number }) => {
   const [active, setActive] = React.useState('');
   const [weekDay, setWeekDay] = React.useState('');

   React.useEffect(() => {
      const today = new Date();

      switch (today.getDay()) {
         case 0:
            setWeekDay('Sun');
            break;
         case 1:
            setWeekDay('Mon');
            break;
         case 2:
            setWeekDay('Tue');
            break;
         case 3:
            setWeekDay('Wed');
            break;
         case 4:
            setWeekDay('Thu');
            break;
         case 5:
            setWeekDay('Fri');
            break;

         default:
            setWeekDay('Sat');
            break;
      }

      setActive(weekDay);
   }, [active]);

   return (
      <Column className={` ${weekDay.toLowerCase() === day ? 'active' : ''}`}>
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
