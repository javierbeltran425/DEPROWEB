import { useHistory } from 'react-router-dom'

const AdminHeader = () => {
    const history = useHistory()

    function ClickUpload(e) {
        e.preventDefault()

        history.push('/admin-page-upload')
    }
    
    function ClickUpdate(e) {
        e.preventDefault()
        
        history.push('/admin-page-update')
    }

    function ClickEditBlog(e) {
        e.preventDefault()
            
        history.push('/admin-page-blog')
    }

    function ClickSendEmail(e) {
        e.preventDefault()

        history.push('/admin-send-email')
    }

    function PostWork(e) {
        e.preventDefault()
        history.push('/admin-works')
    }

    function homeOnClick(e) {
        e.preventDefault()
        history.push('/')
    }

    return(
        <>
        <header className="flex justify-around bg-gray-400 w-full h-1/2">
            <button onClick={homeOnClick} className="h-16 p-5 w-full text-white font-bold hover:bg-gray-200 hover:text-black duration-500">HOME</button>
            <button onClick={ClickUpload} className="h-16 p-5 w-full text-white font-bold hover:bg-gray-200 hover:text-black duration-500">Subir productos</button>
            <button onClick={ClickUpdate} className="h-16 p-5 w-full text-white font-bold hover:bg-gray-200 hover:text-black duration-500">Actualizar productos</button>
            <button onClick={ClickEditBlog} className="h-16 p-5 w-full text-white font-bold hover:bg-gray-200 hover:text-black duration-500">Editar Blog</button>
            <button onClick={ClickSendEmail} className="h-16 p-5 w-full text-white font-bold hover:bg-gray-200 hover:text-black duration-500">Enviar ofertas o notificaciones</button>
            <button onClick={PostWork} className="h-16 p-5 w-full text-white font-bold hover:bg-gray-200 hover:text-black duration-500">Publicar trabajos</button>
        </header>
        </>
    )
}

export default AdminHeader