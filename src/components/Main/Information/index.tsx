import React from 'react';
import { Info, Information } from './Information.style';
import { Graphic } from '../Graphic/Graphic.style';

import { Index as Column } from '../Graphic/Columns';
import { data } from '../../../assets/data/data';

// interface IterfaceData {
//    day: string;
//    amount: number;
// }

export const Index = () => {
   // const [data, setData] = React.useState<IterfaceData[]>([]);

   // React.useEffect(() => {
   //    function getData() {
   //       fetch('../../../data.json')
   //          .then((res) => res.json())
   //          .then((dt) => setData(dt));
   //    }

   //    getData();
   // }, []);

   const sumAmount = data
      .map(({ amount }) => amount)
      .reduce((a, b) => b + a, 0);

   return (
      <Information>
         <Graphic>
            {data.map((dt) => (
               <Column key={dt.day} {...dt} />
            ))}
         </Graphic>
         <div className="border"></div>
         <Info>
            <div className="total">
               <span className="sub__legend mediumBrown">Total this month</span>
               <h2>${sumAmount}</h2>
            </div>
            <div className="percents">
               <span className="sub__legend">+2.4%</span>
               <span className="sub__legend mediumBrown">from last month</span>
            </div>
         </Info>
      </Information>
   );
};
