import React from 'react';
import ProgramBelajar from './ProgramBelajar';
import Keunggulan from './Keunggulan';
import Swipper from '../../components/Swipper';
import PaketProgram from './PaketProgram';
import Profil from './Profil';

const Home = () => {
  return (
    <div className="m-0 p-0 w-full h-full">
      <ProgramBelajar />
      <Keunggulan />
      <Swipper />
      <PaketProgram />
      <Profil />S{' '}
    </div>
  );
};
export default Home;
