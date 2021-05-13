import { useHistory } from 'react-router-dom'

const ProductSelector = () => {
    const history = useHistory()

    function Motores(e) {
        e.preventDefault()
        
        try{
            history.push('/products')

            localStorage.setItem('maker', 'sinetamer')
        }
        catch(err){
            console.log(err)
        }
        
    }

    return(
        <>
        <div className={"flex flex-row w-full h-auto bg-gray-200 shadow-lg divide-x divide-gray-300 overflow-hidden"}>
            <div className="text-gray-600 text-center w-1/2">
                <h2 className="p-3 font-bold underline">CONTROL Y PROTECCIÓN DE MOTOR</h2>
                <ul>
                    <li><button onClick={Motores} className="hover:bg-gray-500 p-1 w-full" >Motores</button></li>
                    <li><button onClick={Motores} className="hover:bg-gray-500 p-1 w-full" >Motores</button></li>
                    <li><button onClick={Motores} className="hover:bg-gray-500 p-1 w-full" >Motores</button></li>
                    <li><button onClick={Motores} className="hover:bg-gray-500 p-1 w-full" >Motores</button></li>
                </ul>
            </div>
            <div className="text-gray-600 text-center w-1/2">
            <h2 className="p-3 font-bold underline">MANDO Y SEÑALIZACIÓN</h2>
            <ul>
                <li className="hover:bg-gray-500 p-1"><a href="#">Producto 1</a></li>
                <li className="hover:bg-gray-500 p-1"><a href="#">Producto 2</a></li>
                <li className="hover:bg-gray-500 p-1"><a href="#">Producto 3</a></li>
                <li className="hover:bg-gray-500 p-1"><a href="#">Producto 4</a></li>
            </ul>
            </div>
        </div>
        </>
    )
}

export default ProductSelector