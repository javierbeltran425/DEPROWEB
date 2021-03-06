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
                                <p className="text-white text-sm p-5 md:text-2xl lg:p-8 text-center">"Deltas Proyectos e inversiones, una empresa apasionada y dedicada al manejo de proyectos solares, automatizaci??n, iluminaci??n y equipos de protecci??n el??ctrica, entre otros."</p>
                            </div>
                        </div>
                    </div>
                    <BackDiv className="flex flex-wrap w-full" >
                        <div className="w-full text-black text-center ">
                            <p className="text-3xl font-extrabold p-1 mt-5 text-white">MARCAS EN DISTRIBUCI??N OFICIAL</p>
                            <p className="mb-5 text-white font-bold">________________________________</p>
                        </div>
                        
                        <div className="flex justify-center lg:justify-start">
                            <CompaniesCard title={"SINETAMER"} img={SineTimer} msg={
                                <p>
                                    L??der mundial en el desarrollo y fabricaci??n de Supresores de Transientes de Sobretensiones en Estados Unidos,  con presencia a nivel mundial a trav??s de su amplia red de distribuidores.<br/><br/>
                                    Sine Tamer?? es el l??der mundial en el desarrollo de supresores  de transientes con la menor tensi??n residual (LTV), mayor cantidad de modos de protecci??n, la innovaci??n de suprimir con tecnolog??a de atenuaci??n por frecuencia y umbral fijo, mayor capacidad de descarga en cada modelo, menor tiempo de respuesta, mejor garant??a contra todo evento,  entre sus principales caracter??sticas.
                                </p>
                            }/>
                        </div>

                        <div className="flex justify-center lg:justify-end">
                            <CompaniesCard title={"DELTA AUTOMATION"} img={DeltaPic} msg={
                            <p>
                                Delta ofrece productos y soluciones de automatizaci??n con alto rendimiento y confiabilidad, que incluyen variadores, sistemas de control de movimiento, control y comunicaci??n industrial, mejora de la calidad de la energ??a, interfaces hombre-m??quina, sensores, medidores y soluciones rob??ticas. Tambi??n proporcionamos sistemas de gesti??n y monitoreo de informaci??n como SCADA y EMS industrial para soluciones de fabricaci??n completas e inteligentes.
                            </p>}/>
                        </div>
                        


                        <div className="flex justify-center lg:justify-start">
                            <CompaniesCard title={"LOVATO ELECTRIC"} img={LovatoPic} msg={
                                <p>
                                    Durante m??s de 90 a??os, LOVATO Electric ha estado dise??ando y fabricando componentes el??ctricos de baja tensi??n para aplicaciones industriales.<br/><br/>
                                    En 1992 LOVATO Electric fue una de las primeras empresas Italianas en obtener la certificaci??n ISO 9001, ofreciendo m??s de 18.000 productos que cumplen con los m??s estrictos requisitos de homologaci??n internacional.<br/><br/>
                                </p>
                            }/>
                        </div>
                        
                        <div className="flex justify-center lg:justify-end">
                            <CompaniesCard title={"DI-SORIC"} img={Disoric} msg={<p>
                                Disoric especializado en automatizaci??n industrial durante casi 40 a??os. Desarrollamos, fabricamos y comercializamos un amplio espectro de sensores innovadores, componentes de procesamiento de im??genes de alto rendimiento, m??quinas LED de alta calidad e iluminaci??n de se??ales, as?? como productos del ??rea de tecnolog??a de seguridad. Nuestra amplia gama de productos se completa con nuestra flexibilidad para soluciones espec??ficas para el cliente. <br/><br/>
                            </p>}/>
                        </div>
                        <div className="flex justify-center lg:justify-start">
                            <CompaniesCard title={"MARUSON"} img={Maruson} msg={<p>
                                Se ha convertido en una potencia en el dise??o y fabricaci??n de productos de gesti??n de energ??a para satisfacer las necesidades de todos los tipos de consumidores. Desde hogares hasta centros de datos y soluciones empresariales, Maruson proporciona sistemas de respaldo de bater??a de suministro de energ??a ininterrumpida (UPS) de calidad, unidades de distribuci??n de energ??a (PDU), reguladores autom??ticos de voltaje (AVR), sistemas de almacenamiento de energ??a (ESS), inversores y m??s para ofrecer. una cartera completa de productos de gesti??n de energ??a. <br/><br/>
                            </p>}/>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <CompaniesCard title={"GRAINGER"} img={GraingerPic} msg={
                                <p>
                                    Grainger Inc., referida como Grainger Industrial Supply, con sede en Chicago, Illinois, en los Estados Unidos, fue fundada en 1927 con el prop??sito de atender el mercado industrial, comercial e institucional de material indirecto. Al d??a de hoy, Grainger Industrial Supply cuenta con m??s de 590 sucursales en Norte Am??rica y Latinoam??rica y efect??a ventas por arriba de los $9.4 billones de d??lares.<br/><br/>
                                </p>
                            }/>
                        </div>
                        <div className="flex justify-center lg:justify-start">
                            <CompaniesCard title={"BANNER ENGINEERING CORPORATION"} img={BannerPic} msg={
                                <p>
                                    Fundada en 1966 por el ingeniero americano Bob Fayfield, Banner Engineering comenz?? como una peque??a empresa de ingenier??a conocida por resolver problemas. Hoy en d??a, Banner Engineering es una empresa global y un l??der mundialmente reconocido en el campo de la automatizaci??n industrial y de procesos. Los sensores Banner y de visi??n, luces LED e indicadores, productos inal??mbricos y de seguridad son utilizados por las empresas grandes y peque??as, desde los l??deres de la industria en la Fortune 500 hasta los innovadores que recientemente han entrado en el mercado.
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