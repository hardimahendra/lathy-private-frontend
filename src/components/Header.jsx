import React from 'react';
import { FaCircleCheck } from 'react-icons/fa6';
import { penawaranKami } from '../data/LocalData.json';
const Header = () => {
  const icons = penawaranKami;
  return (
    <>
      <div className="flex justify-center items-center w-full h-[80vh] bg-[url('/img/header.jpg')] bg-cover bg-center">
        <div className="flex flex-column justify-center items-center text-center w-full h-full">
          <h1 className="text-4xl text-orange-500 font-serif">Anak Jadi lebih rajin dan produktif dengan bimbingan belajar bersama kami di Lathy Private!</h1>
          <p className="text-2xl text-white font-serif">Les Matematika Online dengan metode belajar interaktif, tutor Profesional dan investasi belajar yang terjangkau.</p>
          <div className="font-bold text-xl text-white w-[80%] py-5">
            <div className="flex flex-row flex-wrap gap-5 items-center justify-center">
              {icons.map((data) => (
                <React.Fragment key={data.id}>
                  <span className="flex flex-column gap-2 flex-wrap  items-center justify-center py-2">
                    <h6>{data.title}</h6>
                    <FaCircleCheck />
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>
          <button className="flex justify-center items-center w-[200px] h-[50px] my-10 shadow-lg transition-all duration-100 rounded hover:border-2 bg-orange-500 ">
            <a className="text-white" hyref="#home">
              Mau liat dong
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
