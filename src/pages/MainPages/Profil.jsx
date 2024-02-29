import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaEnvelopeOpen } from 'react-icons/fa6';
const Profil = () => {
  return (
    <>
      <div className="flex flex-column p-4 text-white gap-4 ">
        <h1 className="text-center">Tentang Kami</h1>
        <div className="flex flex-wrap justify-around gap-4">
          <div className="flex flex-column justify-center items-center px-5 py-3">
            <div className="flex flex-wrap justify-center items-center text-center sm:h-[250px]">
              <div className="flex flex-column flex-wrap mx-auto justify-start pt-4 items-center h-[150px] ">
                <h6 className="pb-3 font-bold">Kontak Kami</h6>
                <p> 0858-9275-9932 (CS) </p>
                <p> hardimahendra34@gmail.com</p>
              </div>
              <div className="flex flex-column flex-wrap mx-auto justify-start pt-4 items-center h-[150px]">
                <h6 className="pb-3 font-bold">Costumer Service</h6>
                <p>CS Online Setiap Hari 24 Jam </p>
                <p>Jam Kantor Hari Senin s/d Sabtu </p>
                <p>Minggu dan Tanggal Merah Slow Respond</p>
              </div>
              <div className="flex flex-column flex-wrap mx-auto justify-start pt-4 items-center h-[150px]">
                <h6 className="pb-3 font-bold">Social Media</h6>
                <Link className="shadow-lg hover:text-pink-500 " to="https://www.instagram.com/hardimahendra_/" target="_blank">
                  <FaInstagram />
                </Link>
                <Link className="shadow-lg hover:text-green-500 py-2"  to="https://api.whatsapp.com/send?phone=%2B6285892759932" target="_blank">
                  <FaWhatsapp />
                </Link>
                <Link className="shadow-lg hover:text-red-500 " to="mailto:hardimahendra35@gmail.com" target="_blank">
                  <FaEnvelopeOpen />
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-center">
              <div className="flex flex-column justify-center items-center text-center">
                <h4 className="text-lg font-bold">Lebak - Banten</h4>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3962.715997131946!2d105.97092207575324!3d-6.682061665327537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNDAnNTUuNCJTIDEwNcKwNTgnMjQuNiJF!5e0!3m2!1sen!2sid!4v1684398563680!5m2!1sen!2sid"
                  style={{ border: '0' }}
                  loading="lazy"
                  className="sm:w-[400px] sm:h-[300px] shadow-lg"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="flex flex-column justify-center px-5 gap-2 items-center shadow-lg bg-transparent">
            <h2 className="font-bold">Tinggalkan Pesan</h2>
            <p className="py-4">Silahkan tinggalkan pesan untuk Lathy Private dan akan segera kami tanggapi</p>
            <div className="flex justify-center items-center ">
              <form name="contact-form" className="flex flex-column w-full h-full gap-5" method="post" >
                <div className="flex gap-12">
                  <input name="nama" type="text" className="form-control h-[40px]   " placeholder="Nama Lengkap" />
                  <input name="nomorHP" type="number" className="form-control h-[40px] " placeholder="Nomor Hp" />
                </div>
                <div className="flex flex-column gap-5">
                  <input name="email" type="email" className="form-control h-[40px] " placeholder="Example : Youremail@gmail.com" />
                  <textarea name="message" type="message" className="form-control h-[100px] " placeholder="Your Message" />
                </div>
                <div className="flex justify-center items-center">
                  <button type="submit" className="rounded-lg p-2 h-[50px] w-1/2 border-none  hover:bg-orange-500 transition-all duration-200">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profil;
