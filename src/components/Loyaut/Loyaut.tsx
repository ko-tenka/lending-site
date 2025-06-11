import './Loyaut.css'
import Logo from '../../../public/image.png'
import Telegramm from '../../../public/telegram.png'
import Whatsapp from '../../../public/whatsapp.png'
export default function Loyaut() {
  return (
    <div className='loyaut_conteiner'>
        <div className='loyaut_logocontent'>
            <img className='loyaut__logo' src={Logo} alt="Логотип" />
            <p className='loyaut__logotxt'>Лендинги под рекламу</p>
        </div>
        <div>
            <a href="#">
                <img className='loyaut__icon' src={Telegramm} alt="Telegramm" />
            </a>
            <a href="#">
                <img className='loyaut__icon' src={Whatsapp} alt="Whatsapp" />
             </a>
             <a href="tel:+79313360008">
             +79313360008
             </a>
         </div>
    </div>
  )
}
