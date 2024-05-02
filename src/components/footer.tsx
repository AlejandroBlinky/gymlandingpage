import 'bootstrap/dist/css/bootstrap.css'



const Footer = () =>{
    return(
        <div className='footer bg-dark footerstyle d-flex justify-content-center align-items-center' style={{zIndex:'10',position:'absolute', minWidth:'100%'}}>
            <div><p className='text-white fs-1'>Todos los derechos reservados. 2024</p></div>
        </div>
    );
};

export default Footer;