import axios from 'axios'
import { useMutation } from 'react-query'
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
    
    petition = useAxiosGet(process.env.REACT_APP_API_URL + 'userxproducts/getxuser?username=' + actUser.location.state.response.user.username)

    const [ mutate, isLoading  ] = useMutation(quotation => {
        axios.post(process.env.REACT_APP_API_URL + 'users/sendquotation', quotation)
            .then(res => {
                console.log(res.data)

                if(res.status === 201)
                    alert("Solicitud envíada")
            })
            .catch(({ response }) => {
                alert("Algo salió mal")
            })
    })

    if(petition.error){
        alert('Ha ocurrido un error')
    }

    if(petition.response != null){
        console.log(petition.response.products)
        content = petition.response.products.map(e => 
            <ProductCard title={`${e.name}`} img={`${e.productImg}`} desc={`${e.description}`} productID={e.productID} maker={e.maker} categ={e.category} />
        )
    }

    function senddingQuotation(e) {
        e.preventDefault()

        if(petition.response === null)
            alert("No tiene productos en el carrito")
        else{
            var quotationData = { 
                email: actUser.location.state.response.user.email,
                products: petition.response.products
            }
            mutate(quotationData)
        }
    }

    return (
        <>
            <Header />
            <h1 className="text-center font-extrabold text-xl m-5">¡Bienvenido a tu carrito de cotizacciones Deproinv!</h1>

            <div className="min-h-screen w-full">
                {content}
                <div className="flex bottom-0 w-full justify-center">
                    <button onClick={senddingQuotation} className="bg-gray-600 text-white text-center rounded-md shadow-lg hover:bg-gray-300 hover:text-black duration-500 w-1/2 mt-5 mb-2" >Solicitar cotización</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Quotation