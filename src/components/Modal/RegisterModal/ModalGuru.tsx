import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export function ModalGuru() {
    const [guru, setGuru] = useState<any[]>([]);
    useEffect(() => {
        getGuru();
    }, []);

    const getGuru = async() => {
        const response = await axios.get('https://lathy-private-backend-production.up.railway.app/auth/register/guru')
        setGuru(response.data);
    }
    const deleteGuru = async(id:any) => {
        try{
            await axios.delete(`https://lathy-private-backend-production.up.railway.app/auth/register/guru/${id}`)
            .then(res => {
                getGuru();
            }).catch(err => {
                console.log("errors", err);
            })
        }catch(err){
            console.log(err);
        }
    }
    
  return (  
      <div className="modal-guru-container">
        <div className="modal-guru-content">
            <div className="modal-guru-header">
                <h4>Registrasi Sebagai Guru</h4>
            </div>
            <div className="modal-guru-body">
                <div className="title">
                    <h5 id="title-success">Data Berhasil Dikirim!!</h5>
                    <p id="body-success" className="success">Data anda telah terinput dalam database kami sebagai Guru pendaftar. 
                        Harap tunggu informasi lebih lanjut pada <b>email/WA/No HP</b> anda untuk mendapatkan, <b>username dan password</b> untuk akun anda pada website kami.
                    </p>
                    <p id="warning-success">Click <b> OK </b> untuk mengkonfrimasi data yang anda masukkan adalah <b>BENAR</b>.</p>
                    {/* Jika data dihapus */}
                    <h5 id="title-deleted">Data Berhasil Dihapus!!</h5>
                    <p id="body-deleted" className="success">Data anda berhasil dihapus dari database. Tolong agar lebih teliti saat melakukan input!!!.
                    </p>
                </div>
                <div className="data-input">
                {guru.map((data)=> (
                    <ul key={data._id}>
                        <div className="data-register">
                            <li>{data.nameGuru}</li>
                            <li>{data.emailGuru}</li>
                            <li>{data.genderGuru}</li>
                            <li>{data.schoolGuru}</li>
                        </div>
                        <div className="data-register">
                            <li>{data.teachingHistory}</li>
                            <li>{data.masteredLearning}</li>
                            <li>{data.passGuru}</li>
                        </div>
                        <li className="action">
                            <Link to="/login" type="button">OK</Link>
                            <button onClick={event => {deleteGuru(data._id); onDeleted();}} type="button">DELETE</button>
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
                    <Link id="back-regis" to="/regisGuru" type="button">Back</Link>
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
