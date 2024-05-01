import Navbar from '@/components/navbar';
import 'bootstrap/dist/css/bootstrap.css'
import backgroundImage from '../img/backgroundimage.jpg'
import SocialMedia from '@/components/socialmedia';

export default function Home() {

     
  return (
    <main style={{backgroundImage: `url(${backgroundImage.src})`,backgroundSize:'cover',backgroundPosition: 'center',minHeight: '100vh',position: 'absolute', minWidth:'100%'}}className="homepagestylebackground">
      <div className='homebackgroundoverlay '></div>
      <Navbar></Navbar>

      <div className='homepagecontainer'>
        <div className=''>
          <ul className='homepagelistcontainer' style={{backgroundColor:'rgba(255,255,255,0)'}}>
            <li className='homepagelistitem'>¡Transforma tu cuerpo hoy! Únete a nosotros y descubre tu mejor versión.</li>
            <li className='homepagelistitem'>En nuestro gimnasio, la comunidad se une en torno al sudor y el esfuerzo. Únete y forma parte de algo más grande.</li>
            <li className='homepagelistitem'>Haz de cada día un logro. Únete a nuestra comunidad y convierte tus sueños fitness en realidad.</li>
            <li className='homepagelistitem'>Conoce a nuestro equipo de expertos: tu guía personal hacia el éxito fitness.</li>
            <li className='homepagelistitem'>Desde máquinas cardiovasculares hasta pesas libres, tenemos todo lo que necesitas para un entrenamiento completo.</li>
            
          </ul>
        </div>
      </div>
      <SocialMedia></SocialMedia>
    </main>
  );
}
