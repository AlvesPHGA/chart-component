import React from 'react';
import { Graphic } from './Graphic.style';

import { Index as Column } from './Columns/index';

export const Index = (data: []) => {
   console.log(data);
   return (
      <Graphic>
         {/* {data.map((data) => (
            <Column key={data.day} {...data} />
         ))} */}
      </Graphic>
   );
};
