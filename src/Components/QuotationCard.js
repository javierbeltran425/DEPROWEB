import axios from 'axios'

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

import { useState } from 'react'
import { useMutation } from 'react-query'
import { useHistory } from 'react-router-dom'

import { faTrash } from '@fortawesome/free-solid-svg-icons'

const QuotationCard = ({ title, img, desc, productID, maker, categ }) => {
    var [amount, setAmount] = useState(1)
    const history = useHistory()
    const isLogged = localStorage.getItem('token') != null

    amount = localStorage.getItem(productID)

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

        setAmount(amount++)
        localStorage.setItem(productID, amount )
        console.log(amount)
    }

    function subtractQuotation(e) {
        e.preventDefault()

        setAmount(amount--)
        localStorage.setItem(productID, amount )
        console.log(amount)
    }

    return(
        <>
        <div className="bg-white lg:w-2/4 h-1/3 overflow-hidden flex items-center rounded-lg shadow-md m-5 hover:shadow-xl transform hover:scale-105 duration-500">
        <Icon icon={faTrash} className="absolute top-3 right-3 text-black text-xl hover:text-red-600 duration-500 cursor-pointer"/>
            <img src={process.env.REACT_APP_BUCKET + img} alt="producto" className="w-1/3 h-auto m-5"/>
            <div className="flex flex-col w-full justify-end text-right mr-10 my-2 items-end">
                <h3 className="font-bold">{title}</h3>
                <div>
                    <p className="">{desc}</p>
                    <p className="font-bold">Marca: {maker}</p>
                    <div className="flex flex-col w-full justify-center items-center">
                        <label className="mt-3 text-lg font-bold">Cantidad de producto</label>
                        <p className="font-bold">{amount}</p>
                        <div className="flex flex-row">
                            <button onClick={addQuotation} className="text-black bg-gray-100 rounded-full shadow-md px-2 text-2xl font-bold text-center cursor-pointer mx-2 mt-4 hover:bg-black hover:text-white duration-500">+</button>
                            <button onClick={subtractQuotation} className="text-black bg-gray-100 rounded-full shadow-md px-2 text-2xl font-bold text-center cursor-pointer mx-2 mt-4 hover:bg-black hover:text-white duration-500">-</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default QuotationCard