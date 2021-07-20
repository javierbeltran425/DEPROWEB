import Header from '../Components/Header'
import Footer from '../Components/Footer'

import BlogCard  from '../Components/BlogCard'

import { useAxiosGet } from '../Hooks/useAxiosGet'

const Blog = () => {
    let content = null
    let petition = useAxiosGet(process.env.REACT_APP_API_URL + 'blog/blog-get')

    if(petition.error){
        alert('Ha ocurrido un error')
    }

    if(petition.response != null){
        content = petition.response.blog.map(e => 
            <BlogCard title={`${e.title}`} content={`${e.content}`} />
        )
    }

    return(
        <>
            <Header />
                <div className="w-full min-h-screen bg-gray-300">
                    <h1 className="text-center text-3xl font-bold p-5">¡Bienvenido a nuestro Blog!</h1>
                    <p className="text-center">Aquí te presentamos las últimas noticias hacerca de la industria</p>
                    <div className="flex flex-col w-full h-auto items-center">
                       {content}
                    </div>
                </div>
            <Footer />
        </>
    )
}

export default Blog