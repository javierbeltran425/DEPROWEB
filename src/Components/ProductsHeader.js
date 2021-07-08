import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import ProductSelector from '../Components/ProductSelector'

import AboutUsDropdown from '../Components/AboutUsDropdown'

import logo2 from '../resources/depro_logo.png'

const AboutDropdownDiv = styled.div`
    transition: max-height 0.6s ease-in-out;
    max-height: ${( { useHeight } ) => useHeight };
    `

const DropdownDiv = styled.div`
    transition: max-height 0.6s ease-in-out;
    max-height: ${( { useHeight } ) => useHeight };
`
const ButtonsDiv = styled.div`
    transition: max-height 0.6s ease-in-out;
    max-height: ${( { useHeight } ) => useHeight };
`

const ProductsHeader = () => {
    const history = useHistory()
    const [ active, setActive ] = useState(false)
    const isLogged = localStorage.getItem('token') != null
    
    const [ aboutDropdown, setAboutDropdown ] = useState({ show: false })
    const [ dropdown, setDropdown ] = useState({ show: false })
    const [ menuShow, setMenuShow ] = useState({ show: false })

    let content = null

    function productsClick(e) {
        e.preventDefault()
        
        if(dropdown.show)
            setDropdown({ show: false })
        else
            setDropdown({ show: true })
        //history.push('/products')
    }

    function aboutUsClick(e) {
        e.preventDefault()
        
        if(aboutDropdown.show)
            setAboutDropdown({ show: false })
        else
            setAboutDropdown({ show: true })
        //history.push('/products')
    }

    function servicesClick(e){
        e.preventDefault()

        alert("Estimado cliente \n esta función aún no se encuentra disponible")
    }

    function ourWorksClick(e){
        e.preventDefault()

        alert("Estimado cliente \n esta función aún no se encuentra disponible")
    }

    function menuIcoClick(e) {
        e.preventDefault()
        
        if(menuShow.show)
            setMenuShow({ show: false })
        else
            setMenuShow({ show: true })
        //history.push('/products')
    }

    function homeClick(e) {
        e.preventDefault()

        history.push('/')
    }

    function registerClick(e){
        e.preventDefault()

        history.push('/register-page')
    }

    function loginClick(e){
        e.preventDefault()

        history.push('login-page')
    }

    function closeSesionClick(e) {
        e.preventDefault()

        localStorage.removeItem('token')

        history.push('/')
    }

    if(!isLogged){
        content = 
        <div className="flex flex-row mr-5 w-full justify-between text-white text-xs md:text-base items-center">
            <div className="hidden md:inline px-4">
                <a className="hover:text-blue-300 duration-500 px-1 cursor-pointer" onClick={aboutUsClick}>LA EMPRESA</a>
            </div>
            <div className="flex md:flex-row items-center">
                <Icon icon={faPhoneAlt} className="text-blue-300 m-2"/>
                <p className="px-2"><a href="tel:+50322524892">2252-4892</a></p>
            </div>
            <div className="hidden md:flex md:flex-row md:items-center">
                <Icon icon={faClock} className="text-blue-300"/>
                <p className="px-1">HORARIOS DE ATENCIÓN: LUNES A VIERNES 8AM - 6PM </p>
            </div>
            <div className="flex flex-row items-center">
                <div className="flex fle-row items-center px-4">
                    <Icon icon={faUserAlt} className="text-blue-300"/>
                    <a onClick={loginClick} className="px-1 hover:text-blue-300 duration-500 cursor-pointer">LOGIN</a>
                </div>
                <div className="felx flex-row items-center px-4">
                    <Icon icon={faSignInAlt} className="text-blue-300"/>
                    <a onClick={registerClick} className="px-1 hover:text-blue-300 duration-500 cursor-pointer">REGISTRARSE</a>
                </div>
            </div>
        </div>
    }
    else {
        content = 
        <div className="flex flex-row mr-5 w-full justify-between text-white text-xs md:text-base items-center">
            <div className="hidden md:inline px-4">
                <a className="hover:text-blue-300 duration-500 px-1 cursor-pointer" onClick={aboutUsClick}>LA EMPRESA</a>
            </div>
            <div className="flex md:flex-row items-center">
                <Icon icon={faPhoneAlt} className="text-blue-300 m-2"/>
                <p className="px-2"><a href="tel:+50322524892">2252-4892</a></p>
            </div>
            <div className="hidden md:flex md:flex-row md:items-center">
                <Icon icon={faClock} className="text-blue-300"/>
                <p className="px-1">HORARIOS DE ATENCIÓN: LUNES A VIERNES 8AM - 6PM </p>
            </div>
            <div className="flex flex-row items-center">
                <p className="px-4">Bienvenido</p>
                <div className="flex flex-row items-center px-2">
                    <Icon icon={faSignOutAlt} className="text-blue-300"/>
                    <a onClick={closeSesionClick} className="px-1 hover:text-blue-300 duration-500 cursor-pointer">Cerrar sesión</a>
                </div>
            </div>
        </div>
    }

    return(
        <>
        <nav className="flex flex-col lg:flex-row lg:flex-wrap w-screen lg:justify-between bg-gray-400 z-20">
            <div className="w-full bg-gray-500 flex justify-end h-auto">
                { content }
            </div>
            <AboutDropdownDiv useHeight={ aboutDropdown.show ? "300px" : "0" } className={" w-full h-auto flex justify-center transition-all transition-4000 ease-in-out"}>
                <AboutUsDropdown />
            </AboutDropdownDiv>
                <div className="flex flex-row justify-between items-center">
                    <Icon icon={active ? faTimes : faBars} onClick={() => setActive(!active)} className="lg:hidden text-2xl text-white ml-5 my-2" />
                    <img onClick={homeClick} src={logo2} className="h-14 md:w-auto md:h-20 ml-7  lg:display cursor-pointer"/>
                </div>
                <ButtonsDiv className={`${ active ? "" : "hidden" } ` + " lg:inline mr-2 flex flex-col lg:flex-row lg:p-6"}>
                    <button onClick={productsClick} className="lg:mr-5 px-6 text-sm md:text-xl text-left lg:text-center lg:text-base text-white lg:shadow-lg lg:bg-gray-600 lg:rounded-full transform lg:hover:scale-110 hover:text-black lg:hover:bg-white motion-reduce:transform-none duration-500">CATEGORIAS</button>
                    <button onClick={servicesClick} className="lg:mr-5 px-6 text-sm md:text-xl text-left lg:text-center lg:text-base text-white lg:shadow-lg lg:bg-gray-600 lg:rounded-full transform lg:hover:scale-110 hover:text-black lg:hover:bg-white motion-reduce:transform-none duration-500">SERVICIOS</button>
                    <button onClick={ourWorksClick} className="lg:mr-5 px-6 text-sm md:text-xl text-left lg:text-center lg:text-base text-white lg:shadow-lg lg:bg-gray-600 lg:rounded-full transform lg:hover:scale-110 hover:text-black lg:hover:bg-white motion-reduce:transform-none duration-500">NUESTROS TRABAJOS</button>
                </ButtonsDiv>
        </nav>
        <DropdownDiv useHeight={ dropdown.show ? "300px" : "0" } className={" w-full h-auto flex justify-center transition-all transition-4000 ease-in-out"}>
            <ProductSelector/>
        </DropdownDiv>
        </>
    )
}

export default ProductsHeader