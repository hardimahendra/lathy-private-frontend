import { useState } from 'react';
import {programBelajar} from '../../data/LocalData.json'
const ProgramBelajar = () => {
  const dataProgram = programBelajar;
  const [index, setIndex] = useState(1);
  return (
    <>
      <div className="flex justify-center items-center sm:h-svh  pt-28">
        <div className="flex text-white justify-center  items-center w-[75%] sm:w-[65%] ">
          <div className="flex flex-column items-center justify-center">
            <h1 className="text-lg font-semibold">Program Les Private</h1>
            <div className="flex flex-row flex-wrap  sm:justify-around justify-center items-center gap-2 w-full  my-4 p-2">
              {dataProgram.map((item) => (
                <>
                  <button onClick={() => setIndex(item.id)} className="flex justify-around items-center gap-4 border-b-2 hover:border-orange-500 hover:text-orange-500 transition-all duration-75 w-[150px] h-[40px]">
                    {item.title}
                  </button>
                </>
              ))}
            </div>
            {dataProgram.map((item) => (
              <div className="flex flex-column text-justif pt-2 gap-2 shadow-lg p-4" key={item.id} hidden={index != item.id}>
                <h1 className="font-semibold pb-2">{item.jenjang}</h1>
                <p className="indent-10 text-justify ">{item.desc1}</p>
                <p className="indent-10 text-justify">{item.desc2}</p>
                <ul className="sm:h-[100px] w-full flex flex-column flex-wrap  ">
                  <li>{item.pelajaran.mapel1}</li>
                  <li>{item.pelajaran.mapel2}</li>
                  <li>{item.pelajaran.mapel3}</li>
                  <li>{item.pelajaran.mapel4}</li>
                  <li>{item.pelajaran.mapel5}</li>
                  <li>{item.pelajaran.mapel6}</li>
                  <li>{item.pelajaran.mapel7}</li>
                  <li>{item.pelajaran.mapel8}</li>
                  <li>{item.pelajaran.mapel9}</li>
                  <li>{item.pelajaran.mapel10}</li>
                  <li>{item.pelajaran.mapel11}</li>
                  <li>{item.pelajaran.mapel12}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramBelajar;
