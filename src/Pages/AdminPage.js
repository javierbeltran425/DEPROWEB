import axios from 'axios'

import { useState, useRef } from 'react'
import { useMutation } from 'react-query'
import { useHistory } from 'react-router-dom'

import AdminHeader from '../Components/AdminHeader'

const AdminPage = () => {
    const history = useHistory()
    const productCode = useRef(null), productName = useRef(null), productDescription = useRef(null), productPrice = useRef(null),
                        productMaker = useRef(null), productCategory = useRef(null), productImage = useRef(null)
    const isLogged = localStorage.getItem('token') != null

    
    if(!isLogged)
        history.push('/')

    axios.get(process.env.REACT_APP_API_URL + 'users/my-info', {
        headers: { Authorize: localStorage.getItem('token') }
    })
    .then(res => {
        if( !res.data.user.admin ) 
            history.push('/')
    })

    const [ mutate, isLoading  ] = useMutation(register => {
        axios.post('https://deproapi.herokuapp.com/' + 'products/product-register', register)
            .then(res => {
                console.log(res.data)

                if(res.status === 201)
                    alert("Producto registrado")
                    history.push('/admin-page-upload')
            })
            .catch(({ response }) => {
                alert("Algo salió mal")
            })
    })

    var selectedFile = null

    const filesSelecterHandle = event => {
        console.log(event.target.files[0])
        selectedFile = event.target.files[0]
        console.log(selectedFile)
    }

    function uploadOnclick(e){
        e.preventDefault()
        
        const fd = new FormData()

        if(productCode.current.value == "" || productName.current.value == "" || productDescription.current.value == "" || productPrice.current.value == "" || productMaker.current.value == "" || productCategory.current.value == "")
        {
            alert("No se deben dejar campos vacíos")
        }
        else
        {
            fd.append('productID', productCode.current.value)
            fd.append('name', productName.current.value)
            fd.append('description', productDescription.current.value)
            fd.append('price', productPrice.current.value)
            fd.append('maker', productMaker.current.value)
            fd.append('category', productCategory.current.value)
            fd.append('productImg', selectedFile)

            console.log(selectedFile)

            mutate(fd)
        }
    }

    function closeSesionClick(e) {
        e.preventDefault()

        localStorage.removeItem('token')

        history.push('/')
    }

    return(
        <>
        <div className="w-full bg-gray-500 flex justify-end h-auto">
            <div className="flex flex-row mr-5 text-white">
                <p className="px-4">Bienvenido</p>
                <button onClick={closeSesionClick} className="px-4 hover:text-black duration-500">Cerrar sesión</button>
            </div>
        </div>
            <AdminHeader/>
            <div className="bg-gray-300 w-full h-full flex flex-col items-center">
                <h1 className="text-gray-600 text-3xl font-bold underline p-5 m-5">DEPROINV ADMINISTRACIÓN</h1>
                <h2 className="font-bold text-lg">CARGA DE PRODUCTOS</h2>
                <div className="flex flex-col-2 w-auto h-full bg-white shadow-xl rounded-xl">
                    <div className="m-10">
                        <div className="flex flex-col w-full justify-center items-center">
                            <label className="mt-3 text-lg">Codigo de producto</label>
                            <input ref={productCode} type="text" className="my-3 border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></input>
                        </div>
                        <div className="flex flex-col w-full justify-center items-center">
                            <label className="mt-3 text-lg">Nombre de producto</label>
                            <input ref={productName} type="text" className="my-3 border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></input>
                        </div>
                        <div className="flex flex-col w-full justify-center items-center">
                            <label className="mt-3 text-lg">Precio del producto</label>
                            <input ref={productPrice} type="number" step="0.01" className="my-3 border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></input>
                        </div>
                        <div className="flex flex-col w-full justify-center items-center">
                            <label className="mt-3 text-lg">Marca de producto</label>
                            <input ref={productMaker} type="text" className="my-3 border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></input>
                        </div>
                        <div className="flex flex-col w-full justify-center items-center">
                            <label className="mt-3 text-lg">Categoria de producto</label>
                            <input ref={productCategory} type="text" className="my-3 border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></input>
                        </div>
                    </div>
                    <div className="m-10">
                        <div className="flex flex-col w-full justify-center items-center">
                            <label className="mt-3 text-lg">Descripción de producto</label>
                            <textarea rows="10" cols="50" ref={productDescription} type="text" className="my-3 border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></textarea>
                        </div>
                        <div className="flex flex-col w-full justify-center items-center">
                            <label className="mt-3 text-lg">Imagen del producto</label>
                            <input type="file" onChange={filesSelecterHandle} className="my-3 border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></input>
                        </div>
                    </div>
                </div>
                <button onClick={uploadOnclick} className="m-5 lg:mr-5 px-6 text-sm md:text-xl text-left lg:text-center lg:text-base text-white lg:shadow-lg lg:bg-gray-600 lg:rounded-full transform lg:hover:scale-110 hover:text-black lg:hover:bg-white motion-reduce:transform-none duration-1000">Subir producto</button>
            </div>
        </>
    );
}

export default AdminPage