import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
