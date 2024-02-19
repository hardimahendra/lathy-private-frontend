import React from 'react';
import { Link } from 'react-router-dom';

const index = () => {
  return (
    <div className=" flex flex-column justify-center items-center pt-4 text-white">
      <div className="flex  flex-column justify-center items-center text-center">
        <h6 className="font-bold pb-1">Lokasi Kantor</h6>
        <p className="text-[12px]">Jl. Raya Saketi - Malingping, Pasar Baru RT/RW 001/003, Kerta, Kec. Banjarsari, Kabupaten Lebak, Banten 42355</p>
      </div>
      <hr />
      <div className="flex flex-column justify-center items-center text-center">
        <p className="text-[12px]">CopyRight Reserved @2024. Lathy Private | Tempat Les Terdekat dan Murah</p>
        <p className="text-[12px]">
          Education Zone | Develop By{' '}
          <Link className="text-decoration-underline" to="https://instagram.com/hardimahendra_" target="_blank">
            Hardi Mahendra.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default index;