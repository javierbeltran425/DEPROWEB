import axios from 'axios'

import { useState, useRef } from 'react'
import { useMutation } from 'react-query'
import { useHistory } from 'react-router-dom'
import Select from 'react-select'

import AdminHeader from '../Components/AdminHeader'
import PayAlert from '../Components/PayAlert'
import SystemLocked from '../Components/SystemLocked'
import Footer from '../Components/Footer'

const AdminPageUpdate = () => {
    const history = useHistory()
    var productCode = useRef(null), productName = useRef(null), productDescription = useRef(null), productPrice = useRef(null),
                        productMaker = useRef(null), productCategory = useRef(null)
    var deleteProductCode = useRef(null)

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [maker, setMaker] = useState("")
    const [category, setCategory] = useState("")
    const isLogged = localStorage.getItem('token') != null

    const CategOptions = [
        { value: "Protecciones Electricas", label: "Protecciones Electricas"},
        { value: "Sensores", label: "Sensores"},
        { value: "Seguridad En Máquina", label: "Seguridad En Máquina"},
        { value: "Iluminación e Indicacion", label: "Iluminación e Indicacion"},
        { value: "Visión de Máquina", label: "Visión de Máquina"},
        { value: "Sensor de Redes Inalámbricas", label: "Sensor de Redes Inalámbricas"},
        { value: "Termocuplas", label: "Termocuplas"},
        { value: "Automatización y Control", label: "Automatización y Control"},
        { value: "Fuentes de Alimentación", label: "Fuentes de Alimentación"},
        { value: "Switches", label: "Switches"},
        { value: "Delta UPS Solutions", label: "Delta UPS Solutions"},
        { value: "Ventiladores Axiales", label: "Ventiladores Axiales"},
        { value: "Motores", label: "Motores"},
        { value: "Motoreductores", label: "Motoreductores"},
        { value: "Maniobra, Mando Pulsadores, Selectores y Pilotos", label: "Maniobra, Mando Pulsadores, Selectores y Pilotos"},
        { value: "Luminarias", label: "Luminarias"},
    ]

    const MakerOptions = [
        { value: "Banner", label: "Banner"},
        { value: "Grainger", label: "Grainger"},
        { value: "Lovato Electric", label: "Lovato Electric"},
        { value: "SineTamer", label: "SineTamer"},
        { value: "Disoric", label: "Disoric"},
        { value: "Maruson", label: "Maruson"},
    ]
    
    if(!isLogged)
        history.push('/')

    axios.get(process.env.REACT_APP_API_URL + 'users/my-info', {
        headers: { Authorize: localStorage.getItem('token') }
    })
    .then(res => {
        if( !res.data.user.admin ) 
            history.push('/')
    })

    const fd = new FormData()

    const [ mutate, isLoading ] = useMutation(upload => {
        axios.put(process.env.REACT_APP_API_URL + 'products/product-upload', upload, {
            headers: {"Content-Type": "multipart/form-data"}
        })
            .then(res => {
                console.log(res.data)

                if(res.status === 200)
                    alert("Producto actualizado")
                    history.push('/admin-page-update')
            })
            .catch(({ response }) => {
                alert("Algo salió mal")
                console.log(response)
            })
    })

    const [ mutateDelete, isLoadingDelete  ] = useMutation(data => {
        axios.put(process.env.REACT_APP_API_URL + 'products/product-delete', data)
            .then(res => {
                console.log(res.data)

                console.log(data)

                if(res.status === 200){
                    alert("Producto borrado")
                }
            })
            .catch(({ response }) => {
                console.log(response)
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

        if(productCode.current.value == "" || productName.current.value == "" || productDescription.current.value == "" || productPrice.current.value == "" || productMaker == "[object Object]" || productCategory == "[object Object]")
        {
            alert("No se deben dejar campos vacíos")
        }
        else
        {
            fd.append('productID', productCode.current.value)
            fd.append('name', productName.current.value)
            fd.append('description', productDescription.current.value)
            fd.append('price', productPrice.current.value)
            fd.append('maker', productMaker)
            fd.append('category', productCategory)
            fd.append('productImg', selectedFile)

            console.log(selectedFile)

            mutate(fd)
        }
    }

    async function search(e) {
        e.preventDefault()

        console.log(productCode.current.value)
        let petition = await axios.get(process.env.REACT_APP_API_URL + 'products/product-code?productID=' + `${productCode.current.value}`)

        if(petition.error){
            alert('Ocurrió un error')
        }

        console.log(petition)

        setName(petition.data.products.name)
        setPrice(petition.data.products.price)
        setDescription(petition.data.products.description)
        setMaker(petition.data.products.maker)
        setCategory(petition.data.products.category)

        if(petition.data != null){
                fd.append('name', name)
                fd.append('description', description)
                fd.append('price', price)
                fd.append('maker', maker)
                fd.append('category', category)
        }
    }

    function closeSesionClick(e) {
        e.preventDefault()

        localStorage.removeItem('token')

        history.push('/')
    }

    const makerChange = selectedOption => {

        productMaker = selectedOption.value
    }

    const categoryChange = selectedOption => {
        productCategory = selectedOption.value
    }

    function deleteProduct(e) {
        e.preventDefault()

        var data = {
            productID: deleteProductCode.current.value
        }

        mutateDelete(data)
    }

    return(
        <>
        {/*<PayAlert />*/}
        {/*<SystemLocked />*/}
        <div className="w-full bg-gray-500 flex justify-end h-auto">
            <div className="flex flex-row mr-5 text-white">
                <p className="px-4">Bienvenido</p>
                <button onClick={closeSesionClick} className="px-4 hover:text-black duration-500">Cerrar sesión</button>
            </div>
        </div>
        <AdminHeader />
           <div className="bg-gray-300 w-full h-full flex flex-col items-center overflow-y-auto">
                <h1 className="text-gray-600 text-3xl font-bold underline p-5 m-5">DEPROINV ADMINISTRACIÓN</h1>
                <h2 className="font-bold text-lg">ACTUALIZACIÓN DE PRODUCTOS</h2>
                <ul className="list-disc">
                    <li>Para actualizar un producto, primero ingrese el código del producto a actualizar y luego presione el botón "Buscar".</li>
                    <li>Para eliminar un producto, solamente debe ingresar el código del producto a eliminar y presionar el botón "Eliminar producto".</li>
                </ul>
                <div className="flex">
                    <form className="flex flex-col-2 w-auto h-full bg-white shadow-xl rounded-xl my-10">
                        <div className="m-10">
                            <div className="flex flex-col w-full justify-center items-center">
                                <label className="mt-3 text-lg">Codigo de producto</label>
                                <input ref={productCode} type="text" className="my-3 border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></input>
                            </div>
                            <div className="flex flex-col w-full justify-center items-center">
                                <label className="mt-3 text-lg">Nombre de producto</label>
                                <input ref={productName} value={name} onChange={e => setName(e.target.value)} type="text" className="my-3 border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></input>
                            </div>
                            <div className="flex flex-col w-full justify-center items-center">
                                <label className="mt-3 text-lg">Precio del producto</label>
                                <input ref={productPrice} value={price} onChange={e => setPrice(e.target.value)} type="number" step="0.01" className="my-3 border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></input>
                            </div>
                            <div className="flex flex-col w-full justify-center items-center">
                                <label className="mt-3 text-lg">Marca de producto</label>
                                <input value={maker} onChange={e => setMaker(e.target.value)} type="text" className="my-3 border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></input>
                                <Select options={MakerOptions} className="w-full shadow-md" onChange={makerChange}/>
                            </div>
                            <div className="flex flex-col w-full justify-center items-center">
                                <label className="mt-3 text-lg">Categoria de producto</label>
                                <input value={category} onChange={e => setCategory(e.target.value)} type="text" className="my-3 border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></input>
                                <Select options={CategOptions} className="w-full shadow-md" onChange={categoryChange}/>
                            </div>
                        </div>
                        <div className="m-10">
                            <div className="flex flex-col w-full justify-center items-center">
                                <label className="mt-3 text-lg">Descripción de producto</label>
                                <textarea rows="10" cols="50" ref={productDescription} value={description} onChange={e => setDescription(e.target.value)} type="text" className="my-3 border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></textarea>
                            </div>
                            <div className="flex flex-col w-full justify-center items-center">
                                <label className="mt-3 text-lg">Imagen del producto</label>
                                <input type="file" onChange={filesSelecterHandle} className="my-3 border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></input>
                            </div>
                            <div className="flex flex-col w-full justify-center items-center">
                                <button onClick={search} className="m-5 lg:mr-5 px-6 text-sm md:text-xl text-left lg:text-center lg:text-base text-white lg:shadow-lg bg-gray-600 rounded-full transform hover:scale-110 hover:text-black hover:bg-white motion-reduce:transform-none duration-1000">Buscar</button>
                                <button onClick={uploadOnclick} className="m-5 lg:mr-5 px-6 text-sm md:text-xl text-left lg:text-center lg:text-base text-white lg:shadow-lg bg-gray-600 rounded-full transform hover:scale-110 hover:text-black hover:bg-white motion-reduce:transform-none duration-1000">Actualizar producto</button>
                            </div>
                        </div>
                    </form>

                    <form className="flex w-auto h-full bg-white shadow-xl rounded-xl items-center mx-5 my-10">
                        <div className="m-10 flex flex-col justify-center">
                            <p>¿Necesitas eliminar un producto?</p>
                            <div className="flex flex-col w-full justify-center items-center">
                                <label className="mt-3 text-lg">Codigo de producto</label>
                                <input ref={deleteProductCode} type="text" className="my-3 border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></input>
                            </div>
                            <button onClick={deleteProduct} className="m-5 lg:mr-5 px-6 text-sm md:text-xl text-left lg:text-center lg:text-base text-white lg:shadow-lg bg-gray-600 rounded-full transform hover:scale-110 hover:text-black hover:bg-white motion-reduce:transform-none duration-1000">Eliminar producto</button>
                        </div>
                    </form>
                </div>
           </div>
           <Footer/>
        </>
    );
}

export default AdminPageUpdate