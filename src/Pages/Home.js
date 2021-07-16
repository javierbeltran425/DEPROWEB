import styled from 'styled-components'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import CompaniesCard from '../Components/CompaniesCard'

import banner from '../resources/banner.jpg'
import BannerPic from '../resources/Brands/Banner.png'
import DeltaPic from '../resources/Brands/Delta.svg'
import GraingerPic from '../resources/Brands/Grainger.png'
import LovatoPic from '../resources/Brands/LovatoElectric.png'
import SineTimer from '../resources/Brands/sinetamer.png'
import Disoric from '../resources/Brands/disoric.png'
import Maruson from '../resources/Brands/maruson.png'
import HomeLogo from '../resources/depro_log2.png'

import axios from 'axios'
import { useHistory } from 'react-router-dom'

import Whatsapp from '../resources/whatsappLogo.png'

const BackDiv = styled.div`
    background: url(${banner})
`

const Home = () => {
    const history = useHistory()
    
    axios.get('https://deproapi.herokuapp.com/users/my-info', {
        headers: { Authorize: localStorage.getItem('token') }
    })
    .then(res => {
        if( res.data.user.admin ) 
            history.push('/admin-page-upload')
    })

    return(
        <>
            <div className="fixed flex flex-wrap z-10">
                <Header />
            </div>
                    <div className="w-full h-screen bg-gradient-to-r from-gray-900 to-gray-700">
                        <BackDiv className="w-full h-screen opacity-20" />
                        <div className="absolute w-full h-screen bottom-0 text-justify flex flex-col justify-center items-center lg:flex-row">
                            <img src={HomeLogo} className="lg:w-1/3"/>
                            <p className="hidden lg:inline text-8xl text-white overflow-hidden">|</p>
                            <p className="text-white text-sm p-5 md:text-2xl lg:p-8">"Deltas Proyectos e inversiones, una empresa apasionada y dedicada al manejo de proyectos Solares, automatizacion, de iluminacion y equipos de proteccion electrica, entre otros."</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap w-full bg-gray-300">
                        <div className="w-full text-black text-center ">
                            <p className="text-3xl font-bold p-1 mt-5">MARCAS EN DISTRIBUCIÓN OFICIAL</p>
                            <p className="mb-5 text-black">__________</p>
                        </div>
                        <div className="flex justify-center lg:justify-start">
                            <CompaniesCard title={"BANNER ENGINEERING CORPORATION"} img={BannerPic} msg={
                                <p>
                                    Fundada en 1966 por el ingeniero americano Bob Fayfield, Banner Engineering comenzó como una pequeña empresa de ingeniería conocida por resolver problemas. Hoy en día, Banner Engineering es una empresa global y un líder mundialmente reconocido en el campo de la automatización industrial y de procesos. Los sensores Banner y de visión, luces LED e indicadores, productos inalámbricos y de seguridad son utilizados por las empresas grandes y pequeñas, desde los líderes de la industria en la Fortune 500 hasta los innovadores que recientemente han entrado en el mercado.
                                </p>
                            } />
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <CompaniesCard title={"DELTA AUTOMATION"} img={DeltaPic} msg={
                            <p>
                                Delta ofrece productos y soluciones de automatización con alto rendimiento y confiabilidad, que incluyen variadores, sistemas de control de movimiento, control y comunicación industrial, mejora de la calidad de la energía, interfaces hombre-máquina, sensores, medidores y soluciones robóticas. También proporcionamos sistemas de gestión y monitoreo de información como SCADA y EMS industrial para soluciones de fabricación completas e inteligentes.
                            </p>}/>
                        </div>
                        <div className="flex justify-center lg:justify-start">
                            <CompaniesCard title={"GRAINGER"} img={GraingerPic} msg={
                                <p>
                                    Grainger Inc., referida como Grainger Industrial Supply, con sede en Chicago, Illinois, en los Estados Unidos, fue fundada en 1927 con el propósito de atender el mercado industrial, comercial e institucional de material indirecto. Al día de hoy, Grainger Industrial Supply cuenta con más de 590 sucursales en Norte América y Latinoamérica y efectúa ventas por arriba de los $9.4 billones de dólares.<br/><br/>
                                    Grainger cuenta con una cadena de suministro que involucra a todo un equipo de personas que diariamente se aseguran de proveer los productos que demanda el país. Esta cadena, se abastece de centros de distribución que van desde Chicago, pasando por Carolina del Sur, Kansas City hasta nuestro centro de reprocesamiento ubicado en Roanoke, Texas.
                                </p>
                            }/>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <CompaniesCard title={"LOVATO ELECTRIC"} img={LovatoPic} msg={
                                <p>
                                    Durante más de 90 años, LOVATO Electric ha estado diseñando y fabricando componentes eléctricos de baja tensión para aplicaciones industriales.<br/><br/>
                                    En 1992 LOVATO Electric fue una de las primeras empresas Italianas en obtener la certificación ISO 9001, ofreciendo más de 18.000 productos que cumplen con los más estrictos requisitos de homologación internacional.<br/><br/>
                                    Disyuntores magneto-térmicos, contactores, pulsadores, interruptores de paquete, finales de carrera, multímetros digitales, medidores de energía, arrancadores suaves, seccionadores en carga, reguladores automáticos de corrección del factor de potencia y unidades de control para grupo electrógeno, son sólo algunos de los productos diseñados y construidos por LOVATO Electric.
                                </p>
                            }/>
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
                            <CompaniesCard title={"DI-SORIC"} img={Disoric} msg={<p>
                                Disoric especializado en automatización industrial durante casi 40 años. Desarrollamos, fabricamos y comercializamos un amplio espectro de sensores innovadores, componentes de procesamiento de imágenes de alto rendimiento, máquinas LED de alta calidad e iluminación de señales, así como productos del área de tecnología de seguridad. Nuestra amplia gama de productos se completa con nuestra flexibilidad para soluciones específicas para el cliente. <br/><br/>
                                Nuestros productos se utilizan principalmente en las áreas de ensamblaje y manipulación, sistemas robóticos, embalaje y medición y prueba. Y aquí nos centramos en las industrias automotriz, de alimentos y bebidas, farmacéutica, cosmética y electrónica.
                            </p>}/>
                        </div>
                        <div className="flex justify-center lg:justify-start">
                            <CompaniesCard title={"MARUSON"} img={Maruson} msg={<p>
                                Se ha convertido en una potencia en el diseño y fabricación de productos de gestión de energía para satisfacer las necesidades de todos los tipos de consumidores. Desde hogares hasta centros de datos y soluciones empresariales, Maruson proporciona sistemas de respaldo de batería de suministro de energía ininterrumpida (UPS) de calidad, unidades de distribución de energía (PDU), reguladores automáticos de voltaje (AVR), sistemas de almacenamiento de energía (ESS), inversores y más para ofrecer. una cartera completa de productos de gestión de energía. <br/><br/>
                                La preparación es la clave para que las operaciones sigan avanzando. Los cortes de energía debido a tormentas, cortes de la red eléctrica o accidentes son impredecibles. Maruson tiene casi todo lo que necesita para darle suficiente energía a sus dispositivos electrónicos conectados críticos para capear la tormenta.
                            </p>}/>
                        </div>
                        <a href="https://api.whatsapp.com/send?phone=50378532004" className="fixed z-10 w-16 h-16 m-10 right-0 bottom-0"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-900 opacity-75"></span><img src={Whatsapp}/></a>
                    </div>
                <Footer/>
        </>
    )
}

export default Home