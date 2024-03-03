import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';
import { swipperData } from '../data/LocalData.json';
import { FiMoreHorizontal } from 'react-icons/fi';

const Swipper = () => {
  const dataSwipper = swipperData;
  const [index, setIndex] = useState(1);
  return (
    <>
      <div className="flex flex-column items-center justify-center relative sm:h-svh pt-28 ">
        <div className="pb-4 text-white">
          <h4 className="font-semibold text-lg">Cerita Sukses Siswa</h4>
        </div>
        <div className="flex flex-wrap lg:w-[75%] sm:flex-column justify-center w-full gap-4">
          <div className="lg:w-[40%] w-full ">
            <Swiper modules={[EffectCards]} effect={'cards'} grabCursor={true} className=" sm:w-[240px] sm:h-[320px] mySwiper w-[190px] h-[260px]">
              <div className="swiper-wrapper">
                {dataSwipper.map((data) => (
                  <SwiperSlide className="flex flex-column items-center justify-center py-4" key={data.id}>
                    <h1 className="sm:text-sm text-[12px]">{data.judul}</h1>
                    <span className="py-3">
                      <img className="lg:w-[140px] lg:h-[140px] md:w-[130px] md:h-[130px] w-[100px] h-[100px] object-cover rounded-circle" src={data.image} alt="image-alumni" />
                    </span>
                    <h1 className="text-sm pb-2 font-mono">{data.name}</h1>
                    <p className="font-normal text-center sm:text-sm text-[10px]">{data.information}</p>
                    <div className="relative flex justify-center items-center w-full h-full">
                      <button className="sm:absolute sm:right-4 sm:bottom-0 absolute right-2 -bottom-5" onClick={() => setIndex(data.id)}>
                        <FiMoreHorizontal />
                      </button>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
          <div className=" lg:w-[50%] text-justify p-4 bg-transparent shadow-lg text-white">
            {dataSwipper.map((item) => (
              <div key={item.id} hidden={index != item.id}>
                <div className="flex justify-between font-bold mb-2">
                  <h1 className="font-mono">{item.name}</h1>
                  <h1>{item.judul}</h1>
                </div>
                <p className="indent-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Swipper;
