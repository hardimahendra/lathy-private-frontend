import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const loginIn = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post('/login', {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        navigate('/dashboard');
      }
    } catch (error) {
      if (error) {
        toast.error(data.error);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-[100vh] w-full my-5xl text-white  ">
      <div className="flex flex-column justify-center items-center text-center h-[500px] w-[500px] shadow-lg rounded-lg ">
        <div>
          <h1 className="text-xl font-bold">Login / Daftar</h1>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
        <form className="flex flex-column justify-center items-center" onSubmit={loginIn}>
          <div className="flex flex-column justify-center items-center mt-6">
            <input className="my-2 w-[300px] h-[40px] rounded-lg text-black px-2" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} type="text" placeholder="Email..." required />
            <input className="my-2 w-[300px] h-[40px] rounded-lg text-black px-2" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} type="password" placeholder="Password..." autoComplete="on" required />
            <button className="py-4">
              <Link className="text-decoration-underline " to="/notfound">
                Lupa Password?
              </Link>
            </button>
          </div>
          <div className="flex justify-center items-center w-[250px] h-[40px] gap-10 ">
            <button className="rounded-lg p-2 w-1/2 border-none  hover:bg-orange-500 hover:text-blue-300 transition-all duration-200  " type="submit">
              Login
            </button>
            <Link className="rounded-lg p-2  w-1/2 border-none  hover:bg-orange-500 hover:text-blue-300 transition-all duration-200  " to="/register">
              Daftar
            </Link>
          </div>
        </form>
        <div className="flex justify-center items-center w-[250px] h-[40px] gap-10 pt-10">
          <Link className="rounded-lg p-2  w-1/2 border-none  hover:bg-orange-500 hover:text-blue-300 transition-all duration-200  " to="/home">
            Batal
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
