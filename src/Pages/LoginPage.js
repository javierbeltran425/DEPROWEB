import axios from 'axios'

import { useRef } from 'react'
import { useMutation } from 'react-query'
import { useHistory } from 'react-router-dom'

const LoginPage = () => {
    const email = useRef(null), password = useRef(null)
    const history = useHistory()

    function registerClick(e){
        e.preventDefault()

        history.push('/register-page')
    }

    const [ mutate, isLoading ] = useMutation(login => {
        axios.post(process.env.REACT_APP_API_URL + 'users/login', login)
            .then(res => {
                console.log(res.data)

                if(res.status === 200)
                    saveAndNavigate(res.data.token)
            })
            .catch(({ response }) => {
                if(response.status === 404)
                    alert("Usuario no encontrado")
                else if(response.status === 401)
                    alert("Constraseña incorrecta")
                else
                    alert(response.data.message || "Algo salió mal")
            })
    })

    function hancdleClick(e) {
        e.preventDefault()

        var loginData = { email: email.current.value, password: password.current.value }

        if( loginData.email === "" || loginData.password === "" )
            alert("Introduce tus datos primero.")
        else
            mutate(loginData)
    }

    function saveAndNavigate(token) {
        localStorage.setItem('token', token)
        history.push('/products')
    }

    return(
        <>
        <div className="flex w-screen h-screen bg-gray-400 justify-center items-center">
            <div className="flex flex-col w-5/6 h-5/6 bg-white shadow-lg justify-center items-center lg:w-1/2">
                <div className="flex flex-col w-full justify-center items-center">
                    <label className="mt-3 text-lg">Email</label>
                    <input ref={email} type="text" className="my-3 border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></input>
                </div>
                <div className="mt-5 flex flex-col justify-center items-center">
                    <label className="mt-3 text-lg">Password</label>
                    <input ref={password} type="password" className="my-3 border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></input>
                </div>
                <button onClick={hancdleClick} className="shadow-md w-5/12 p-1 my-4 bg-blue-400 hover:bg-blue-600 font-bold text-white rounded">
                    Iniciar sesión
                </button>
                <p className="font-normal text-sm my-1 mt-3 text-center">
                    ¿No tienes cuenta?, <a className="font-bold text-blue-300 cursor-pointer" onClick={registerClick}>registrate</a>
                </p>
            </div>
        </div>
        </>
    )
}

export default LoginPage