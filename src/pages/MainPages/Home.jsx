import React from 'react';
import ProgramBelajar from './ProgramBelajar';
import Keunggulan from './Keunggulan';
import Swipper from '../../components/Swipper';
import PaketProgram from './PaketProgram';
import Profil from './Profil';
import Header from '../../components/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <ProgramBelajar />
      <Keunggulan />
      <Swipper />
      <PaketProgram />
      <Profil />
    </div>
  );
};
export default Home;
