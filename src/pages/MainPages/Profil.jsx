import React from 'react';
import { useState } from 'react';
import { FaGavel, FaSchool, FaFaceGrinStars, FaServicestack, FaHouseUser, FaStar, FaCodePullRequest, FaListCheck, FaClipboardList, FaBusinessTime } from 'react-icons/fa6';
import Sejarah from '../../components/Modal/ProfilModal/Sejarah';
import Jenjang from '../../components/Modal/ProfilModal/Jenjang';
import Layanan from '../../components/Modal/ProfilModal/Layanan';
import Kenyamanan from '../../components/Modal/ProfilModal/Kenyamanan';

const Profil = () => {
  const [sejarah, setSejarah] = useState(false);
  const [jenjang, setJenjang] = useState(false);
  const [layanan, setLayanan] = useState(false);
  const [kenyamanan, setKenyamanan] = useState(false);

  const dataIcon = [
    { id: 1, icon: <FaHouseUser />, title: 'Guru Ke Rumah', desc: 'KBM Berlangsung Di Rumah Siswa' },
    { id: 2, icon: <FaStar />, title: 'Pelayanan Spesialis', desc: 'Guru yang mengajar ke rumah siswa sesuai pada bidangnya' },
    { id: 3, icon: <FaCodePullRequest />, title: 'Request Ganti Guru', desc: 'Jika guru dirasa tidak sesuai (tidak cocok). dapat diganti dan disesuaikan.' },
    {
      id: 4,
      icon: <FaListCheck />,
      title: 'Evaluasi Belajar',
      desc: 'Evaluasi yang dilakukan secara berkala dan tiba-tiba (tanpa informasi atau pemberitahuan akan adanya tes). diajukan untuk mengukur perkembangan belajar siswa secara REAL.',
    },
    { id: 5, icon: <FaClipboardList />, title: 'Laporan Perkembangan Belajar', desc: 'Melaporkan perkembangan belajar siswa dua (2) bulan sekali ke wali siswa/i, dan jika diizinkan akan diteruskan ke wali kelas selaku sharing' },
    { id: 6, icon: <FaBusinessTime />, title: 'Kondisional & Fleksibel', desc: 'Waktu dan hari disesuaikan dengan kebutuhan dan kesibukkan siswa/i' },
  ];
  return (
    <>
      <div className="flex flex-column justify-center items-center h-full text-white pt-16">
        <div className="flex flex-row flex-wrap items-center justify-center gap-12">
          <div className="flex justify-center items-center w-[175px] h-[110px]">
            <span className="flex justify-center items-center  cursor-pointer rounded-circle m-4 w-[70px] h-[70px] ">
              <FaGavel className=" w-1/2 h-1/2 object-cover transition-all duration-200 hover:[transform:scale(1.2)]" onClick={() => setSejarah(true)} />
              <Sejarah show={sejarah} onHide={() => setSejarah(false)} />
            </span>
          </div>
          <div className="flex justify-center items-center w-[175px] h-[110px]">
            <span className="flex justify-center items-center  cursor-pointer rounded-circle m-4 w-[70px] h-[70px]">
              <FaSchool className=" w-1/2 h-1/2 object-cover transition-all duration-200 hover:[transform:scale(1.2)]" onClick={() => setJenjang(true)} />
              <Jenjang show={jenjang} onHide={() => setJenjang(false)} />
            </span>
          </div>
          <div className="flex justify-center items-center w-[175px] h-[110px]">
            <span className="flex justify-center items-center  cursor-pointer rounded-circle m-4 w-[70px] h-[70px]">
              <FaServicestack className=" w-1/2 h-1/2 object-cover transition-all duration-200 hover:[transform:scale(1.2)]" onClick={() => setLayanan(true)} />
              <Layanan show={layanan} onHide={() => setLayanan(false)} />
            </span>
          </div>
          <div className="flex justify-center items-center w-[175px] h-[110px]">
            <span className="flex justify-center items-center  cursor-pointer rounded-circle m-4 w-[70px] h-[70px]">
              <FaFaceGrinStars className=" w-1/2 h-1/2 object-cover transition-all duration-200 hover:[transform:scale(1.2)]" onClick={() => setKenyamanan(true)} />
              <Kenyamanan show={kenyamanan} onHide={() => setKenyamanan(false)} />
            </span>
          </div>
        </div>
        <div className="flex flex-column justify-center items-center pt-4 ">
          <h1 className="text-2xl pb-2">Layanan & Keunggulan Lathy Private</h1>
          <div className="flex flex-row flex-wrap justify-center items-center w-[80%] ">
            {dataIcon.map(({ id, icon, title, desc }) => (
              <span key={id} className="flex flex-column justify-center items-center text-center m-2 p-1 h-[300px] w-[450px] ">
                <i className="text-4xl py-2 ">{icon}</i>
                <h1 className="text-md font-bold">{title}</h1>
                <p className="text-sm">{desc}</p>
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Profil;
