import 'bootstrap/dist/css/bootstrap.css'



const Footer = () =>{
    return(
        <div className='bg-dark d-flex footerstyle' style={{zIndex:'10', minWidth:'100%'}}>
            <div><p className='text-white fs-1' style={{fontFamily:'sans-serif'}}>Todos los derechos reservados. 2024</p></div>
        </div>
    );
};

export default Footer;