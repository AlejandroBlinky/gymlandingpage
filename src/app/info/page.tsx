import 'bootstrap/dist/css/bootstrap.css'
import backgroundImage from '../../img/backgroundimage.jpg'
import Navbar from '@/components/navbar';
import SocialMedia from '@/components/socialmedia';

export default function Info() {

     
    return (
        
        
      <main style={{backgroundImage: `url(${backgroundImage.src})`,backgroundSize:'cover',backgroundPosition: 'center',minHeight: '100vh',position: 'absolute', minWidth:'100%'}}>
      <div className='infopagestylebackgroundoverlay'></div>
        
        
        <Navbar></Navbar>
  
        <div className='infocontainer'>
            <p className='text-white infop' style={{zIndex:'10'}}>¡Bienvenido a [Nombre del Gimnasio]! Somos más que un gimnasio; somos una comunidad dedicada a tu bienestar. Con equipos de vanguardia y entrenadores expertos, te ayudamos a alcanzar tus metas fitness. Además, ofrecemos clases de yoga, pilates y más para equilibrar cuerpo y mente. Únete a nosotros y descubre tu mejor versión.</p>
        </div>
        
        <SocialMedia></SocialMedia>
        

        <ul>
            <li><img></img></li>
        </ul>
      </main>
      
     
    );
  }
  