import React from 'react';
import Register from './Register';
import { penawaranKami } from '../data/LocalData.json';
const Header = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-[80vh]  bg-cover bg-center">
        <div className="flex flex-column justify-center items-center text-center w-[50%] h-full">
          <h1 className="text-4xl text-orange-500 font-serif">Anak Jadi lebih rajin dan produktif dengan bimbingan belajar bersama kami di Lathy Private!</h1>
          <p className="text-2xl text-white font-serif">Les Private dengan metode belajar interaktif, tutor Profesional dan investasi belajar yang murah dan terpercaya.</p>
          <button className="flex justify-center items-center w-[200px] h-[50px] my-10 shadow-lg transition-all duration-100 rounded hover:border-2 bg-orange-500 ">
            <a className="text-white" hyref="#home">
              Mau liat dong
            </a>
          </button>
        </div>
        <div className="">
          <Register />
        </div>
      </div>
    </>
  );
};

export default Header;
