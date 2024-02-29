import React from 'react';
import { Link } from 'react-router-dom';

const index = () => {
  return (
    <div className=" flex flex-column justify-center items-center p-2 text-white text-center">
      <p className="text-[12px]">CopyRight Reserved @2024. Lathy Private | Tempat Les Terdekat dan Murah</p>
      <p className="text-[12px]">
        Education Zone | Develop By{' '}
        <Link className="text-decoration-underline" to="https://instagram.com/hardimahendra_" target="_blank">
          Hardi Mahendra.
        </Link>
      </p>
    </div>
  );
};

export default index;