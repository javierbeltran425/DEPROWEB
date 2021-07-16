import axios from 'axios'
import { useMutation } from 'react-query'
import { useHistory } from 'react-router-dom'
import { useAxiosGet } from '../Hooks/useAxiosGet'

import Header from '../Components/Header.js'
import Footer from '../Components/Footer.js'
import QuotationCard from '../Components/QuotationCard'

let petition = null

const Quotation = (actUser) => {
    let content = null
    let amount = 1
    let codsQuotation = null
    let nameQuotation = null
    let makerQuotation = null
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
                console.log(response)
                alert("Algo salió mal")
            })
    })

    if(petition.error){
        alert('Ha ocurrido un error')
    }

    if(petition.response != null){
        console.log(petition.response.products)
        content = petition.response.products.map(e => 
            <QuotationCard title={`${e.name}`} img={`${e.productImg}`} desc={`${e.description}`} productID={e.productID} maker={e.maker} categ={e.category} />
        )
    }

    if(petition.response != null){
        codsQuotation = petition.response.products.map(e => 
            e.productID
        )

        nameQuotation = petition.response.products.map(e => 
            e.name
        )

        makerQuotation = petition.response.products.map(e => 
            e.maker
        ) 
    }

    function senddingQuotation(e) {
        e.preventDefault()

        if(petition.response === null)
            alert("No tiene productos en el carrito")
        else{
            var quotationData = { 
                email: actUser.location.state.response.user.email,
                cods: codsQuotation,
                name: nameQuotation,
                maker: makerQuotation
            }
            
            mutate(quotationData)
        }
    }

    return (
        <>
            <Header />
            <h1 className="text-center font-extrabold text-xl m-5">¡Bienvenido a tu carrito de cotizacciones Deproinv!</h1>
            <p className="text-xs text-center mb-10">(Para cotizaciones muy grandes, si lo prefiere, puede ponerse en contacto directamente con nosotros a travez de nuestro número telefónico)</p>
            <div className="min-h-screen w-full">
                <div className="flex flex-col items-center justify-center w-full">
                    {content}
                </div>
                <div className="flex bottom-0 w-full justify-center">
                    <button onClick={senddingQuotation} className="bg-gray-600 text-white text-center rounded-md shadow-lg hover:bg-gray-300 hover:text-black duration-500 w-1/2 mt-5 mb-2" >Solicitar cotización</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Quotation