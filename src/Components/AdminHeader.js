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

    return(
        <>
        <header className="flex justify-around bg-gray-400 w-full h-1/2">
            <button onClick={ClickUpload} className="h-16 p-5 w-full text-white font-bold hover:bg-gray-200 hover:text-black duration-500">Subir productos</button>
            <button onClick={ClickUpdate} className="h-16 p-5 w-full text-white font-bold hover:bg-gray-200 hover:text-black duration-500">Actualizar productos</button>
        </header>
        </>
    )
}

export default AdminHeader