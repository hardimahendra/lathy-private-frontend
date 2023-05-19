import { Link } from 'react-router-dom';
export function Navbar(){
    return(
        <>
            <div className="header-nav">
                <h3>Lathy Private</h3> 
            </div>
                <nav className="container-navbar">
                <div className="navbar-wrapper">
                    <div className="brand">
                        <Link to="/">
                            <img src="./assets/icons/Lathy-logo.png" alt="brand" />
                        </Link>
                    </div>
                    <div className="navbar-left">
                        <Link aria-current="page" to="/home">Home</Link>
                        <Link to="/profil">Profil</Link>
                        <Link to="/galery">Galeri</Link>
                        <Link to="/daftarGuru">Daftar Guru</Link>
                        <Link to="/contacts">Kontak</Link>
                    </div>
                    <div className="navbar-right">
                        <Link to="/login">Login</Link>
                        <Link to="/regisMember">Sign Up</Link>
                    </div>
                    <div className="navbar-toggle">
                        <nav id="content-toggle">
                            <Link aria-current="page" to="/home">Home</Link>
                            <Link to="/profil">Profil</Link>
                            <Link to="/galery">Galeri</Link>
                            <Link to="/daftarGuru">Daftar Guru </Link>
                            <Link to="/contacts">Kontak</Link>
                            <div className="log-reg">
                                <Link className="login" to="/login">Login</Link>
                                <Link className="signup" to="/regisMember">Sign Up</Link>
                            </div>
                        </nav>
                        <span>
                            <i id="open" onClick={() => navOpen()} className="fa-solid fa-bars-staggered"></i>
                            <i id="close" onClick={() => navClose()} className="fa-solid fa-xmark"></i>
                        </span>
                    </div>
                </div>
            </nav>
        </>
    )
    function navOpen(){
        const navOpen = document.getElementById('open') as HTMLElement;
        const navClose = document.getElementById('close') as HTMLElement;
        const navContent = document.getElementById('content-toggle') as HTMLElement;
        if(navOpen === null){
            return
        }else if(navClose === null){
            return
        }
        navOpen.style.display = 'none'
        navClose.style.display = 'block';
        navContent.style.display = 'flex'
    }
    function navClose(){
        const navOpen = document.getElementById('open') as HTMLElement;
        const navClose = document.getElementById('close') as HTMLElement;
        const navContent = document.getElementById('content-toggle') as HTMLElement;
        if(navOpen === null){
            return
        }else if(navClose === null){
            return
        }
        navOpen.style.display = 'block'
        navClose.style.display = 'none';
        navContent.style.display = 'none'
    }
    
}
