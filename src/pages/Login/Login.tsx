import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const loginIn = async (e:any) => {
    e.preventDefault();
        try {
            await axios.post('http://localhost:5000/auth/login', {
              username:username,
              password:password
            })
        // navigate("/dashboard");
        console.log("Success")
      } catch (error) {
        if(error){
          setMsg(error);
        }
      }
    }
  
  return (
    <div className="container-login">
      <div className="content-login">
        <div>
          <h1>Login</h1>
        </div>
        <form onSubmit={loginIn}>
          <div className="login">
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" name="username" id="username" required/>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" autoComplete="on" required/>
            <button>
              <Link to="/notfound">Lupa Password</Link>
            </button>
          </div>
        <div className="submit-login">
          <Link  className="btn-login" type="submit" to="/notFound">Login</Link>
          <Link className="btn-login" to="/regisMember">Sign Up</Link>
        </div>
        </form>
        <div className="back-to-home">
          <Link className="back" to="/home">Batal</Link>
        </div>
      </div>
    </div>
    )
}
