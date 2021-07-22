import axios from 'axios'

import { useMutation } from 'react-query'
import { useHistory } from 'react-router-dom'

const ProductCard = ({ title, img, desc, productID, maker, categ }) => {
    const history = useHistory()
    const isLogged = localStorage.getItem('token') != null

    const [ mutate, isLoading ] = useMutation(register => {
        axios.post(process.env.REACT_APP_API_URL + 'userxproducts/userxproduct-register', register)
            .then(res => {
                if(res.status === 201){
                    alert("Producto agregado a Cotizaciones")
                }
            })
            .catch(({ response }) => {
                alert("No ha sido posible agregar el producto o ya se encuentra en Cotizaciones.")
            })
    })
    
    function addQuotation(e) {
        e.preventDefault()

        var quotationData

        if(!isLogged)
            history.push('/login-page')

        axios.get(process.env.REACT_APP_API_URL + 'users/my-info', {
            headers: { Authorize: localStorage.getItem('token') }
        })
        .then(res => {
            quotationData = {
                username: res.data.user.username,
                productID: productID,
                name: title,
                description: desc,
                maker: maker,
                category: categ,
                productImg: img
            }
            console.log(quotationData)
            mutate(quotationData)
        })
    }

    return(
        <>
        <div className="bg-white lg:w-1/4 h-1/3 overflow-hidden flex items-center rounded-lg shadow-md m-5 hover:shadow-xl transform hover:scale-105 duration-500">
            <img src={process.env.REACT_APP_BUCKET + img} alt="producto" className="w-1/3 h-auto m-5"/>
            <div className="flex flex-col w-full text-sm md:text-base justify-end text-right mr-10 my-2 items-end py-5">
                <h3 className="font-bold">{title}</h3>
                <div>
                    <p className="">{desc}</p>
                    <p className="font-bold">Marca: {maker}</p>
                </div>
                <a onClick={addQuotation} className="bg-gray-600 text-white text-center rounded-md shadow-lg hover:bg-gray-300 hover:text-black duration-500 w-1/2 mt-5 mb-2 cursor-pointer" >Cotizar</a>
            </div>
        </div>
        </>
    )
}

export default ProductCard