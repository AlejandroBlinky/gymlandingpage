import 'bootstrap/dist/css/bootstrap.css';


const Navbar = () => {
    return(
        <div className="navbar shadow align-content-center">
          <a href="/" className="navbartitle">FITNESS GYM<img></img></a>
          <ul className='navbarlistcontainer'>
            <li className='navbarlistitem'><a href='/info' className='text-decoration-none text-white'>Sobre Nosotros</a></li>

           
          </ul>
        </div>
    );
};


export default Navbar;
