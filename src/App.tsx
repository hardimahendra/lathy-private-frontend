
import { Routes, Route } from 'react-router-dom';
import { Index } from './pages/Index';
import { Home } from './pages/MainPages/Home';
import { Profil } from './pages/MainPages/Profil';
import { Galery } from './pages/MainPages/Galery';
import { DaftarGuru } from './pages/MainPages/DaftarGuru';
import { Contacts } from './pages/MainPages/Contacts';

import { Login } from './pages/Login/Login';
import { RegisMember } from './pages/Register/RegisMember';

import { RegisSiswa } from './components/Register/RegisSiswa';
import { RegisGuru } from './components/Register/RegisGuru';

// import { Dashboard } from './pages/dashboard/Dashboard';

import {NotFound} from './pages/notFoundPages/NotFound';

// import {UserList} from "./components/Users/UserList";
// import {AddUser} from "./components/Users/AddUser";
// import {EditUser} from "./components/Users/EditUser";

import { ModalSiswa } from './components/Modal/RegisterModal/ModalSiswa';
import { ModalGuru } from './components/Modal/RegisterModal/ModalGuru';


function App() {
    return (
    <>
          <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/home" element={<Home />} />
              <Route path="/profil" element={<Profil />} />
              <Route path="/galery" element={<Galery/>} />
              <Route path="/daftarguru" element={<DaftarGuru />} />
              <Route path="/contacts" element={<Contacts />} />
              
              <Route path="/login" element={<Login />} />
              <Route path="/regisMember" element={<RegisMember />} />
              
              <Route path="/regisSiswa" element={<RegisSiswa />} />
              <Route path="/regisGuru" element={<RegisGuru />} />

              <Route path="/modalSiswa" element={<ModalSiswa />} />
              <Route path="/modalGuru" element={<ModalGuru />} />


              {/* <Route path="/dashboard" element={<Dashboard/>} /> */}

              <Route path="/notfound" element={<NotFound />} />
            </Routes>
            {/* <Routes>
              <Route path="/" element={<UserList/>}/>
              <Route path="/add" element={<AddUser/>}/>
              <Route path="/edit/:id" element={<EditUser/>}/>
            </Routes> */}
    </>
  )
}

export default App
