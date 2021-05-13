import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import ProductSelector from '../Components/ProductSelector'

import logo2 from '../resources/depro_logo.png'

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
        <div className="flex flex-row mr-5 text-white">
            <button onClick={loginClick} className="px-4 hover:text-black duration-500">Login</button>
            <button onClick={registerClick} className="px-4 hover:text-black duration-500">Registrarse</button>
        </div>
    }
    else {
        content = 
        <div className="flex flex-row mr-5 text-white">
            <p className="px-4">Bienvenido</p>
            <button onClick={closeSesionClick} className="px-4 hover:text-black duration-500">Cerrar sesión</button>
        </div>
    }

    return(
        <>
        <div className="flex flex-col lg:flex-row lg:flex-wrap w-screen lg:justify-between bg-gray-400 z-20">
        <div className="w-full bg-gray-500 flex justify-end h-auto">
            { content }
        </div>
            <div className="flex flex-row justify-between items-center">
                <Icon icon={active ? faTimes : faBars} onClick={() => setActive(!active)} className="lg:hidden text-2xl text-white ml-5 my-2" />
                <img onClick={homeClick} src={logo2} className="h-7 w-7 md:w-auto md:h-20 ml-7  lg:display cursor-pointer"/>
            </div>
            <ButtonsDiv className={`${ active ? "" : "hidden" } ` + " lg:inline mr-2 flex flex-col lg:flex-row lg:p-6"}>
                <button onClick={productsClick} className="lg:mr-5 px-6 text-sm md:text-xl text-left lg:text-center lg:text-base text-white lg:shadow-lg lg:bg-gray-600 lg:rounded-full transform lg:hover:scale-110 hover:text-black lg:hover:bg-white motion-reduce:transform-none duration-1000">CATEGORIAS</button>
                <button className="lg:mr-5 px-6 text-sm md:text-xl text-left lg:text-center lg:text-base text-white lg:shadow-lg lg:bg-gray-600 lg:rounded-full transform lg:hover:scale-110 hover:text-black lg:hover:bg-white motion-reduce:transform-none duration-1000">SERVICIOS</button>
                <button className="lg:mr-5 px-6 text-sm md:text-xl text-left lg:text-center lg:text-base text-white lg:shadow-lg lg:bg-gray-600 lg:rounded-full transform lg:hover:scale-110 hover:text-black lg:hover:bg-white motion-reduce:transform-none duration-1000">NUESTROS TRABAJOS</button>
            </ButtonsDiv>
        </div>
        <DropdownDiv useHeight={ dropdown.show ? "300px" : "0" } className={" w-full h-auto flex justify-center transition-all transition-4000 ease-in-out"}>
            <ProductSelector/>
        </DropdownDiv>
        </>
    )
}

export default ProductsHeader