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
      <div>
        <Header />
      </div>
      <div>
        <ProgramBelajar />
      </div>
      <div>
        <Keunggulan />
      </div>
      <div>
        <Swipper />
      </div>
      <div>
        <PaketProgram />
      </div>
      <div>
        <Profil />
      </div>
    </div>
  );
};
export default Home;
