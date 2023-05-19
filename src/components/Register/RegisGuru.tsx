import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

export function RegisGuru() {
  const [nameGuru, setNameGuru] = useState("");
  const [emailGuru, setEmailGuru] = useState("");
  const [genderGuru, setGenderGuru] = useState("Male");
  const [schoolGuru, setSchoolGuru] = useState("");
  const [teachingHistory, setTeachingHistory] = useState("");
  const [masteredLearning, setMasteredLearning] = useState("");
  const [passGuru, setPassGuru] = useState("");
  const navigate = useNavigate();

  const onOptionChange = (e:any) => {
    setGenderGuru(e.target.value)
  }

  const addGuru = async(e:any) => {
  e.preventDefault();
    try{
      await axios.post('https://lathy-private-backend-production.up.railway.app/auth/register/guru', {
        nameGuru,
        emailGuru,
        genderGuru,
        schoolGuru,
        teachingHistory,
        masteredLearning,
        passGuru,
      }).then(guru => {
        navigate("/modalGuru");
      }).catch(err => {
        console.log('error:', err);
      })
    }catch(err){
      console.log(err);
    }
}

  return (
      <div className="container-regisGuru">
        <div className="content-regisGuru">
          <div className="back">
            <Link to="/regisMember"><i className="fa-solid fa-arrow-left"></i></Link>
          </div>
          <h4>Registrasi Sebagai Guru</h4>
          <form onSubmit={addGuru}>
            <div className="top">
              <input value={nameGuru} onChange={(e) => setNameGuru(e.target.value)} type="text" name="nameGuru"  placeholder="Nama Lengkap..."/>
              <input value={emailGuru} onChange={(e) => setEmailGuru(e.target.value)} type="email" name="emailGuru"  placeholder="Email/WA/Nomor HP"/>
            </div>
            <div className="middle">
              <input value={schoolGuru} onChange={(e) => setSchoolGuru(e.target.value)} type="text" name="schoolGuru" placeholder="Sekolah/Pendidikan terakhir"/>
            </div>
            <div className="middle-guru">
              <input value={teachingHistory} onChange={(e) => setTeachingHistory(e.target.value)} type="text" name="teachingHistory" placeholder="Riwayat Mengajar..."/>
              <input value={masteredLearning} onChange={(e) => setMasteredLearning(e.target.value)} type="text" name="masteredLearning" placeholder="Pelajaran Dikuasai..."/>
            </div>
            <div className="bottom">
              <div className="radioInput">
                <input value="Male" checked={genderGuru === "Male"} onChange={onOptionChange} type="radio" />Male
                <input value="Female" checked={genderGuru === "Female"} onChange={onOptionChange} type="radio" />Female
              </div>
              <div className="pass">
                <input value={passGuru} onChange={(e) => setPassGuru(e.target.value)} type="password" name="passGuru" autoComplete='on' placeholder="Password"/>
              </div>
            </div>
            <div className="btn-submit">
              <button type='submit' className="submit-regisGuru">Submit</button>
            </div>
          </form>
        </div>
      </div>
  );
}
