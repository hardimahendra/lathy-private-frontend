import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaWhatsapp, FaXmark, FaBars } from 'react-icons/fa6';
const index = () => {
  const [menuOpen, setMenuIsOpen] = useState(false);
  const toggleMenu = () => {
    setMenuIsOpen(!menuOpen);
  };
  const navItem = [
    { id: 1, path: '/program', link: 'Program Belajar' },
    { id: 2, path: '/alumni', link: 'Alumni' },
    { id: 3, path: '/paket', link: 'Paket Program' },
    { id: 4, path: '/profil', link: 'Tentang Kami' },
  ];
  return (
    <>
      <nav className="bg-transparent p-3 fixed top-0 left-0 right-0 shadow-lg z-50">
        <div className="px-3 mx-auto flex justify-between items-center">
          {/* Large size */}
          <ul className="lg:flex gap-12 items-center text-lg hidden">
            <NavLink className="flex justify-center items-center gap-2 text-orange-500 font-semibold" to="/">
              <img className="w-10" src="./icons/maskot.png" alt="brand" />
              <h1>Lathy Private</h1>
            </NavLink>
            {navItem.map(({ path, link }) => (
              <li className="text-white text-decoration-none" key={path}>
                <NavLink className={({ isActive, isPending }) => `tranition-all duration-75 hover:text-orange-500 hover:border-t-2 hover:border-orange-500 ${isActive ? 'active' : isPending ? 'pending' : ''}`} to={path}>
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* medium & small size*/}
          <div className="flex w-auto gap-4 lg:hidden">
            <NavLink to="/">
              <img className="w-10" src="./icons/maskot.png" alt="brand" />
            </NavLink>
            <button onClick={toggleMenu} className="cursor-pointer">
              {menuOpen ? <FaXmark className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>
          </div>
          <div>
            <ul className={`lg:hidden h-full p-4 mt-[72px] sm:bg-[#00546b]  sm:bg-opacity-50 ${menuOpen ? 'fixed top-0 left-0 w-auto transition-all ease-out duration-150 shadow-lg' : 'hidden'}`}>
              {navItem.map(({ path, link }) => (
                <li className="text-white py-4 " key={path}>
                  <NavLink className="text-sm transition-all duration-75 hover:border-b-2 hover:border-orange-500 hover:text-orange-500" to={path}>
                    {link}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-white flex gap-4 items-center">
            <Link to="https://api.whatsapp.com/send?phone=%2B6285892759932" className="hover:text-green-500 " target="_blank">
              <FaWhatsapp />
            </Link>
            <NavLink to="/daftar" className=" lg:hidden px-6 py-2 font-medium rounded hover:bg-orange-500 hover:text-blue-300 transition-all duration-200">
              Daftar
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default index;
