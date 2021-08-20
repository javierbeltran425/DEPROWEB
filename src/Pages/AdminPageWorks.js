import axios from 'axios'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import { useState, useRef } from 'react'
import { useMutation } from 'react-query'
import { useHistory } from 'react-router-dom'

import AdminHeader from '../Components/AdminHeader'
import Footer from '../Components/Footer'

const AdminPageWorks = () => {
    const history = useHistory()
    const isLogged = localStorage.getItem('token') != null
    var pTitle = useRef(null), pContent = useRef(null)
    var deleteTitle = useRef(null)
    var uTitle = useRef(null)
    var updateContent = useRef(null)

    const [uContent, setUContent] = useState('')

    if(!isLogged)
        history.push('/')

    axios.get(process.env.REACT_APP_API_URL + 'users/my-info', {
        headers: { Authorize: localStorage.getItem('token') }
    })
    .then(res => {
        if( !res.data.user.admin ) 
            history.push('/')
    })

    const [ mutate, isLoading  ] = useMutation(data => {
        axios.post(process.env.REACT_APP_API_URL + 'works/work-register', data)
            .then(res => {
                console.log(res.data)

                if(res.status === 201){
                    alert("Artículo publicado")
                    window.location.replace('');
                }
            })
            .catch(({ response }) => {
                console.log(response)
                alert("Algo salió mal")
            })
    })

    const [ mutateDelete, isLoadingDelete  ] = useMutation(data => {
        axios.put(process.env.REACT_APP_API_URL + 'works/work-delete', data)
            .then(res => {
                console.log(res.data)

                console.log(data)

                if(res.status === 200){
                    alert("Artículo borrado")
                }
            })
            .catch(({ response }) => {
                console.log(response)
                alert("Algo salió mal")
            })
    })

    const [ mutateUpdate, isLoadingUpdate  ] = useMutation(update => {
        axios.put(process.env.REACT_APP_API_URL + 'works/work-update', update, {
            headers: {"Content-Type": "application/json"}
        })
            .then(res => {
                console.log(res.data)

                if(res.status === 200)
                    alert("Artículo actualizado")
            })
            .catch(({ response }) => {
                alert("Algo salió mal")
                console.log(response)
            })
    })

    function closeSesionClick(e) {
        e.preventDefault()

        localStorage.removeItem('token')

        history.push('/')
    }

    var selectedFile = null
    const filesSelecterHandle = event => {
        console.log(event.target.files[0])
        selectedFile = event.target.files[0]
        console.log(selectedFile)
    }

    function uploadOnclick(e) {
        e.preventDefault()

        const fd = new FormData()

        if(pTitle.current.value == "" || pContent.current.value == "" )
        {
            alert("No se deben dejar campos vacíos")
        }
        else
        {
            fd.append('title', pTitle.current.value)
            fd.append('content', pContent.current.value)
            fd.append('image', selectedFile)

            console.log(selectedFile)

            mutate(fd)
        }   
    }

    function deleteOnClick(e) {
        e.preventDefault()

        var data = {
            title: deleteTitle.current.value
        }

        mutateDelete(data)
    }

    async function search(e) {
        e.preventDefault()

        let petition = await axios.get(process.env.REACT_APP_API_URL + 'works/work-get-title?title=' + `${uTitle.current.value}`)

        if(petition.error){
            alert('Ocurrió un error')
        }

        setUContent(petition.data.work.content)

        console.log("Impresion del uContent" + uContent)

    }

    var selectedFileUpdate = null
    const filesSelecterHandleUpdate = event => {
        console.log(event.target.files[0])
        selectedFileUpdate = event.target.files[0]
        console.log(selectedFileUpdate)
    }

    function updateOnCLick(e) {
        e.preventDefault()

        const fd = new FormData()

        if(uTitle.current.value == "" || updateContent.current.value == "")
            alert('No se pueden dejar campos vacíos')
        else{
            fd.append('title', uTitle.current.value)
            fd.append('content', updateContent.current.value)
            fd.append('image', selectedFileUpdate)
    
            mutateUpdate(fd)
        }
    }


    return(
        <>
            <div className="w-full bg-gray-500 flex justify-end h-auto">
                <div className="flex flex-row mr-5 text-white">
                <p className="px-4">Bienvenido</p>
                    <div className="flex flex-row items-center px-2">
                        <Icon icon={faSignOutAlt} className="text-blue-300"/>
                        <a onClick={closeSesionClick} className="px-1 hover:text-blue-300 duration-500 cursor-pointer">Cerrar sesión</a>
                    </div>
                </div>
            </div>
            <AdminHeader />
            <div className="flex justify-center w-full min-h-screen bg-gray-300">
                <div className="w-4/5 h-auto bg-white m-10 rounded-xl">
                    <h1 className="text-center font-bold m-5 text-2xl">Publicar trabajo</h1>
                    <div className="flex flex-col w-full justify-center items-center">
                        <label className="mt-3 text-lg">Título</label>
                        <input ref={pTitle} type="text" className="my-3 border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none w-3/4"></input>
                    </div>
                    <div className="flex flex-col w-full justify-center items-center">
                        <label className="mt-3 text-lg">Contenido</label>
                        <textarea ref={pContent} type="text" rows="32" className="my-3 border rounded shadow-lg text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none w-3/4"></textarea>
                    </div>
                    <div className="flex flex-col w-full justify-center items-center">
                        <label className="mt-3 text-lg">Fotografía del trabajo</label>
                        <input type="file" onChange={filesSelecterHandle} className="my-3 border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></input>
                    </div>
                    <div className="flex justify-center w-full h-auto">
                        <button onClick={uploadOnclick} className="m-5 lg:mr-5 px-6 text-sm md:text-xl text-left lg:text-center lg:text-base text-white lg:shadow-lg lg:bg-gray-600 lg:rounded-full transform lg:hover:scale-110 hover:text-black lg:hover:bg-white motion-reduce:transform-none duration-1000">Publicar</button>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="w-4/5 h-auto bg-white m-10 rounded-xl">
                        <h1 className="text-center font-bold m-5 text-2xl">Eliminar publicación</h1>
                        <p className="text-center px-5">Para eliminar una publicación solo debe ingresar el título del artículo que se desea borrar.</p>
                        <div className="flex flex-col w-full justify-center items-center">
                            <label className="mt-3 text-lg">Título</label>
                            <input ref={deleteTitle} type="text" className="my-3 border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none w-3/4"></input>
                        </div>
                        <div className="flex justify-center w-full">
                            <button onClick={deleteOnClick} className="m-5 lg:mr-5 px-6 text-sm md:text-xl text-left lg:text-center lg:text-base text-white lg:shadow-lg lg:bg-gray-600 lg:rounded-full transform lg:hover:scale-110 hover:text-black lg:hover:bg-white motion-reduce:transform-none duration-1000">Borrar</button>
                        </div>
                    </div>

                    <div className="w-4/5 h-auto bg-white m-10 rounded-xl">
                        <h1 className="text-center font-bold m-5 text-2xl">Editar publicación</h1>
                        <p className="text-center">
                            Para editar una publicación primero debe ingresar el título del artículo
                            que se desea editar y luego presionar el botón "Buscar".
                        </p>
                        <div className="flex flex-col w-full justify-center items-center">
                            <label className="mt-3 text-lg">Título</label>
                            <div className="flex flex-row">
                                <input ref={uTitle} type="text" className="my-3 border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none w-3/4"></input>
                                <button onClick={search} className="m-5 lg:mr-5 px-6 text-sm md:text-xl text-left lg:text-center lg:text-base text-white lg:shadow-lg lg:bg-gray-600 lg:rounded-full transform lg:hover:scale-110 hover:text-black lg:hover:bg-white motion-reduce:transform-none duration-1000">Buscar</button>
                            </div>
                        </div>
                        <div className="flex flex-col w-full justify-center items-center">
                            <label className="mt-3 text-lg">Contenido</label>
                            <textarea ref={updateContent} value={uContent} onChange={e => setUContent(e.target.value)} type="text" rows="15" className="my-3 border rounded shadow-lg text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none w-3/4"></textarea>
                        </div>
                        <div className="flex flex-col w-full justify-center items-center">
                            <label className="mt-3 text-lg">Fotografía del trabajo</label>
                            <input type="file" onChange={filesSelecterHandleUpdate} className="my-3 border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></input>
                        </div>
                        <div className="flex justify-center w-full h-auto">
                            <button onClick={updateOnCLick} className="m-5 lg:mr-5 px-6 text-sm md:text-xl text-left lg:text-center lg:text-base text-white lg:shadow-lg lg:bg-gray-600 lg:rounded-full transform lg:hover:scale-110 hover:text-black lg:hover:bg-white motion-reduce:transform-none duration-1000">Publicar</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AdminPageWorks