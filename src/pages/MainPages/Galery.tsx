import Layouts from '../../components/Layouts/index';

import documentasi from "../../data/LocalData.json";

export function Galery(){
    const dataDocumentasi = documentasi.documentasiKegiatan;
    return(
        <>
    <Layouts>
        <div className="container-galeri">
            <div>
                <h3>Dokumentasi</h3>
            </div>
            <div className="galeri-foto">
                {dataDocumentasi.map((data) => (
                    <div className="foto" key={data.id}>
                        <img src={data.image} />
                        <p>{data.content}</p>
                    </div>
                ))}
            </div>
            <div className="galeri-video">
                <div className="video">
                <img src="./img/galeri/video/vid-1.jpg" alt="vid" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellat!</p>
                </div>
                <div className="video">
                <img src="./img/galeri/video/vid-1.jpg" alt="vid" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellat!</p>
                </div>
            </div>
        </div>
    </Layouts>
    </>
    )
}