import { useState } from 'react';
import Sejarah from '../../components/Modal/ProfilModal/Sejarah';
import Jenjang from '../../components/Modal/ProfilModal/Jenjang';
import Layanan from '../../components/Modal/ProfilModal/Layanan';
import Kenyamanan from '../../components/Modal/ProfilModal/Kenyamanan';
import Layouts from '../../components/Layouts'

export function Profil(){
    const [sejarah, setSejarah] = useState(false);
    const [jenjang, setJenjang] = useState(false);
    const [layanan, setLayanan] = useState(false);
    const [kenyamanan, setKenyamanan] = useState(false);
return(
    <>
    <Layouts>
        <div className="container-profil">
            <div className="profil-info">
                <span className="info">
                    <i onClick={() => setSejarah(true)} className="fa-sharp fa-solid fa-gavel"></i>
                    <Sejarah show={sejarah} onHide={() => setSejarah(false)}/>
                </span>
                <span className="info">
                    <i onClick={() => setJenjang(true)} className="fa-sharp fa-solid fa-school"></i>
                    <Jenjang show={jenjang} onHide={() => setJenjang(false)}/>
                </span>
                <span className="info">
                    <i onClick={() => setLayanan(true)} className="fa-sharp fa-solid fa-person-chalkboard"></i>
                    <Layanan show={layanan} onHide={() => setLayanan(false)}/>
                </span >
                <span className="info">
                    <i onClick={() => setKenyamanan(true)} className="fa-sharp fa-solid fa-face-grin-squint-tears"></i>
                    <Kenyamanan show={kenyamanan} onHide={() => setKenyamanan(false)}/>
                </span>
            </div>
            <div className="layanan-keunggulan">
                <h3>Layanan & Keunggulan Lathy Private</h3>
                <div className="keunggulan">
                <span>
                    <i className="fa-solid fa-house-user"></i>
                    <h6>Guru Ke Rumah</h6>
                    <p>KBM Berlangsung Di Rumah Siswea</p>
                </span>
                <span>
                    <i className="fa-solid fa-star"></i>
                    <h6>Pelayanan Spesialis</h6>
                    <p>Guru yang mengajar ke rumah siswa sesuai pada bidangnya</p>
                </span>
                <span>
                    <i className="fa-solid fa-share-nodes"></i>
                    <h6>Request Ganti Guru</h6>
                    <p>Jika guru dirasa tidak sesuai (tidak cocok). dapat diganti dan disesuaikan.</p>
                </span>
                <span>
                    <i className="fa-solid fa-list-check"></i>
                    <h6>Evaluasi Belajar</h6>
                    <p>Evaluasi yang dilakukan secara berkala dan tiba-tiba (tanpa informasi atau pemberitahuan akan adanya tes). diajukan untuk mengukur perkembangan belajar siswa secara REAL.</p>
                </span>
                <span>
                    <i className="fa-solid fa-clipboard"></i>
                    <h6>Laporan Perkembangan Belajar</h6>
                    <p>Melaporkan perkembangan belajar siswa dua (2) bulan sekali ke wali siswa/i, dan jika diizinkan akan diteruskan ke wali kelas selaku sharing</p>
                </span>
                <span>
                    <i className="fa-solid fa-user-group"></i>
                    <h6>Kondisional & Fleksibel</h6>
                    <p>Waktu dan hari disesuaikan dengan kebutuhan dan kesibukkan siswa/i</p>
                </span>
                </div>
            </div>
        </div>
    </Layouts>
    </>
    )
}
export default Profil;