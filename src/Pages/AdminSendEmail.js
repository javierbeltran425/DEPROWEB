import axios from 'axios'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import { useHistory } from 'react-router-dom'
import { useMutation } from 'react-query'
import { useRef } from 'react'

import AdminHeader from '../Components/AdminHeader'
import Footer from '../Components/Footer'

const AdminSendEmail = () => {
    const history = useHistory()
    const isLogged = localStorage.getItem('token') != null
    var subject = useRef(null), content = useRef(null)

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
        axios.post(process.env.REACT_APP_API_URL + 'users/send-global-mail', data)
            .then(res => {
                console.log(res.data)

                if(res.status === 201)
                    alert("Este correo ha sido enviado a todos los usuarios registrados en el sistema web Deproinv.")
            })
            .catch(({ response }) => {
                alert("Algo salió mal, por favor vuelva a intentarlo más tarde.")
            })
    })

    function closeSesionClick(e) {
        e.preventDefault()

        localStorage.removeItem('token')

        history.push('/')
    }
/*
    var selectedFile = null
    const filesSelecterHandle = event => {
        console.log(event.target.files[0])
        selectedFile = event.target.files[0]
        console.log(selectedFile)
    }
*/
    function sendEmail(e) {
        e.preventDefault()
        const fd = new FormData()

        if(subject.current.value == "" || content.current.value == "")
            alert('Favor asegurarse de no dejar campos en blanco.')
        else{
            fd.append('subject', subject.current.value)
            fd.append('content', content.current.value)
            //fd.append('image', selectedFile)

            mutate(fd)
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
            <AdminHeader/>
            <div className="flex justify-center w-full min-h-screen bg-gray-300">
                <form className="bg-gray-200 w-3/4 my-10 rounded-lg shadow-lg">
                    <h1 className="text-center font-bold p-5 text-xl underline">Envío global de correos</h1>
                    <p className="p-4 text-sm">
                        El presente formulario presenta un formato de correo electrónico, el cual 
                        será enviado de forma masiva a todos los usuarios registrados en el sistema web de Deproinv.
                        <br/><br/>
                        Si necesita más espacio en el cuerpo del correo, puede sujetar el recuadro de la esquina 
                        inferior izquiera y estirarlo hacia abajo.
                    </p>

                    <div className="flex flex-row w-full mt-5">
                        <label className="text-lg font-bold mt-3 ml-5">Asunto:</label>
                        <input ref={subject} type="text" className="my-3 ml-2 w-5/6 border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></input>
                    </div>

                    <div className="flex flex-col w-full mt-5 items-center">
                        <label className="text-lg font-bold mt-3">Cuerpo del correo</label>
                        <textarea ref={content} type="text" rows="20" className="my-3 w-5/6 border rounded shadow-md text-gray-600 px-2 py-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></textarea>
                    </div>

                    {/*<div className="flex flex-col w-full justify-center items-center">
                        <label className="mt-3 text-lg">Imagen del artículo</label>
                        <input type="file" onChange={filesSelecterHandle} className="my-3 border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></input>
                    </div>*/}

                    <div className="flex w-full justify-end">
                        <button onClick={sendEmail} className="m-5 lg:mr-5 px-6 text-sm md:text-xl text-left lg:text-center lg:text-base text-white lg:shadow-lg lg:bg-gray-600 lg:rounded-full transform lg:hover:scale-110 hover:text-black lg:hover:bg-white motion-reduce:transform-none duration-1000">Enviar correo</button>
                    </div>

                </form>

            </div>
            <Footer/>
        </>
    )
}

export default AdminSendEmail