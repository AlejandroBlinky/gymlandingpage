import instlogo from '../img/instagram.png';
import facebooklogo from '../img/facebook.png';
import whatsapplogo from '../img/whatsapp.png';



const SocialMedia = () => {
    return (
      <div className='SocialMediaContainer' style={{backgroundColor:'rgba(255,255,255,0.5)', borderRadius:'10vh',zIndex:'10'}}>
          
  
              <div className='socialmediadiv'><a href=''><img className='socialmedialogos' src={whatsapplogo.src} alt='whats'></img></a>
               
  
               <div className='socialmediadiv'><a  href='https://www.instagram.com/'><img className='socialmedialogos' src={instlogo.src} alt='insta'></img></a>
               </div>
  
               <div className='socialmediadiv'><a href='https://www.facebook.com/'><img className='socialmedialogos' src={facebooklogo.src} alt='facebook'></img></a>
              </div>
  
              
             </div>
             
          </div>
     
    )
  }
  
  export default SocialMedia