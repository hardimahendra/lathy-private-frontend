import React from 'react';
import guru from '../../data/LocalData.json';

const DaftarGuru = () => {
  const dataGuru = guru.daftarGuru;
  return (
    <>
      <div className="flex text-white pt-16 justify-center items-center">
        <div className="flex flex-wrap items-center justify-center">
          {dataGuru.map((data) => (
            <div className="flex flex-column justify-center items-center text-center flex-wrap h-[350px] w-[250px] border-b-2 border-orange-500 m-2" key={data.id}>
              <div className="text-md py-2">{data.name}</div>
              <img src={data.image} alt="guru" className="object-cover rounded-circle h-[150px] w-[150px] mx-2 transition-all duration-200 hover:[cursor:zoom-in] hover:[transform:scale(1.1)] shadow-lg" />
              <div className="py-4 text-md">{data.field}</div>
              <div className="py-4 text-md">{data.education}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DaftarGuru;
