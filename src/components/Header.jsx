import React from 'react';

const Header = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-[80vh] bg-[url('/img/header.jpg')] bg-cover bg-center">
        <div className="flex flex-column justify-center items-center text-center w-full h-full">
          <h1 className="text-4xl text-orange-500 font-serif">Anak Jadi Suka Dan Jago Matematika Dalam Sekejap. Cuma Di Les Matematika Online Bimbel XYZ !</h1>
          <p className="text-2xl text-white font-serif">Les Matematika Online dengan metode belajar interaktif, tutor Profesional dan investasi belajar yang terjangkau.</p>
          <button className="flex justify-center items-center w-[200px] h-[50px] my-10 shadow-lg transition-all duration-100 hover:border-2 bg-orange-500 ">
            <a className='text-white' hyref="#home">Mau liat dong</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
