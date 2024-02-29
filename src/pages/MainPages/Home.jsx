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
        <ProgramBelajar />
        <Keunggulan />
        <Swipper />
        <PaketProgram />
        <Profil />
      </div>
    </>
  );
};
export default Home;
