import React from 'react';

const PaketProgram = () => {
  return (
    <>
      <div className="flex w-full justify-center items-center sm:h-svh pt-28">
        <div className="flex sm:w-[60%] h-auto justify-center items-center text-white  ">
          <div className="flex flex-column w-full justify-center item-center text-center p-4">
            <h1 className="pb-6 text-lg font-semibold">Pilih Paket Les </h1>
            <div className="flex flex-row flex-wrap justify-around gap-4 item-center ">
              <div className="flex flex-column h-[350px] w-[250px] rounded shadow-lg gap-5  items-center justify-center">
                <h1 className="text-green-500 font-bold">Paket Umum</h1>
                <h3>6 Sesi </h3>
                <h5>Rp. 500.000</h5>
                <button className=" py-2 px-4 border-b-2 transition-all  rounded duration-200 hover:bg-orange-500 text-orange-500 hover:text-white">Pilih Program</button>
              </div>
              <div className="flex flex-column h-[350px] w-[250px] rounded shadow-lg gap-5 items-center justify-center ">
                <h1 className="text-orange-500 font-bold">Paket Khusus</h1>
                <h3>Free Tentukan Sesi </h3>
                <h5>Rp. 100.000 / Sesi</h5>
                <button className=" py-2 px-4 border-b-2 transition-all rounded  duration-200 hover:bg-orange-500 text-orange-500 hover:text-white">Pilih Program</button>
              </div>
              <div className="flex flex-column h-[350px] w-[250px] rounded shadow-lg gap-5 items-center justify-center ">
                <h1 className="text-red-500 font-bold">Paket Intensif</h1>
                <h3>12 Sesi </h3>
                <h5>Rp. 1.000.000</h5>
                <button className=" py-2 px-4 border-b-2 transition-all rounded  duration-200 hover:bg-orange-500 text-orange-500 hover:text-white t">Pilih Program</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PaketProgram;
