import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';
import { swipperData } from '../data/LocalData.json';

const Swipper = () => {
  const dataSwipper = swipperData;

  return (
    <>
      <div className="flex flex-column items-center justify-center relative p-20 ">
        <div className="pb-4 text-white">
          <h4 className="text-bold text-xl">Cerita Sukses Siswa</h4>
        </div>
        <Swiper modules={[EffectCards]} effect={'cards'} grabCursor={true} className="swiper mySwiper">
          <div className="swiper-wrapper">
            {dataSwipper.map((data) => (
              <SwiperSlide className="swiper-slide flex flex-column items-center justify-center" key={data.id}>
                <h1 className="text-sm">{data.judul}</h1>
                <span className="py-3">
                  <img src={data.image} alt="image-alumni" />
                </span>
                <h1 className="text-sm pb-2">{data.name}</h1>
                <p className="font-normal text-center">{data.information}</p>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Swipper;
