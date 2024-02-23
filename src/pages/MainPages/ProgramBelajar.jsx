import { useState } from 'react';

const ProgramBelajar = () => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className="flex justify-center items-center w-full h-full py-4">
        <div className="flex text-white justify-center items-center w-[50%]">
          <div className="flex flex-column items-center justify-center">
            <h1 className="text-lg font-bold">Program Les Private</h1>
            <div className="flex flex-row flex-wrap justify-between items-center gap-1 w-full  my-4 p-2">
              <button className="flex justify-around items-center gap-4 border-b-2 hover:border-orange-500 transition-all duration-100 w-[150px] h-[40px]" onClick={() => setIndex(0)}>
                SD
              </button>
              <button className="flex justify-around items-center gap-4 border-b-2 hover:border-orange-500 transition-all duration-100 w-[150px] h-[40px] " onClick={() => setIndex(1)}>
                SMP
              </button>
              <button className="flex justify-around items-center gap-4 border-b-2 hover:border-orange-500 transition-all duration-100 w-[150px] h-[40px] " onClick={() => setIndex(2)}>
                SMA
              </button>
              <button className="flex justify-around items-center gap-4 border-b-2 hover:border-orange-500 transition-all duration-100 w-[150px] h-[40px] " onClick={() => setIndex(3)}>
                Kuliah
              </button>
            </div>
            <div className="flex flex-column text-left pt-2 gap-2" hidden={index != 0}>
              <h1 className="font-semibold pb-2">Jenjang Sekolah Dasar</h1>
              <p>
                Buat adek-adek yang lagi ngejar pelajaran SD, pasti ngerasain kan betapa kompleks dan susahnya pelajarannya sekarang? Gak bisa dipungkiri, pelajaran SD juga makin tricky, apalagi dengan kurikulum terbaru yang kadang bikin
                pusing. Ada matematika yang mungkin bikin kalian mikir keras, bahasa Indonesia yang minta fokus, dan masih banyak lagi. Buat adek-adek yang merasa kesulitan di kelas, kita paham kok, dan gak usah khawatir, ada cara buat
                ngatasin kesulitan belajar ini.
              </p>
              <p>
                Buat yang lagi ngerasa kesulitan belajar komunal di kelas, coba deh manfaatin layanan guru privat di LapakGuruPrivat.com. Gak perlu khawatir lagi nyari guru privat yang pas buat adek-adek. Di sini, bisa pilih sendiri guru
                privat untuk pelajaran SD yang sesuai sama kebutuhan. Enaknya lagi, bisa belajar online atau offline, dan adek-adek juga bisa pilih sendiri waktu yang nyaman. Jadi, gak perlu lagi deh mikirin kesulitan belajar di kelas,
                karena LapakGuruPrivat.com siap bantu adek-adek buat ngejar pelajaran SD dengan lebih enjoy!
              </p>
              <div className="flex flex-row pl-4  gap-5">
                <ul className="list-disc">
                  <li>Matematik</li>
                  <li>IPA </li>
                  <li>IPS</li>
                  <li>Pendidikan Kewarganegaraan</li>
                </ul>
                <ul className="list-disc">
                  <li>Bahasa Indonesia</li>
                  <li>Bahasa Inggris</li>
                  <li>Seni Budaya</li>
                  <li>Pendidikan Agama Islam</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-column text-left pt-2 gap-2" hidden={index != 1}>
              <h1 className="font-semibold pb-2">Jenjang Sekolah Menengah Pertama</h1>
              <p>
                Buat Kamu yang lagi ngarungi lautan pelajaran SMP, pasti tahu betapa susahnya mengejar kurikulum terbaru yang makin kompleks, kan? Nah, kita nggak bisa ngehindar dari kesulitan belajar ini. Mulai dari matematika yang bikin
                mikir keras, fisika yang pusingin kepala, sampe bahasa asing yang terkadang bawa-bawa kamus. Emang, SMP nggak main-main, deh! Belum lagi tugas-tugas yang numpuk kayak gunung, bisa jadi bikin kepala berasa mau meledak. Jangan
                khawatir, kita semua ngalamin hal yang sama. Semangat aja, karena solusinya ada!
              </p>
              <p>
                Bagi Kamu yang ngerasa kesusahan belajar di kelas yang komunal banget, sekarang Kamu bisa manfaatin layanan guru privat di LapakGuruPrivat.com, lho! Enggak usah mikirin lagi tuh suasana kelas yang rame, guru yang nggak fokus
                ke Kamu, atau tumpukan tugas yang bikin bingung. Di sini, Kamu bisa cari guru privat SMP sesuai kebutuhan Kamu. Enaknya lagi, bisa belajar sesuai tempo Kamu sendiri. Jadi, yuk manfaatin kesempatan buat ngejar pelajaran SMP
                tanpa pusing lagi
              </p>
              <div className="flex flex-row pl-4  gap-5">
                <ul className="list-disc">
                  <li>Matematik</li>
                  <li>IPA </li>
                  <li>IPS</li>
                  <li>Pendidikan Kewarganegaraan</li>
                </ul>
                <ul className="list-disc">
                  <li>Bahasa Indonesia</li>
                  <li>Bahasa Inggris</li>
                  <li>Keterampilan TIK</li>
                  <li>Pendidikan Agama Islam</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-column text-left pt-2 gap-2" hidden={index != 2}>
              <h1 className="font-semibold pb-2">Jenjang Sekolah Menengah Atas</h1>
              <p>
                dengan tujuan membantu siswa SMA meraih prestasi akademik yang gemilang serta sukses dalam menghadapi ujian penting seperti UTBK SNBT. Kami menyadari betapa pentingnya persiapan yang matang untuk memasuki perguruan tinggi
                favorit seperti UI dan ITB. Oleh karena itu, kami menyediakan layanan Guru Les Privat SMA dan UTBK SNBT yang dirancang khusus untuk memberikan bantuan yang dibutuhkan oleh setiap siswa.
              </p>
              <p>
                siswa akan mendapatkan pembelajaran intensif dari guru-guru berpengalaman yang ahli dalam materi pelajaran SMA dan persiapan SNBT. Kami tidak hanya fokus pada pemahaman konsep-konsep akademis, tetapi juga memberikan strategi
                pembelajaran yang efektif agar siswa siap menghadapi soal-soal ujian dengan percaya diri. Dengan pendekatan personal dan dukungan penuh dari tim kami, siswa dijamin mendapatkan bimbingan yang terbaik untuk meraih prestasi di
                sekolah dan mencapai kesuksesan dalam ujian SNBT.
              </p>
              <div className="flex flex-row pl-4  gap-5">
                <ul className="list-disc">
                  <li>Penalaran Matematik</li>
                  <li>Fisika </li>
                  <li>Kimia</li>
                  <li>Biologi</li>
                  <li>Test Potensi Skolastik</li>
                  <li>Sekolah Kedinasan</li>
                </ul>
                <ul className="list-disc">
                  <li>Literasi Bahasa Indonesia</li>
                  <li>Literasi Bahasa Inggris</li>
                  <li>Sosiologi</li>
                  <li>Geografi</li>
                  <li>Ekonomi</li>
                  <li>Sejarah</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-column text-left pt-2 gap-2 " hidden={index != 3}>
              <h1 className="font-semibold pb-2">Jenjang Diploma/Sarjana</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deleniti, quasi nam laborum ipsa quae incidunt blanditiis facere consequuntur veritatis, mollitia perspiciatis asperiores omnis architecto nulla, voluptatibus
                aperiam quod eligendi earum aspernatur! Placeat, voluptas distinctio voluptatem commodi quas porro rem ullam soluta. Illo tempora saepe deserunt laudantium dignissimos sit repellendus, facere eius unde eveniet tenetur
                consectetur beatae, eligendi porro quod repellat blanditiis nemo ipsa voluptatum assumenda totam ducimus quidem quia. Illum, placeat animi dolore cumque perferendis labore, nihil reprehenderit vel unde, omnis assumenda. Eius
                est excepturi, cumque neque temporibus reiciendis distinctio at magnam unde ut vitae consequuntur inventore totam fugiat!
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ipsa? Ullam accusantium vel provident ducimus, laborum doloremque hic repudiandae in praesentium porro eos ex ut nam vitae omnis, voluptates tempore.</p>
              <div className="flex flex-row pl-4  gap-5">
                <ul className="list-disc">
                  <li>Pengetahuan Kuantitatif</li>
                  <li>Kemampuan Penalaran Umum</li>
                  <li>Pengetahuan dan Pemahaman Umum</li>
                  <li>Kemampuan Memahami bacaan dan menulis</li>
                  <li>Saintek</li>
                </ul>
                <ul className="list-disc">
                  <li>Soshum</li>
                  <li>Literasi Bahasa Indonesia</li>
                  <li>Literasi Bahasa Inggris</li>
                  <li>SIMAK UI</li>
                  <li>UTUL UGM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramBelajar;
