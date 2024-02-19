import { Link } from 'react-router-dom';
import React from 'react';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <>
      <div className="w-auto flex items-center justify-center text-center pb-2">
        <div className="flex flex-column items-center justify-center pt-12">
          <h1 className="text-5xl text-orange-500">Lathy Private</h1>
          <div>
            <img src="./icons/maskot.png" alt="logo" />
          </div>
          <div className="flex flex-wrap text-center w-[70%]">
            <div className="h-100 flex flex-column flex-wrap">
              <h1 className="sm:text-4xl text-orange-500">Pendamping Setia Belajarmu</h1>
              <h1 className="sm:text-2xl font-normal text-gray-500">Help improve the quality of education from an early age and create breakthroughs in knowledge.</h1>
              <div className="pt-4 text-white">
                <h5 className="pb-[9.3px]">For more information</h5>
                <Link to="/home">See More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Index;
