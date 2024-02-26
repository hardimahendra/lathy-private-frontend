import React from 'react';
import { swipperData } from '../data/LocalData.json';

const SwipperContent = ({ id }) => {
  const dataSwipper = swipperData;
  const item = dataSwipper.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <>
      <div className="bg-green-500 lg:w-[50%] p-4">
        <div key={item.id} hidden={index != item.id}>
          <h1>{item.name}</h1>
          <p>{item.desc}</p>
        </div>
      </div>
    </>
  );
};

export default SwipperContent;
