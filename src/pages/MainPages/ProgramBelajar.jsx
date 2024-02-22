import { useState } from 'react';

const ProgramBelajar = () => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className="flex text-white justify-center items-center w-[50%]">
        <div className="flex flex-column items-center justify-center">
          <h1 className="text-lg font-bold">Program Les Private</h1>
          <div className="flex flex-row flex-wrap justify-between items-center gap-1 w-full  my-4 p-2">
            <button className={`flex justify-around items-center gap-4 hover:border-b-2 hover:border-orange-500 transition-all duration-100 w-[150px] h-[40px] `} onClick={() => setIndex(0)}>
              SD
            </button>
            <button className="flex justify-around items-center gap-4 hover:border-b-2 hover:border-orange-500 transition-all duration-100 w-[150px] h-[40px] " onClick={() => setIndex(1)}>
              SMP
            </button>
            <button className="flex justify-around items-center gap-4 hover:border-b-2 hover:border-orange-500 transition-all duration-100 w-[150px] h-[40px] " onClick={() => setIndex(2)}>
              SMA
            </button>
            <button className="flex justify-around items-center gap-4 hover:border-b-2 hover:border-orange-500 transition-all duration-100 w-[150px] h-[40px] " onClick={() => setIndex(3)}>
              Kuliah
            </button>
          </div>
          <div className="flex flex-column text-left pt-2" hidden={index != 0}>
            <h1 className="font-semibold pb-2">Jenjang Sekolah Dasar</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deleniti, quasi nam laborum ipsa quae incidunt blanditiis facere consequuntur veritatis, mollitia perspiciatis asperiores omnis architecto nulla, voluptatibus
              aperiam quod eligendi earum aspernatur! Placeat, voluptas distinctio voluptatem commodi quas porro rem ullam soluta. Illo tempora saepe deserunt laudantium dignissimos sit repellendus, facere eius unde eveniet tenetur
              consectetur beatae, eligendi porro quod repellat blanditiis nemo ipsa voluptatum assumenda totam ducimus quidem quia. Illum, placeat animi dolore cumque perferendis labore, nihil reprehenderit vel unde, omnis assumenda. Eius
              est excepturi, cumque neque temporibus reiciendis distinctio at magnam unde ut vitae consequuntur inventore totam fugiat!
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ipsa? Ullam accusantium vel provident ducimus, laborum doloremque hic repudiandae in praesentium porro eos ex ut nam vitae omnis, voluptates tempore.</p>
            <ul>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          </div>
          <div className="flex flex-column text-left pt-2" hidden={index != 1}>
            <h1 className="font-semibold pb-2">Jenjang Sekolah Menengah Pertama</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deleniti, quasi nam laborum ipsa quae incidunt blanditiis facere consequuntur veritatis, mollitia perspiciatis asperiores omnis architecto nulla, voluptatibus
              aperiam quod eligendi earum aspernatur! Placeat, voluptas distinctio voluptatem commodi quas porro rem ullam soluta. Illo tempora saepe deserunt laudantium dignissimos sit repellendus, facere eius unde eveniet tenetur
              consectetur beatae, eligendi porro quod repellat blanditiis nemo ipsa voluptatum assumenda totam ducimus quidem quia. Illum, placeat animi dolore cumque perferendis labore, nihil reprehenderit vel unde, omnis assumenda. Eius
              est excepturi, cumque neque temporibus reiciendis distinctio at magnam unde ut vitae consequuntur inventore totam fugiat!
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ipsa? Ullam accusantium vel provident ducimus, laborum doloremque hic repudiandae in praesentium porro eos ex ut nam vitae omnis, voluptates tempore.</p>
            <ul>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          </div>
          <div className="flex flex-column text-left pt-2" hidden={index != 2}>
            <h1 className="font-semibold pb-2">Jenjang Sekolah Menengah Atas</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deleniti, quasi nam laborum ipsa quae incidunt blanditiis facere consequuntur veritatis, mollitia perspiciatis asperiores omnis architecto nulla, voluptatibus
              aperiam quod eligendi earum aspernatur! Placeat, voluptas distinctio voluptatem commodi quas porro rem ullam soluta. Illo tempora saepe deserunt laudantium dignissimos sit repellendus, facere eius unde eveniet tenetur
              consectetur beatae, eligendi porro quod repellat blanditiis nemo ipsa voluptatum assumenda totam ducimus quidem quia. Illum, placeat animi dolore cumque perferendis labore, nihil reprehenderit vel unde, omnis assumenda. Eius
              est excepturi, cumque neque temporibus reiciendis distinctio at magnam unde ut vitae consequuntur inventore totam fugiat!
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ipsa? Ullam accusantium vel provident ducimus, laborum doloremque hic repudiandae in praesentium porro eos ex ut nam vitae omnis, voluptates tempore.</p>
            <ul>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          </div>
          <div className="flex flex-column text-left pt-2 " hidden={index != 3}>
            <h1 className="font-semibold pb-2">Jenjang Diploma/Sarjana</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deleniti, quasi nam laborum ipsa quae incidunt blanditiis facere consequuntur veritatis, mollitia perspiciatis asperiores omnis architecto nulla, voluptatibus
              aperiam quod eligendi earum aspernatur! Placeat, voluptas distinctio voluptatem commodi quas porro rem ullam soluta. Illo tempora saepe deserunt laudantium dignissimos sit repellendus, facere eius unde eveniet tenetur
              consectetur beatae, eligendi porro quod repellat blanditiis nemo ipsa voluptatum assumenda totam ducimus quidem quia. Illum, placeat animi dolore cumque perferendis labore, nihil reprehenderit vel unde, omnis assumenda. Eius
              est excepturi, cumque neque temporibus reiciendis distinctio at magnam unde ut vitae consequuntur inventore totam fugiat!
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ipsa? Ullam accusantium vel provident ducimus, laborum doloremque hic repudiandae in praesentium porro eos ex ut nam vitae omnis, voluptates tempore.</p>
            <ul>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramBelajar;
