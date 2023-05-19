import Layouts from '../../components/Layouts/index';

export function Contacts() {
  return (
    <>
    <Layouts>
      <div className="container-kontak">
        <div className="info-kontak">
          <div className="contact-us">
            <div className="no">
              <h6>Kontak Kami</h6>
              <p> 0858-9275-9932 (CS) </p>
              <p> hardimahendra34@gmail.com</p>
            </div>
            <div className="cs">
              <h6>Costumer Service</h6>
              <p>CS Online Setiap Hari 24 Jam </p>
              <p>Jam Kantor Hari Senin s/d Sabtu </p>
              <p>Minggu dan Tanggal Merah Slow Respond</p>
            </div>
            <div className="social-media">
              <h6>Social Media</h6>
              <a className="instagram" href="https://www.instagram.com/hardimahendra_/" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a className="twitter" href="https://api.whatsapp.com/send?phone=%2B6285892759932" target="_blank">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              {/* <a className="facebook" href="https://web.facebook.com/hardimahendra" target="_blank">
                <i className="fa-brands fa-facebook-f"></i>
              </a> */}
            </div>
          </div>
          <div className="info-lokasi">
            <div className="info-maps">
              <h4>Lebak - Banten</h4>
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3962.715997131946!2d105.97092207575324!3d-6.682061665327537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNDAnNTUuNCJTIDEwNcKwNTgnMjQuNiJF!5e0!3m2!1sen!2sid!4v1684398563680!5m2!1sen!2sid"
                width="400"
                height="300"
                style={{ border: '0' }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="pesan-kontak">
          <h2>Tinggalkan Pesan</h2>
          <p>Silahkan tinggalkan pesan untuk Lathy Private dan akan segera kami tanggapi</p>
          <div className="kirim-pesan">
            <form>
              <div className="d-flex mb-3">
                <div className="kirim-nama" style={{ width: '50%', padding: '5px' }}>
                  <label className="form-label" style={{ color: 'white' }}>
                    Nama Lengkap
                  </label>
                  <input className="form-control" />
                </div>
                <div className="kirim-nomor" style={{ width: '50%', padding: '5px' }}>
                  <label className="form-label" style={{ color: 'white' }}>
                    Nomor WhatsApp
                  </label>
                  <input className="form-control" />
                </div>
              </div>
              <div className="mb-3" style={{ padding: '5px' }}>
                <label className="form-label" style={{ color: 'white' }}>
                  Alamat Email
                </label>
                <input className="form-control" />
              </div>
              <div className="mb-3" style={{ padding: '5px' }}>
                <label className="form-label" style={{ color: 'white' }}>
                  Example textarea
                </label>
                <textarea className="form-control"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      </Layouts>
    </>
  );
}
