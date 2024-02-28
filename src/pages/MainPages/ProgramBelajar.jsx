import { useState } from 'react';
import {programBelajar} from '../../data/LocalData.json'
const ProgramBelajar = () => {
  const dataProgoram = programBelajar;
  const [index, setIndex] = useState(1);
  return (
    <>
      <div className="flex justify-center items-center w-full h-full py-4">
        <div className="flex text-white justify-center items-center w-[50%]">
          <div className="flex flex-column items-center justify-center">
            <h1 className="text-lg font-bold">Program Les Private</h1>
            <div className="flex flex-row flex-wrap  sm:justify-around justify-center items-center gap-2 w-full  my-4 p-2">
              <button onClick={() => setIndex(1)} className="flex justify-around items-center gap-4 border-b-2 hover:border-orange-500 hover:text-orange-500 transition-all duration-75 w-[150px] h-[40px]">
                SD
              </button>
              <button onClick={() => setIndex(2)} className="flex justify-around items-center gap-4 border-b-2 hover:border-orange-500 hover:text-orange-500 transition-all duration-75 w-[150px] h-[40px] ">
                SMP
              </button>
              <button onClick={() => setIndex(3)} className="flex justify-around items-center gap-4 border-b-2 hover:border-orange-500 hover:text-orange-500 transition-all duration-75 w-[150px] h-[40px] ">
                SMA
              </button>
              <button onClick={() => setIndex(4)} className="flex justify-around items-center gap-4 border-b-2 hover:border-orange-500 hover:text-orange-500 transition-all duration-75 w-[150px] h-[40px] ">
                Kuliah
              </button>
              <button onClick={() => setIndex(5)} className="flex justify-around items-center gap-4 border-b-2 hover:border-orange-500 hover:text-orange-500 transition-all duration-75 w-[150px] h-[40px] ">
                Kursus Khusus
              </button>
            </div>
            {dataProgoram.map((item) => {
              <div className="flex flex-column text-justif pt-2 gap-2" key={item.id} hidden={index != item.id}>
                <h1 className="font-semibold pb-2">{item.jenjang}</h1>
                <p>{item.desc1}</p>
                <p>{item.desc2}</p>
                {/* <div className="flex flex-row pl-4  gap-5" hidden={index != id}>
                  <ul className="list-disc">
                    <li>Matematik</li>
                    <li>IPA </li>
                    <li>IPS</li>
                    <li>Pendidikan Kewarganegaraan</li>
                  </ul>
                  <ul className="list-disc">
                    <li>Bahasa Indonesia</li>
                    <li>Bahasa Inggris</li>908
                    <li>Seni Budaya</li>
                    <li>Pendidikan Agama Islam</li>
                  </ul>
                </div>
                <div className="flex flex-row pl-4  gap-5" hidden={index != id}>
                  <ul className="list-disc">
                    <li>Matematik</li>
                    <li>IPA </li>
                    <li>IPS</li>
                    <li>Pendidikan Kewarganegaraan</li>
                  </ul>
                  <ul className="list-disc">
                    <li>Bahasa Indonesia</li>
                    <li>Bahasa Inggris</li>
                    <li>Keterampilan TIK</li>
                    <li>Pendidikan Agama Islam</li>
                  </ul>
                </div>
                <div className="flex flex-row pl-4  gap-5" hidden={index != id}>
                  <ul className="list-disc">
                    <li>Penalaran Matematik</li>
                    <li>Fisika </li>
                    <li>Kimia</li>
                    <li>Biologi</li>
                    <li>Test Potensi Skolastik</li>
                    <li>Sekolah Kedinasan</li>
                  </ul>
                  <ul className="list-disc">
                    <li>Literasi Bahasa Indonesia</li>
                    <li>Literasi Bahasa Inggris</li>
                    <li>Sosiologi</li>
                    <li>Geografi</li>
                    <li>Ekonomi</li>
                    <li>Sejarah</li>
                  </ul>
                </div>
                <div className="flex flex-row pl-4  gap-5" hidden={index != id}>
                  <ul className="list-disc">
                    <li>Pengetahuan Kuantitatif</li>
                    <li>Kemampuan Penalaran Umum</li>
                    <li>Pengetahuan dan Pemahaman Umum</li>
                    <li>Kemampuan Memahami bacaan dan menulis</li>
                    <li>Saintek</li>
                  </ul>
                  <ul className="list-disc">
                    <li>Soshum</li>
                    <li>Literasi Bahasa Indonesia</li>
                    <li>Literasi Bahasa Inggris</li>
                    <li>SIMAK UI</li>
                    <li>UTUL UGM</li>
                  </ul>
                </div>
                <div className="flex flex-row pl-4  gap-5" hidden={index != id}>
                  <ul className="list-disc">
                    <li>Pengetahuan Kuantitatif</li>
                    <li>Kemampuan Penalaran Umum</li>
                    <li>Pengetahuan dan Pemahaman Umum</li>
                    <li>Kemampuan Memahami bacaan dan menulis</li>
                    <li>Saintek</li>
                  </ul>
                  <ul className="list-disc">
                    <li>Soshum</li>
                    <li>Literasi Bahasa Indonesia</li>
                    <li>Literasi Bahasa Inggris</li>
                    <li>SIMAK UI</li>
                    <li>UTUL UGM</li>
                  </ul>
                </div> */}
              </div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramBelajar;
