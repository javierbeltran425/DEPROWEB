import { useHistory } from 'react-router-dom'

const AboutUsDropdown = () => {
    const history = useHistory()

    function aboutOnclick (e) {
        e.preventDefault()

        history.push('/about-us')
    }

    function blogOnClick(e) {
        e.preventDefault()

        history.push('/blog')
    }

    function yourBenefictClick(e) {
        e.preventDefault()

        history.push('/your-benefict')
    }

    function scopeClick(e) {
        e.preventDefault()
        history.push('/scope')
    }

    return(
        <>
        <div className={"flex flex-row w-full h-auto bg-gray-300 shadow-lg overflow-hidden text-gray-800 divide-x-2 divide-gray-200 divide-solid font-bold"}>
            <div className="flex mx-1 flex-col">
                <p className="ml-2 text-blue-500">Sobre nosotros</p>
                <p className="ml-2 cursor-pointer font-semibold hover:underline" onClick={aboutOnclick}>La empresa</p>
                <p className="ml-2 cursor-pointer font-semibold hover:underline" onClick={yourBenefictClick}>Tu beneficio</p>
            </div>

            <div className="flex mx-1 flex-col">
                <p className="ml-2 text-blue-500">Internacional</p>
                <p className="ml-2 cursor-pointer font-semibold hover:underline" onClick={scopeClick} >Alcance</p>
            </div>

            <div className="flex mx-1 flex-col">
                <p className="ml-2 text-blue-500">Noticias</p>
                <p onClick={blogOnClick} className="ml-2 cursor-pointer font-semibold hover:underline">Blog</p>
            </div>
        </div>
        </>
    )
}

export default AboutUsDropdown