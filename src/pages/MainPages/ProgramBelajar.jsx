import { useState } from 'react';
import {programBelajar} from '../../data/LocalData.json'
const ProgramBelajar = () => {
  const dataProgram = programBelajar;
  const [index, setIndex] = useState(1);
  return (
    <>
      <div className="flex justify-center items-center w-full h-full py-4">
        <div className="flex text-white justify-center items-center w-[50%]">
          <div className="flex flex-column items-center justify-center">
            <h1 className="text-lg font-bold">Program Les Private</h1>
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
                <div className="flex flex-column text-justif pt-2 gap-2" key={item.id} hidden={index != item.id}>
                  <h1 className="font-semibold pb-2">{item.jenjang}</h1>
                  <p className="indent-10">{item.desc1}</p>
                  <p className="indent-10">{item.desc2}</p>
                </div>

            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramBelajar;
