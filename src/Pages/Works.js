import Header from '../Components/Header'
import Footer from '../Components/Footer'

import WorkCard  from '../Components/WorkCard'

import { useAxiosGet } from '../Hooks/useAxiosGet'

const Works = () => {
    let content = null
    let petition = useAxiosGet(process.env.REACT_APP_API_URL + 'works/work-get')

    if(petition.error){
        alert('Ha ocurrido un error')
    }

    if(petition.response != null){
        content = petition.response.work.map(e => 
            <WorkCard title={`${e.title}`} content={`${e.content}`} image={`${e.image}`} />
        )
    }

    return(
        <>
            <div className="fixed flex flex-wrap top-0 z-20">
                <Header />
            </div>
            <div className="w-full min-h-screen bg-gray-300">
                <h1 className="text-center text-4xl underline font-extrabold pt-40 mb-10">Algunos de nuestros trabajos</h1>
                <div wrap="hard" className="flex flex-col w-full h-auto items-center">
                       {content}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Works