import React from 'react';
import ProgramBelajar from './ProgramBelajar';
import Keunggulan from './Keunggulan';
import Swipper from '../../components/Swipper';
import PaketProgram from './PaketProgram';
import Profil from './Profil';
import Header from '../../components/Header';

const Home = () => {
  return (
    <div >
      <div>
        <Header />
      </div>
      <div className="bg-red-500 ">
        <ProgramBelajar />
      </div>
      <div className="bg-yellow-500">
        <Keunggulan />
      </div>
      <div className="bg-green-500">
        <Swipper />
      </div>
      <div className="bg-blue-500">
        <PaketProgram />
      </div>
      <div className="bg-purple-500">
        <Profil />
      </div>
    </div>
  );
};
export default Home;
