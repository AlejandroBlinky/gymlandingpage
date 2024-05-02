import Navbar from '@/components/navbar';
import 'bootstrap/dist/css/bootstrap.css'
import backgroundImage from '../img/backgroundimage.jpg'
import SocialMedia from '@/components/socialmedia';
import gymbropic from '../img/gymbro.jpg'
import person1 from '../img/person1.jpg'
import equip1 from '../img/gymequip1.jpg'
import equip2 from '../img/gymequip2.jpg'
import equip3 from '../img/gymequip3.jpg'
import equip4 from '../img/gymequip4.jpg'
import Footer from '@/components/footer';


export default function Home() {

     
  return (
    <main style={{backgroundImage: `url(${backgroundImage.src})`,backgroundSize:'cover',backgroundPosition: 'center',minHeight: '100vh',position: 'absolute', minWidth:'100%'}}className="homepagestylebackground p-0">
      <div className='homebackgroundoverlay p-0'></div>
      <Navbar></Navbar>
     <div className='row homepagecontainer '>
      <div className='col homepagecol '>
          <ul className='homepagelistcontainer p-0' style={{backgroundColor:'rgba(255,255,255,0)'}}>
            <li className='homepagelistitem'><p>¡Transforma tu cuerpo hoy!</p></li>
            <div className='homepagelistitem fs-1'><p>Únete a nosotros y descubre tu mejor versión.</p></div>
            
         
            
          </ul>
        
      </div>
      
  
      <div className='col p-0 m-0' >
        
      <div className='text-white'></div>


      </div>
      </div>

      <div className='row homepagecontainer align-items-center justify-content-center'>
        <div className='col'> <div className='homeimgidv'><img className='homepageimg' src={gymbropic.src}></img></div></div>
        <div className='text-white col homepagelistitem'><p className=' text-center'>Haz de cada dia un logro!</p></div>
      </div>

      <div className='row homepagecontainer align-items-center justify-content-center'>
        <div className='col text-white homepagelistitem' style={{fontSize:'5em'}}><p>Conoce a nuestro equipo de profesionales.</p><div className='d-flex justify-content-evenly align-items-center'><a className='btn btn-outline-info p-5 fs-1'>About Us</a> <p className='text-center fs-3'>Mas informacion detallada.</p></div></div>
        <div className='col '>
          <div className='row'>
            <div className='col text-white d-flex flex-column justify-content-center align-items-center'><img className='teampersonimg shadow border border-4 border-dark' src={person1.src}></img><p className='teampersonname'>Jorge Lopez</p></div>
            <div className='col text-white d-flex flex-column justify-content-center align-items-center'><img className='teampersonimg shadow border border-4 border-dark' src={person1.src}></img><p className='teampersonname'>Jorge Lopez</p></div>
            <div className='col text-white d-flex flex-column justify-content-center align-items-center'><img className='teampersonimg shadow border border-4 border-dark' src={person1.src}></img><p className='teampersonname'>Jorge Lopez</p></div>
          </div>
          <div className='row mt-5'>
          <div className='col text-white d-flex flex-column justify-content-center align-items-center'><img className='teampersonimg shadow border border-4 border-dark' src={person1.src}></img><p className='teampersonname'>Jorge Lopez</p></div>
            <div className='col text-white d-flex flex-column justify-content-center align-items-center'><img className='teampersonimg shadow border border-4 border-dark' src={person1.src}></img><p className='teampersonname'>Jorge Lopez</p></div>
            <div className='col text-white d-flex flex-column justify-content-center align-items-center'><img className='teampersonimg shadow border border-4 border-dark' src={person1.src}></img><p className='teampersonname'>Jorge Lopez</p></div>
          </div>
        </div>
      </div>


      <div className='row homepagecontainer '>
        <div className='col text-white homepagelistitem'>
          <div className='row'>
            <div className='col'><img className='gymequipimg shadow m-4 ' src={equip1.src}></img> <img className='gymequipimg shadow m-1' src={equip2.src}></img></div>
            
          </div>
          <div className='row'>
            <div className='col'><img className='gymequipimg shadow m-4' src={equip3.src}></img> <img className='gymequipimg shadow m-1 ' src={equip4.src}></img></div>
           
          </div>
        </div>
        <div className='col text-white homepagelistitem' style={{fontSize:'4em', textShadow:'1px 1px 1px black'}}><p>Con nuestro equipamiento de gimnasio, encontrarás todo lo necesario para potenciar tu entrenamiento: desde máquinas cardiovasculares hasta equipos de fuerza. ¡Alcanza tus metas de fitness con nosotros!</p></div>
      </div>
      <SocialMedia></SocialMedia>
      <Footer></Footer>
    </main>
  );
}
