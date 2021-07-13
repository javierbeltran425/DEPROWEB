import axios from 'axios'

import { useRef } from 'react'
import { useMutation } from 'react-query'
import { useHistory } from 'react-router-dom'
 
const RegisterPage = () => {
    const history = useHistory()
    const fullname = useRef(null), username = useRef(null), password = useRef(null), email = useRef(null)

    const [ mutate, isLoading ] = useMutation(register => {
        axios.post(process.env.REACT_APP_API_URL + 'users/register', register)
            .then(res => {
                console.log(res.data)

                if(res.status === 201){
                    alert("El usuario a sido creado con éxito")
                    history.push('')
                }
            })
            .catch(({ response }) => {
                alert("No ha sido posible crear al usuario. Por favor, intente más tarde.")
                console.log(response.data.message)
            })
    })

    function hancdleClick(e) {
        e.preventDefault()

        var loginData = { fullname: fullname.current.value, username: username.current.value, email: email.current.value, password: password.current.value }

        if( loginData.fullname === "" || loginData.username === "" || loginData.email === "" || loginData.password === "")
            alert("Es necesario llenar todos los campos")
        else
            mutate(loginData)
    }

    return(
        <>
        <div className="flex w-screen h-screen bg-gray-400 justify-center items-center">
            <div className="flex flex-col w-5/6 h-5/6 bg-white shadow-lg justify-center items-center lg:w-1/2">
            <div className="flex flex-col w-full justify-center items-center">
                    <label className="mt-3 text-lg">Nombre completo</label>
                    <input ref={fullname} type="text" className="my-3 border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></input>
                </div>
                <div className="flex flex-col w-full justify-center items-center">
                    <label className="mt-3 text-lg">Username</label>
                    <input ref={username} type="text" className="my-3 border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></input>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <label className="mt-3 text-lg">Email</label>
                    <input ref={email} type="text" className="my-3 border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></input>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <label className="mt-3 text-lg">Password</label>
                    <input ref={password} type="password" className="my-3 border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></input>
                </div>
                <button onClick={hancdleClick} className="shadow-md w-5/12 p-1 mt-6 bg-blue-400 hover:bg-blue-600 font-bold text-white rounded">
                    Registrarme
                </button>
            </div>
        </div>
        </>
    )
}

export default RegisterPage