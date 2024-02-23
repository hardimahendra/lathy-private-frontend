import { Link } from 'react-router-dom';
import React from 'react';
import Footer from '../components/Footer';
import Home from './MainPages/Home';
import Profil from './MainPages/Profil';

const Index = () => {
  return (
    <>
      <div className="w-auto flex flex-column items-center justify-center text-center pb-2">
        <section id="home"> 
          <Home />
        </section>
        <section id="profil">
          <Profil />
        </section>
      </div>
      <Footer />
    </>
  );
};
export default Index;
