import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useAxiosGet } from '../Hooks/useAxiosGet'

import Header from '../Components/Header.js'
import Footer from '../Components/Footer.js'
import ProductCard from '../Components/ProductCard'

let petition = null

const Quotation = (actUser) => {
    let content = null
    const history = useHistory()
    const isLogged = localStorage.getItem('token') != null

    if(!isLogged)
        history.push('/login-page')

    
    console.log(actUser)
    
    petition = useAxiosGet(process.env.REACT_APP_API_URL + 'userxproducts/getxuser?username=' + actUser.location.state.response.user.username)

    console.log(petition)

    if(petition.error){
        alert('Ha ocurrido un error')
    }

    if(petition.response != null){
        content = petition.response.products.map(e => 
            <ProductCard title={`${e.name}`} img={`${e.productImg}`} desc={`${e.description}`} productID={e.productID} maker={e.maker} categ={e.category} />
        )
    }

    return (
        <>
            <Header />
            <h1 className="text-center font-extrabold text-xl m-5">¡Bienvenido a tu carrito de cotizacciones Deproinv!</h1>

            <div className="h-screen w-full">
                {content}
                <div className="flex absolute bottom-0 w-full justify-center">
                    <button className="bg-gray-600 text-white text-center rounded-md shadow-lg hover:bg-gray-300 hover:text-black duration-500 w-1/2 mt-5 mb-2" >Solicitar cotización</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Quotation