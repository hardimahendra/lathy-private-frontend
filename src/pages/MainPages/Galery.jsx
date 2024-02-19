import React from 'react';
import documentasi from '../../data/LocalData.json';

const Galery = () => {
  const dataDocumentasi = documentasi.documentasiKegiatan;
  return (
    <>
      <div className="flex pt-16 text-white ">
        <div className="flex flex-wrap justify-center">
          {dataDocumentasi.map((data) => (
            <div className="flex flex-column justify-center items-center text-center m-2 border-b-2 border-orange-500 gap-12" key={data.id}>
              <img src={data.image} className="object-cover pt-2 w-[400px] h-[350px] transition-all duration-200 cursor-pointer hover:[cursor:zoom-in] hover:[transform:scale(1.1)] shadow-lg" />
              <p className="text-md ">{data.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Galery;
