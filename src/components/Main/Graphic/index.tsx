import React from 'react';
import { Graphic } from './Graphic.style';

import { Index as Column } from './Columns/index';

interface IterfaceData {
   day: string;
   amount: number;
}

export const Index = () => {
   const [data, setData] = React.useState<IterfaceData[]>([]);

   React.useEffect(() => {
      function getData() {
         fetch('../../../data.json')
            .then((res) => res.json())
            .then((dt) => setData(dt));
      }

      getData();
   }, []);

   console.log(data);

   return (
      <Graphic>
         {data.map((data) => (
            <Column key={data.day} {...data} />
         ))}
         {/* <div className="graphic__item">
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
         </div> */}
      </Graphic>
   );
};
