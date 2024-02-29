import React from 'react';
import ProgramBelajar from './ProgramBelajar';
import Keunggulan from './Keunggulan';
import Swipper from '../../components/Swipper';
import PaketProgram from './PaketProgram';
import Profil from './Profil';

const Home = () => {
  return (
    <>
      <div className="flex flex-column">
        <div className="flex flex-column items-center justify-center ">
          <ProgramBelajar />
          <Keunggulan />
        </div>
        <div className="flex flex-column flex-wrap justify-center ">
          <Swipper />
        </div>
        <div className=" flex justify-center items-center p-4 text-white">
          <PaketProgram />
        </div>
        <div>
          <Profil />
        </div>
      </div>
    </>
  );
};
export default Home;
