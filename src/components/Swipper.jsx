import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';
import { swipperData } from '../data/LocalData.json';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

const Swipper = () => {
  const dataSwipper = swipperData;
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className="flex flex-column items-center justify-center relative p-20 ">
        <div className="pb-4 text-white">
          <h4 className="text-bold text-xl">Cerita Sukses Siswa</h4>
        </div>
        <div className="flex flex-wrap lg:w-[60%] sm:flex-column justify-center w-full bg-red-500">
          <div className="lg:w-[50%] bg-blue-500 w-full ">
            <Swiper modules={[EffectCards]} effect={'cards'} grabCursor={true} className=" sm:w-[240px] sm:h-[320px] mySwiper w-[150px] h-[250px]">
              <div className="swiper-wrapper">
                {dataSwipper.map((data) => (
                  <SwiperSlide className="swiper-slide flex flex-column items-center justify-center" key={data.id}>
                    <h1 className="text-sm">{data.judul}</h1>
                    <span className="py-3">
                      <img className="" src={data.image} alt="image-alumni" />
                    </span>
                    <h1 className="text-sm pb-2">{data.name}</h1>
                    <p className="font-normal text-center">{data.information}</p>
                    <button>
                      <FaEye />
                      <FaEyeSlash />
                    </button>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
          <div className="bg-green-500 lg:w-[50%] p-4">
            {dataSwipper.map((item) => (
              <div key={item.id} hidden={index != item.id}>
                <h1>{item.name}</h1>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Swipper;
