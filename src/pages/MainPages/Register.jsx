import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { toast, Toaster } from 'react-hot-toast';
const Users = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const addUser = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post('https://lathy-private-backend.vercel.app/users/register', {
          username,
          email,
          password,
        })
        .then(() => {
          alert(`Selamat anda berhasil daftar !!`);
          setUsername('');
          setEmail('');
          setPassword('');
          navigate('/login');
        })
        .catch((err) => {
          toast.error('error:', err);
        });
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center h-[100vh] w-full my-5xl text-white">
      <div className="relative flex flex-column justify-center items-center text-center h-[500px] w-[500px] shadow-lg rounded-lg">
        <div className="absolute flex justify-center items-center top-2 left-3 h-[50px] w[50px]">
          <Link className="flex justify-center items-center rounded-circle p-3  h-full w-full border-none  hover:bg-orange-500 hover:text-blue-300 transition-all duration-200 " to="/home">
            <FaArrowLeft />
          </Link>
        </div>
        <h4 className="text-lg font-bold py-4">Registrasi User</h4>
        <Toaster position="top-center" />
        <form onSubmit={addUser}>
          <div className="flex flex-column gap-3">
            <input className=" w-[300px] h-[40px] rounded-lg text-black px-2" value={username} onChange={(e) => setUsername(e.target.value)} type="text" name="username" placeholder="Nama Lengkap..." required />
            <input className=" w-[300px] h-[40px] rounded-lg text-black px-2" value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email/WA/Nomor HP" required />
            <input className=" w-[300px] h-[40px] rounded-lg text-black px-2" value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="passGuru" autoComplete="on" placeholder="Password" required />
          </div>
          <div className="flex justify-center items-center py-4 ">
            <button type="submit" className="rounded-lg p-2  w-1/2 border-none  hover:bg-orange-500 hover:text-blue-300 transition-all duration-200 ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Users;
