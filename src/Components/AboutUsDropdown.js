import { useHistory } from 'react-router-dom'

const AboutUsDropdown = () => {
    const history = useHistory()

    function aboutOnclick (e) {
        e.preventDefault()

        history.push('/about-us')
    }

    return(
        <>
        <div className={"flex flex-row w-full h-auto bg-gray-300 shadow-lg overflow-hidden text-gray-800 divide-x-2 divide-gray-200 divide-solid font-bold"}>
            <div className="flex w-60 mx-10 flex-col">
                <p className="ml-2 text-blue-500">Sobre nosotros</p>
                <p className="ml-2 cursor-pointer font-semibold hover:underline" onClick={aboutOnclick}>La empresa</p>
                <p className="ml-2 cursor-pointer font-semibold hover:underline">Tu beneficio</p>
                <p className="ml-2 cursor-pointer font-semibold hover:underline">Internacional</p>
            </div>
            
            <div className="flex w-60 mx-10 flex-col">
                <p className="ml-2 text-blue-500">Carrera</p>
                <p className="ml-2 cursor-pointer font-semibold hover:underline">Trabajando con Deproinv</p>
            </div>
            
            <div className="flex w-60 mx-10 flex-col">
                <p className="ml-2 text-blue-500">Noticias</p>
                <p className="ml-2 cursor-pointer font-semibold hover:underline">Blog</p>
            </div>
        </div>
        </>
    )
}

export default AboutUsDropdown