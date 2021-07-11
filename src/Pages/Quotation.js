import axios from 'axios'
import { useHistory } from 'react-router-dom'

import Header from '../Components/Header.js'
import Footer from '../Components/Footer.js'
import ProductCard from '../Components/ProductCard'

const Quotation = () => {
    const history = useHistory()
    const isLogged = localStorage.getItem('token') != null

    if(!isLogged)
        history.push('/login-page')

    return (
        <>
            <Header />
            <h1 className="text-center font-extrabold text-xl m-5">¡Bienvenido a tu carrito de cotizacciones Deproinv!</h1>

            <div className="h-screen w-full">
                <p className="text-center">
                    Esta sección se encuentra en desarrolo. <br /><br />
                    Aquí se mostrarán la lista de productos que desea cotizar.
                </p>
                <div className="flex absolute bottom-0 w-full justify-center">
                    <button className="bg-gray-600 text-white text-center rounded-md shadow-lg hover:bg-gray-300 hover:text-black duration-500 w-1/2 mt-5 mb-2" >Solicitar cotización</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Quotation