import Layouts from '../../components/Layouts/index';

import guru from "../../data/LocalData.json";

export function DaftarGuru() {
  const dataGuru = guru.daftarGuru;

  return (
    <>
    <Layouts>
      <div className="container-guru">
        <div>
          <h2>Daftar Guru</h2>
        </div>
        <div className="daftar-guru">
          {dataGuru.map((data) => (
            <div className="guru" key={data.id}>
            <div className="nama">{data.name}</div>
            <img src={data.image} alt="guru" />
            <div className="spesialis">{data.field}</div>
            <div className="pendidikan">{data.education}</div>
          </div>
          ))}
        </div>
      </div>
      </Layouts>
    </>
  );
}
