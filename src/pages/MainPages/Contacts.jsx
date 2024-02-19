import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaEnvelopeOpen } from 'react-icons/fa6';
const Contacts = () => {
  return (
    <>
      <div className="flex flex-wrap text-white">
        <div className="flex flex-column m-auto justify-center p-6">
          <div className="flex flex-wrap justify-center gap-12 items-center text-center h-[250px] mb-6">
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
              <Link to="https://www.instagram.com/hardimahendra_/" target="_blank">
                <FaInstagram />
              </Link>
              <Link className="py-2" to="https://api.whatsapp.com/send?phone=%2B6285892759932" target="_blank">
                <FaWhatsapp />
              </Link>
              <Link href="https://web.facebook.com/hardimahendra" to="mailto:hardimahendra35@gmail.com" target="_blank">
                <FaEnvelopeOpen />
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center">
            <div className="flex flex-column justify-center items-center text-center">
              <h4 className="text-lg font-bold">Lebak - Banten</h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3962.715997131946!2d105.97092207575324!3d-6.682061665327537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNDAnNTUuNCJTIDEwNcKwNTgnMjQuNiJF!5e0!3m2!1sen!2sid!4v1684398563680!5m2!1sen!2sid"
                width="400"
                height="300"
                style={{ border: '0' }}
                loading="lazy"
                className="shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="flex flex-column flex-wrap mx-auto justify-center items-center">
          <h2 className="font-bold">Tinggalkan Pesan</h2>
          <p className="py-4">Silahkan tinggalkan pesan untuk Lathy Private dan akan segera kami tanggapi</p>
          <div className="flex justify-center items-center">
            <form className="w-full h-full">
              <div className="flex mb-3 gap-12">
                <div>
                  <label>Nama Lengkap</label>
                  <input className="form-control" />
                </div>
                <div className="kirim-nomor">
                  <label>Nomor WhatsApp</label>
                  <input className="form-control" />
                </div>
              </div>
              <div className="mb-3">
                <label>Alamat Email</label>
                <input className="form-control" />
              </div>
              <div className="mb-3">
                <label>Example textarea</label>
                <textarea className="form-control"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contacts;
