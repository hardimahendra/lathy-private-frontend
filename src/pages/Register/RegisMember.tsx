import { Link } from 'react-router-dom';
export function RegisMember() {
  return (
    <>
      <div className="container-regisMember">
        <div className="content-regisMember">
          <div>
            <h1>Pilih Jenis Pendaftaran</h1>
          </div>
          <div className="opsi-regis">
            <Link to="/regisSiswa">Daftar Jadi Siswa</Link>
            <Link to="/regisGuru">Daftar Jadi Guru</Link>
          </div>
          <div className="back-to-home">
              <Link to="/home">Batal</Link>
          </div>
        </div>
      </div>
    </>
  );
}
