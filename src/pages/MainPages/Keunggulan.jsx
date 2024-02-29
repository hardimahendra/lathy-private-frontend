import React from 'react';
import { FaHouseUser, FaStar, FaCodePullRequest, FaListCheck, FaClipboardList, FaBusinessTime } from 'react-icons/fa6';

const Keunggulan = () => {
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
      <div className="flex flex-column justify-center items-center text-white pt-10">
        <div className="flex flex-column justify-center items-center pt-2 ">
          <h1 className="sm:text-2xl pb-2">Layanan & Keunggulan Lathy Private</h1>
          <div className="flex flex-row flex-wrap justify-center items-center w-[50%] ">
            {dataIcon.map(({ id, icon, title, desc }) => (
              <span key={id} className="flex flex-column justify-center items-center text-center m-2 p-1 h-[300px] w-[450px] shadow-lg rounded">
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
export default Keunggulan;
