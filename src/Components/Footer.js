import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import Delta from '../resources/Brands/Delta.svg'
import Banner from '../resources/Brands/Banner.png'
import Grainger from '../resources/Brands/Grainger.png'
import LovatoElectric from '../resources/Brands/LovatoElectric.webp'
import sinetamer from '../resources/Brands/sinetamer.png'
import disoric from '../resources/Brands/disoric.png'
import maruson from '../resources/Brands/maruson.png'

const Footer = () => {
    return(
        <div className="flex flex-col w-full bg-gray-400 p-8">
            <div className="hidden lg:flex lg:flex-wrap lg:flex-grow lg:items-center lg:justify-center">
                <img src={Delta} className="h-8 m-5"/>
                <img src={Banner} className="h-8 m-5" />
                <img src={Grainger} className="h-8 m-5" />
                <img src={LovatoElectric} className="h-8 m-5" />
                <img src={sinetamer} className="h-8 m-5" />
                <img src={disoric} className="h-8 m-5" />
                <img src={maruson} className="h-8 m-5" />
            </div>
            <div className="flex flex-wrap flex-col items-center justify-center">
                <div className="text-center">
                    <a href="https://www.facebook.com/deproinv"><Icon icon={faFacebook} className="text-white text-3xl m-2 hover:text-blue-600 duration-500"/></a>
                    <Icon icon={faInstagram} className="text-white text-3xl m-2 hover:text-red-500 duration-500"/>
                    <Icon icon={faTwitter} className="text-white text-3xl m-2 hover:text-blue-400 duration-500"/>
                </div>
                <p className="text-white text-center">DEPROINV SA DE CV</p>
                <p className="text-white text-center text-sm">JARDINES DE GUADALUPE, CALLE LAS ROSAS #22 ANTIGUO CUSCATLAN LA LIBERTAD (EL SALVADOR)</p>
            </div>
        </div>
    )
}

export default Footer;