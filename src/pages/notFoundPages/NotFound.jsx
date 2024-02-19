import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-[100vh] text-white">
        <div className="flex flex-column gap-3 items-center justify-center w-[400px] h-[400px]">
          <h1 className="text-9xl pb-6">404</h1>
          <h3 className="text-3xl">Oppsss</h3>
          <h5>Pages Dalam Proses Pengembangan </h5>
          <h5>Pages is still under development</h5>
          <div className="pt-10">
            <Link className="rounded-lg px-3 py-2  w-1/2 border-none  hover:bg-orange-500 hover:text-blue-300 " to="/home">
              Back Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
