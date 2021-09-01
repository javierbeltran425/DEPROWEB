const SystemLocked = () => {
    return(
        <div className={"fixed flex justify-center items-center w-screen h-screen z-10"}>
            <div className="w-full h-full bg-gray-900 opacity-80"/>
            <div className="absolute flex flex-col w-1/2 h-1/2 bg-white rounded-lg">
                <div className="flex flex-col justify-center w-full h-full p-4">
                    <h1 className="text-center font-extrabold">¡NOTIFICACIÓN DE SUSPENCIÓN POR ATRASO DE PAGO!</h1>
                    <p className="text-center font-bold mt-10">
                    Estimado usuario, se le notifica que por falta de pago de desarrollo de sistema se 
                    le ha restringido el uso del panel de administracion. 
                    Se recomienda realizar  el pago a la brevedad posible para restablecer el servicio.
                    <br/><br/>
                    En cuanto el pago sea efectivo se recuperara el uso normal del sistema.
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default SystemLocked