import React from 'react';
import Daftar from './Daftar';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <div className="flex lg:justify-around justify-center items-center w-full h-svh  bg-cover bg-center">
        <div className="relative flex flex-column justify-center lg:w-[50%] w-[90%] h-full ">
          <h1 className="text-xl sm:text-4xl text-orange-500 font-serif indent-12">Anak Jadi lebih rajin dan produktif dengan bimbingan belajar bersama kami di Lathy Private!</h1>
          <p className="text-md sm:text-2xl text-gray-400 font-serif">Les Private dengan metode belajar interaktif, tutor Profesional dan investasi belajar yang murah dan terpercaya.</p>
          <div className="text-white">
              <Link className="absolute right-0 bottom-[20%] flex justify-center items-center md:w-[200px] md:h-[50px] p-2 shadow-lg transition-all duration-100 rounded bg-orange-600 hover:bg-transparent hover:border-2 hover:border-orange-500 hover:text-orange-500" to="/program">Mau liat dong</Link>
          </div>
        </div>
        <div className="lg:flex hidden">
          <Daftar />
        </div>
      </div>
    </>
  );
};

export default Header;
