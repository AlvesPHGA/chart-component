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

   return (
      <Graphic>
         {data.map((data) => (
            <Column key={data.day} {...data} />
         ))}
      </Graphic>
   );
};
