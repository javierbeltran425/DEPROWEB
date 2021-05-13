import styled from 'styled-components'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import CompaniesCard from '../Components/CompaniesCard'

import banner from '../resources/banner.jpg'
import BannerPic from '../resources/BannerPic.png'
import DeltaPic from '../resources/DeltaAutomation.jpg'
import GraingerPic from '../resources/Grainger.jpg'
import LovatoPic from '../resources/Brands/LovatoElectric.webp'
import SineTimer from '../resources/SineTimer.jpg'

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
                            <h1 className="text-white font-bold text-3xl md:text-6xl lg:p-5 lg:m-20">DEPROINV</h1>
                            <p className="hidden lg:inline text-8xl text-white overflow-hidden">|</p>
                            <p className="text-white text-sm p-5 md:text-3xl lg:p-8">"Deltas Proyectos e inversiones, una empresa apasionada y dedicada al manejo de proyectos Solares, automatizacion, de iluminacion y equipos de proteccion electrica, entre otros."</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap w-full bg-gray-300">
                        <div className="w-full text-black text-center ">
                            <p className="text-3xl font-bold p-1 mt-5">MARCAS EN DISTRIBUCIÓN OFICIAL</p>
                            <p className="mb-5 text-black">__________</p>
                        </div>
                        <div className="flex justify-center lg:justify-start">
                            <CompaniesCard title={"BANNER ENGINEERING CORPORATION"} img={BannerPic} msg={"Sint deserunt eiusmod ipsum veniam officia laborum elit laborum eu laboris Lorem enim in adipisicing. Ex officia aliquip reprehenderit amet tempor amet adipisicing duis. Officia in officia consectetur non. Ex aliquip amet ad dolore reprehenderit voluptate voluptate mollit veniam non quis." } />
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <CompaniesCard title={"DELTA AUTOMATION"} img={DeltaPic} msg={"Sint deserunt eiusmod ipsum veniam officia laborum elit laborum eu laboris Lorem enim in adipisicing. Ex officia aliquip reprehenderit amet tempor amet adipisicing duis. Officia in officia consectetur non. Ex aliquip amet ad dolore reprehenderit voluptate voluptate mollit veniam non quis."}/>
                        </div>
                        <div className="flex justify-center lg:justify-start">
                            <CompaniesCard title={"GRAINGER"} img={GraingerPic} msg={"Sint deserunt eiusmod ipsum veniam officia laborum elit laborum eu laboris Lorem enim in adipisicing. Ex officia aliquip reprehenderit amet tempor amet adipisicing duis. Officia in officia consectetur non. Ex aliquip amet ad dolore reprehenderit voluptate voluptate mollit veniam non quis."}/>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <CompaniesCard title={"LOVATO ELECTRIC"} img={LovatoPic} msg={"Sint deserunt eiusmod ipsum veniam officia laborum elit laborum eu laboris Lorem enim in adipisicing. Ex officia aliquip reprehenderit amet tempor amet adipisicing duis. Officia in officia consectetur non. Ex aliquip amet ad dolore reprehenderit voluptate voluptate mollit veniam non quis."}/>
                        </div>
                        <div className="flex justify-center lg:justify-start">
                            <CompaniesCard title={"SINETAMER"} img={SineTimer} msg={"Sint deserunt eiusmod ipsum veniam officia laborum elit laborum eu laboris Lorem enim in adipisicing. Ex officia aliquip reprehenderit amet tempor amet adipisicing duis. Officia in officia consectetur non. Ex aliquip amet ad dolore reprehenderit voluptate voluptate mollit veniam non quis."}/>
                        </div>
                        <a href="https://api.whatsapp.com/send?phone=50378532004" className="fixed z-10 w-16 h-16 m-10 right-0 bottom-0 animate-bounce"><img src={Whatsapp}/></a>
                    </div>
                <Footer/>
        </>
    )
}

export default Home