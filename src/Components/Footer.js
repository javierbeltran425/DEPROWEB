import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'

import Deproinv from '../resources/depro_logo.png'

const Footer = () => {
    return(
        <div className="flex flex-col w-full bg-gray-400 p-2">
            <div className="hidden lg:flex lg:flex-wrap lg:flex-grow lg:items-center lg:justify-center">
                <img src={Deproinv} className="h-24"/>
            </div>
            <div className="flex flex-wrap flex-col items-center justify-center">
            <p className="text-white text-center font-bold hover:text-red-600 duration-500">DEPROINV SA DE CV</p>
                <p className="text-white text-center text-sm">JARDINES DE GUADALUPE, CALLE LAS ROSAS #22 ANTIGUO CUSCATLAN LA LIBERTAD (EL SALVADOR)</p>
            </div>
            <div className="text-center">
                <a href="https://www.facebook.com/deproinv"><Icon icon={faFacebook} className="text-white text-3xl m-2 hover:text-blue-600 duration-500"/></a>
                <Icon icon={faInstagram} className="text-white text-3xl m-2 hover:text-red-500 duration-500"/>
                <a href="https://www.linkedin.com/company/deltas-proyectos-e-inversiones-sa-de-cv"><Icon icon={faLinkedin} className="text-white text-3xl m-2 hover:text-blue-600 duration-500"/></a>
                <a href="https://maps.google.com/?cid=15774453259933002183&entry=gps"><Icon icon={faMapMarker} className="animate-bounce text-white text-3xl m-2 hover:text-red-600 duration-500"/></a>
            </div>
        </div>
    )
}

export default Footer;