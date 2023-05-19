import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

export function RegisSiswa() {
  const [nameSiswa, setNameSiswa] = useState("");
  const [emailSiswa, setEmailSiswa] = useState("");
  const [genderSiswa, setGenderSiswa] = useState("Male");
  const [schoolSiswa, setSchoolSiswa] = useState("");
  const [passSiswa, setPassSiswa] = useState("");
  const navigate = useNavigate();

  const onOptionChange = (e:any) => {
    setGenderSiswa(e.target.value)
  }

  const addSiswa = async(e:any) => {
    e.preventDefault();
    try{
    await axios.post('https://lathy-private-backend-production.up.railway.app/auth/register/siswa', {
      nameSiswa,
      emailSiswa,
      genderSiswa,
      schoolSiswa,
      passSiswa
    }).then(siswa => {
      navigate("/modalSiswa");
    }).catch(err => {
      console.log('error:', err);
    })
  }catch(err){
    console.log(err);
  }
}

  return (
      <div className="container-regisSiswa">
        <div className="content-regisSiswa">
          <div className="back">
            <Link to="/regisMember"><i className="fa-solid fa-arrow-left"></i></Link>
          </div>
          <h4>Registrasi Sebagai Siswa</h4>
          <form onSubmit={addSiswa}>
            <div className="top">
              <input value={nameSiswa} onChange={(e) => setNameSiswa(e.target.value)} type="text" name="nameSiswa"  placeholder="Nama Lengkap..."/>
              <input value={emailSiswa} onChange={(e) => setEmailSiswa(e.target.value)} type="email" name="emailSiswa"  placeholder="Email/WA/Nomor HP"/>
            </div>
            <div className="middle">
              <input value={schoolSiswa} onChange={(e) => setSchoolSiswa(e.target.value)} type="text" name="schoolSiswa" placeholder="Sekolah/Pendidikan terakhir"/>
            </div>
            <div className="bottom">
              <div className="radioInput">
                <input value="Male" checked={genderSiswa === "Male"} onChange={onOptionChange} type="radio" />Male
                <input value="Female" checked={genderSiswa === "Female"} onChange={onOptionChange} type="radio" />Female
              </div>
              <div className="pass">
                <input value={passSiswa} onChange={(e) => setPassSiswa(e.target.value)} type="password" name="passGuru" autoComplete='on' placeholder="Password"/>
              </div>
            </div>
            <div className="btn-submit">
              <button type='submit' className="submit-regisSiswa">Submit</button>
            </div>
          </form>
        </div>
      </div>
  );
}
