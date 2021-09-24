import styled from 'styled-components'
import Header from '../Components/HomeHeader'
import Footer from '../Components/Footer'
import CompaniesCard from '../Components/CompaniesCard'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

import BannerPic from '../resources/Brands/Banner.png'
import DeltaPic from '../resources/Brands/Delta.svg'
import GraingerPic from '../resources/Brands/Grainger.png'
import LovatoPic from '../resources/Brands/LovatoElectric.png'
import SineTimer from '../resources/Brands/sinetamer.png'
import Disoric from '../resources/Brands/disoric.png'
import Maruson from '../resources/Brands/maruson.png'
import HomeLogo from '../resources/depro_log2.png'
import Background from '../images/background.jpg'

import axios from 'axios'
import { useHistory } from 'react-router-dom'

import Whatsapp from '../resources/whatsappLogo.png'

const videoSource = process.env.REACT_APP_BUCKET + "videos/banner.gif"

const BackDiv = styled.div`
    background: url(${Background});
    
`

const BackDivHome = styled.div`
    background: url(${videoSource});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
`

const Home = () => {
    const history = useHistory()
    
    /*
    axios.get('https://deproapi.herokuapp.com/users/my-info', {
        headers: { Authorize: localStorage.getItem('token') }
    })
    .then(res => {
        if(res.data.user){
            if( res.data.user.admin ) 
                history.push('/admin-page-upload')
        }
    })
    */

    return(
        <>
            <div className="fixed w-full flex flex-wrap z-10">
                <Header />
            </div>
                    <div className="flex justify-center bg-black">
                        <Icon icon={faArrowDown} className="absolute bottom-0 text-blue-300 text-5xl m-2 animate-bounce"/>
                        {/*
                        <video className="w-full h-screen hidden md:inline" autoplay loop>
                            <source src={videoSource} type="video/mp4" />
                        </video>
                        */}
                        <BackDivHome className="w-full h-screen hidden md:inline"/>
                        <div className="w-full h-screen bg-gray-600 md:hidden">
                            <div className="absolute w-full h-screen bottom-0 text-justify flex flex-col justify-center items-center">
                                <img src={HomeLogo} className="lg:w-2/4"/>
                                <p className="text-white text-sm p-5 md:text-2xl lg:p-8 text-center">"Deltas Proyectos e inversiones, una empresa apasionada y dedicada al manejo de proyectos solares, automatización, iluminación y equipos de protección eléctrica, entre otros."</p>
                            </div>
                        </div>
                    </div>
                    <BackDiv className="flex flex-wrap w-full" >
                        <div className="w-full text-black text-center ">
                            <p className="text-3xl font-extrabold p-1 mt-5 text-white">MARCAS EN DISTRIBUCIÓN OFICIAL</p>
                            <p className="mb-5 text-white font-bold">________________________________</p>
                        </div>
                        
                        <div className="flex justify-center lg:justify-start">
                            <CompaniesCard title={"SINETAMER"} img={SineTimer} msg={
                                <p>
                                    Líder mundial en el desarrollo y fabricación de Supresores de Transientes de Sobretensiones en Estados Unidos,  con presencia a nivel mundial a través de su amplia red de distribuidores.<br/><br/>
                                    Sine Tamer® es el líder mundial en el desarrollo de supresores  de transientes con la menor tensión residual (LTV), mayor cantidad de modos de protección, la innovación de suprimir con tecnología de atenuación por frecuencia y umbral fijo, mayor capacidad de descarga en cada modelo, menor tiempo de respuesta, mejor garantía contra todo evento,  entre sus principales características.
                                </p>
                            }/>
                        </div>

                        <div className="flex justify-center lg:justify-end">
                            <CompaniesCard title={"DELTA AUTOMATION"} img={DeltaPic} msg={
                            <p>
                                Delta ofrece productos y soluciones de automatización con alto rendimiento y confiabilidad, que incluyen variadores, sistemas de control de movimiento, control y comunicación industrial, mejora de la calidad de la energía, interfaces hombre-máquina, sensores, medidores y soluciones robóticas. También proporcionamos sistemas de gestión y monitoreo de información como SCADA y EMS industrial para soluciones de fabricación completas e inteligentes.
                            </p>}/>
                        </div>
                        


                        <div className="flex justify-center lg:justify-start">
                            <CompaniesCard title={"LOVATO ELECTRIC"} img={LovatoPic} msg={
                                <p>
                                    Durante más de 90 años, LOVATO Electric ha estado diseñando y fabricando componentes eléctricos de baja tensión para aplicaciones industriales.<br/><br/>
                                    En 1992 LOVATO Electric fue una de las primeras empresas Italianas en obtener la certificación ISO 9001, ofreciendo más de 18.000 productos que cumplen con los más estrictos requisitos de homologación internacional.<br/><br/>
                                </p>
                            }/>
                        </div>
                        
                        <div className="flex justify-center lg:justify-end">
                            <CompaniesCard title={"DI-SORIC"} img={Disoric} msg={<p>
                                Disoric especializado en automatización industrial durante casi 40 años. Desarrollamos, fabricamos y comercializamos un amplio espectro de sensores innovadores, componentes de procesamiento de imágenes de alto rendimiento, máquinas LED de alta calidad e iluminación de señales, así como productos del área de tecnología de seguridad. Nuestra amplia gama de productos se completa con nuestra flexibilidad para soluciones específicas para el cliente. <br/><br/>
                            </p>}/>
                        </div>
                        <div className="flex justify-center lg:justify-start">
                            <CompaniesCard title={"MARUSON"} img={Maruson} msg={<p>
                                Se ha convertido en una potencia en el diseño y fabricación de productos de gestión de energía para satisfacer las necesidades de todos los tipos de consumidores. Desde hogares hasta centros de datos y soluciones empresariales, Maruson proporciona sistemas de respaldo de batería de suministro de energía ininterrumpida (UPS) de calidad, unidades de distribución de energía (PDU), reguladores automáticos de voltaje (AVR), sistemas de almacenamiento de energía (ESS), inversores y más para ofrecer. una cartera completa de productos de gestión de energía. <br/><br/>
                            </p>}/>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <CompaniesCard title={"GRAINGER"} img={GraingerPic} msg={
                                <p>
                                    Grainger Inc., referida como Grainger Industrial Supply, con sede en Chicago, Illinois, en los Estados Unidos, fue fundada en 1927 con el propósito de atender el mercado industrial, comercial e institucional de material indirecto. Al día de hoy, Grainger Industrial Supply cuenta con más de 590 sucursales en Norte América y Latinoamérica y efectúa ventas por arriba de los $9.4 billones de dólares.<br/><br/>
                                </p>
                            }/>
                        </div>
                        <div className="flex justify-center lg:justify-start">
                            <CompaniesCard title={"BANNER ENGINEERING CORPORATION"} img={BannerPic} msg={
                                <p>
                                    Fundada en 1966 por el ingeniero americano Bob Fayfield, Banner Engineering comenzó como una pequeña empresa de ingeniería conocida por resolver problemas. Hoy en día, Banner Engineering es una empresa global y un líder mundialmente reconocido en el campo de la automatización industrial y de procesos. Los sensores Banner y de visión, luces LED e indicadores, productos inalámbricos y de seguridad son utilizados por las empresas grandes y pequeñas, desde los líderes de la industria en la Fortune 500 hasta los innovadores que recientemente han entrado en el mercado.
                                </p>
                            } />
                        </div>
                        <a href="https://api.whatsapp.com/send?phone=50377483000" className="fixed z-10 w-10 h-10 md:w-16 md:h-16 m-10 right-0 bottom-0"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-900 opacity-75"></span><img src={Whatsapp}/></a>
                    </BackDiv>
                <Footer/>
        </>
    )
}

export default Home