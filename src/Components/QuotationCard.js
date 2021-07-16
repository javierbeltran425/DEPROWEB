import axios from 'axios'

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

import { useState } from 'react'
import { useMutation } from 'react-query'
import { useHistory } from 'react-router-dom'

import { faTrash } from '@fortawesome/free-solid-svg-icons'

const QuotationCard = ({ title, img, desc, productID, maker, categ, actUser }) => {
    var [amount, setAmount] = useState(1)
    const history = useHistory()
    const isLogged = localStorage.getItem('token') != null

    if(localStorage.getItem(productID) != null)
        amount = localStorage.getItem(productID)
    else
        localStorage.setItem(productID, 1)

    const [ mutate, isLoading ] = useMutation(unRegister => {
        axios.put(process.env.REACT_APP_API_URL + 'userxproducts/deletexuser', unRegister, {
            headers: {"Content-Type": "application/json"}
        })
            .then(res => {
                if(res.status === 200){
                    alert("Producto borrado de Cotizaciones")
                    localStorage.removeItem(productID)
                    window.location.replace('');
                }
            })
            .catch(({ response }) => {
                alert("Ha ocurrido un error, vuelve a intentarlo más tarde.")
            })
    })
    
    function addQuotation(e) {
        e.preventDefault()

        setAmount(amount++)
        localStorage.setItem(productID, amount )
    }

    function subtractQuotation(e) {
        e.preventDefault()

        setAmount(amount--)
        localStorage.setItem(productID, amount )
    }

    function deleteQuotation(e) {
        e.preventDefault()

        var data = {
            username: actUser.location.state.response.user.username,
            productID: productID,
        }

        mutate(data)
    }

    return(
        <>
        <div className="bg-white lg:w-2/4 h-1/3 overflow-hidden flex flex-col lg:flex-row items-center rounded-lg shadow-md m-5 hover:shadow-xl transform hover:scale-105 duration-500">
        <Icon onClick={deleteQuotation} icon={faTrash} className="absolute top-3 right-3 text-black text-xl hover:text-red-600 duration-500 cursor-pointer"/>
            <img src={process.env.REACT_APP_BUCKET + img} alt="producto" className="w-1/3 h-auto m-5"/>
            <div className="flex flex-col items-center w-full lg:justify-end text-right mr-10 my-2 lg:items-end">
                <h3 className="font-bold text-sm lg:text-base overflow-ellipsis">{title}</h3>
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