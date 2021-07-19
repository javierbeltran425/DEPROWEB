import { useHistory } from 'react-router-dom'

const ProductSelector = () => {
    const history = useHistory()

    function SetCategory(e) {

        try{
            history.push('/products')

            localStorage.setItem('category', e)
            window.location.replace('');
        }
        catch(err){
            console.log(err)
        }
        
    }

    return(
        <>
        <div className={"flex flex-row w-full h-auto bg-gray-200 shadow-lg divide-x divide-gray-300 overflow-hidden"}>
            <div className="text-gray-600 text-center w-1/2">
                <ul>
                    <li><button onClick={()=> {
                        localStorage.removeItem('category')
                        window.location.replace('');
                        }} className="hover:bg-gray-500 p-1 w-full hover:text-white font-bold" >Todos</button></li>
                    <li><button onClick={()=> SetCategory('Protecciones Electricas')} className="hover:bg-gray-500 p-1 w-full hover:text-white" >Protecciones Electricas</button></li>
                    <li><button onClick={()=> SetCategory('Sensores')} className="hover:bg-gray-500 p-1 w-full hover:text-white" >Sensores</button></li>
                    <li><button onClick={()=> SetCategory('Seguridad En Máquina')} className="hover:bg-gray-500 p-1 w-full hover:text-white" >Seguridad En Máquina</button></li>
                    <li><button onClick={()=> SetCategory('Iluminación e Indicacion')} className="hover:bg-gray-500 p-1 w-full hover:text-white" >Iluminación e Indicacion</button></li>
                </ul>
            </div>
            <div className="text-gray-600 text-center w-1/2">
                <ul>
                    <li><button onClick={()=> SetCategory('Sensor de Redes Inalámbricas')} className="hover:bg-gray-500 p-1 w-full hover:text-white" >Sensor de Redes Inalámbricas</button></li>
                    <li><button onClick={()=> SetCategory('Termocuplas')} className="hover:bg-gray-500 p-1 w-full hover:text-white" >Termocuplas</button></li>
                    <li><button onClick={()=> SetCategory('Automatización y Control')} className="hover:bg-gray-500 p-1 w-full hover:text-white" >Automatización y Control</button></li>
                    <li><button onClick={()=> SetCategory('Fuentes de Alimentación')} className="hover:bg-gray-500 p-1 w-full hover:text-white" >Fuentes de Alimentación</button></li>
                    <li><button onClick={()=> SetCategory('Switches')} className="hover:bg-gray-500 p-1 w-full hover:text-white" >Switches</button></li>
                </ul>
            </div>
            <div className="text-gray-600 text-center w-1/2">
                <ul>
                    <li><button onClick={()=> SetCategory('Control')} className="hover:bg-gray-500 p-1 w-full hover:text-white" >Control</button></li>
                    <li><button onClick={()=> SetCategory('Delta UPS Solutions')} className="hover:bg-gray-500 p-1 w-full hover:text-white" >Delta UPS Solutions</button></li>
                    <li><button onClick={()=> SetCategory('Ventiladores Axiales')} className="hover:bg-gray-500 p-1 w-full hover:text-white" >Ventiladores Axiales</button></li>
                    <li><button onClick={()=> SetCategory('Motores')} className="hover:bg-gray-500 p-1 w-full hover:text-white" >Motores</button></li>
                    <li><button onClick={()=> SetCategory('Motoreductores')} className="hover:bg-gray-500 p-1 w-full hover:text-white" >Motoreductores</button></li>
                </ul>
            </div>
            <div className="text-gray-600 text-center w-1/2">
                <ul>
                    <li><button onClick={()=> SetCategory('Maniobra Mando Pulsadores,Selectores y Pilotos')} className="hover:bg-gray-500 p-1 w-full hover:text-white" >Maniobra Mando Pulsadores,Selectores y Pilotos</button></li>
                    <li><button onClick={()=> SetCategory('Luminarias')} className="hover:bg-gray-500 p-1 w-full hover:text-white" >Luminarias</button></li>
                    <li><button onClick={()=> SetCategory('Visión de Máquina')} className="hover:bg-gray-500 p-1 w-full hover:text-white" >Visión de Máquina</button></li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default ProductSelector