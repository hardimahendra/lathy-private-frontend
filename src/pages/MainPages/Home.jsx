import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';
import { swipperData, homeContent, categoryPrivate, penawaranKami } from '../../data/LocalData.json';
import { FaCircleCheck } from 'react-icons/fa6';

const Home = () => {
  const dataSwipper = swipperData;
  const dataPelayanan = homeContent;
  const dataCategory = categoryPrivate;
  const icons = penawaranKami;
  return (
    <>
      <div className="flex flex-column pt-16">
        <div className="flex flex-column items-center justify-center ">
          <div className="flex items-center justify-center w-[70%] pt-2">
            <div className="flex items-center justify-center flex-wrap gap-12 p-4">
              {dataPelayanan.map((data) => (
                <React.Fragment key={data.id}>
                  <div className="flex flex-column w-[400px] h-[250px] justify-center items-center p-4  ">
                    <span className="blok h-[70px] w-[70px] object-cover">
                      <img src={data.image} alt="image" className="object-cover h-full w-full rounded-circle" />
                    </span>
                    <div className="flex flex-column items-center justify-center pt-4 text-white">
                      <h6 className="font-semibold ">{data.title}</h6>
                      <p className="text-center pt-2">{data.description}</p>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="record flex gap-24 text-white items-center justify-center w-[60%] p-12">
            <div className="siswa-record flex flex-column text-center ">
              <h6>Siswa</h6>
              <p></p>
            </div>
            <div className="guru-record flex flex-column text-center">
              <h6>Guru</h6>
              <p></p>
            </div>
            <div className="mp-record flex flex-column text-center">
              <h6>Mata Pelajaran</h6>
              <p></p>
            </div>
            <div className="wilayah-record flex flex-column text-center">
              <h6>Wilayah</h6>
              <p></p>
            </div>
          </div>
        </div>
        <div className="flex flex-column flex-wrap justify-center">
          <div className="flex gap-12 flex-wrap justify-center ">
            {dataCategory.map((data) => (
              <React.Fragment key={data.id}>
                <div className="flex flex-column  p-2 my-2 rounded-b-[90px] cursor-pointer ">
                  <h1 className=" text-white font-bold text-center pb-2 text-lg">{data.title}</h1>
                  <img src={data.image} alt="opsi-image" className="object-cover rounded-b-[90px] w-[150px] h-[150px] hover:[transform:scale(1.1)] duration-200 transition-all shadow-lg" />
                </div>
              </React.Fragment>
            ))}
          </div>
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
        </div>
        <div className=" flex flex-column justify-center items-center p-4 text-white">
          <div className="font-bold text-xl">
            <h1>Les Privat di Lathy Private</h1>
          </div>
          <div className="flex flex-row flex-wrap gap-4 items-center justify-center">
            {icons.map((data) => (
              <React.Fragment key={data.id}>
                <span className="flex flex-column gap-2 flex-wrap  items-center justify-center py-2">
                  <h6>{data.title}</h6>
                  <FaCircleCheck />
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
