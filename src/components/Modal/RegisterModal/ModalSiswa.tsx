import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export function ModalSiswa() {
    const [siswa, setSiswa] = useState<any[]>([]);
    useEffect(() => {
        getSiswa();
    }, []);

    const getSiswa = async() => {
        const response = await axios.get('http://localhost:5000/auth/register/siswa')
        setSiswa(response.data);
    }
    const deleteSiswa = async(id:any) => {
        try{
            await axios.delete(`http://localhost:5000/auth/register/siswa/${id}`);
            getSiswa();
        }catch(err){
            console.log(err);
        }
    }

  return (
      <div className="modal-siswa-container">
        <div className="modal-siswa-content">
            <div className="modal-siswa-header">
                <h4>Registrasi Sebagai Siswa</h4>
            </div>
            <div className="modal-siswa-body">
                <div className="title">
                    <h5 id="title-success">Data Berhasil Dikirim!!</h5>
                    <p id="body-success" className="success">Data anda telah terinput dalam database kami sebagai siswa pendaftar. 
                        Harap tunggu informasi lebih lanjut pada <b>email/WA/No HP</b> anda untuk mendapatkan, <b>username dan password</b> untuk akun anda pada website kami.
                    </p>
                    <p id="warning-success">Click <b> OK </b> untuk mengkonfrimasi data yang anda masukkan adalah <b>BENAR</b>.</p>
                    {/* Jika data dihapus */}
                    <h5 id="title-deleted">Data Berhasil Dihapus!!</h5>
                    <p id="body-deleted" className="success">Data anda berhasil dihapus dari database. Tolong agar lebih teliti saat melakukan input!!!.
                    </p>
                </div>
                <div className="data-input">
                {siswa.map((data)=> (
                    <ul key={data._id}>
                        <div className="data-register">
                            <li>{data.nameSiswa}</li>
                            <li>{data.emailSiswa}</li>
                            <li>{data.genderSiswa}</li>
                            <li>{data.schoolSiswa}</li>
                        </div>
                        <div className="data-register">
                            <li>{data.passSiswa}</li>
                        </div>
                        <li className="action">
                            <Link to="/login" type="button">OK</Link>
                            <button onClick={event => {deleteSiswa(data._id); onDeleted();}} type="button">DELETE</button>
                        </li>
                    </ul>
                    ))}
                </div>
                <div id="flash-success" className="informasi">
                    <div className="flash-warning">
                        <p  className="warning">Dimohon untuk tidak menduplikat data anda!!!. Jika terdapat kesalahan saat input data diharap untuk mengklik tombol DELETE dan input kembali pada form registrasi!!!</p>
                    </div>
                </div>
                <div className="deleted-action">
                    <Link id="back-regis" to="/regisSiswa" type="button">Back</Link>
                </div>
            </div>
        </div>
      </div>
  )
  function onDeleted(){
    const dataDeleted = document.getElementById('back-regis') as HTMLElement;
    
    const titleShow = document.getElementById('title-success') as HTMLElement;
    const bodyShow = document.getElementById('body-success') as HTMLElement;
    const warningShow = document.getElementById('warning-success') as HTMLElement;
    const flashShow = document.getElementById('flash-success') as HTMLElement;
    
    const titleDeleted = document.getElementById('title-deleted') as HTMLElement;
    const bodyDeleted = document.getElementById('body-deleted') as HTMLElement;

    dataDeleted.style.display = 'flex';
    
    titleShow.style.display = 'none';
    bodyShow.style.display = 'none';
    warningShow.style.display = 'none';
    flashShow.style.display = 'none';
    
    titleDeleted.style.display = 'flex';
    bodyDeleted.style.display = 'flex';
    
}
}
