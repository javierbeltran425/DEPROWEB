import { useState } from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const PayAlert = () => {
    const [ Active, setActive ] = useState({ show: true })

    return(
        <div className={`${ Active ? "" : "hidden" } ` + " fixed flex justify-center items-center w-screen h-screen z-10"}>
            <div className="w-full h-full bg-gray-900 opacity-80"/>
            <div className="absolute flex flex-col w-1/2 h-1/2 bg-yellow-200 rounded-lg">
                <div className="flex w-full justify-end">
                    <Icon onClick={() => setActive(!Active)} icon={faTimes} className="m-2 cursor-pointer" />
                </div>
                <div className="w-full h-full">
                    <h1 className="text-center font-extrabold">¡AVISO DE FECHA DE PAGO PRÓXIMA!</h1>
                    <p className="text-center font-bold mt-10">
                        Estimado usuario, se le notifica que el pago del desarrollo de www.grupodeproinv.com esta atrasado.
                        <br/><br/>
                        La fecha definida para el pago: 23 de septiembre 2021
                        <br/><br/>
                        Se sugiere realizar el pago a más tardar el dia Lunes 27 de septiembre de 2021 para asegurar la continuidad del servicio.
                        <br/><br/>
                        <p className="text-center">¡GRACIAS!</p>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PayAlert