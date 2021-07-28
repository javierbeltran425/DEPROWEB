import Header from '../Components/Header'
import Footer from '../Components/Footer'

import Earth from '../images/earth.jpg'
import Whatsapp from '../resources/whatsappLogo.png'

const ScopePage = () => {
    return(
        <>
            <div className="fixed flex flex-wrap top-0 z-20">
                <Header />
            </div>
            <div style={{ backgroundImage: `url(${Earth})` }} className="flex grid-cols-2 justify-center items-center w-full min-h-screen">
                <div className="flex flex-col justify-center w-full h-full">
                    <h1 className="text-white text-6xl text-center font-bold p-4">¿Donde te encuentras?</h1>
                    <h2 className="text-white text-center font-bold p-4">Donde tú te encuentres, nosotros hacemos todo lo posible por hacerte llegar tus productos.</h2>
                </div>

                <div className="flex flex-col justify-center w-full h-full">
                    <div className="flex justify-center w-full">
                        <div className="hover:animate-pulse ring-2 ring-blue-600 w-1/3 h-auto bg-white p-5 m-5 rounded-full shadow-md hover:shadow-lg transform hover:scale-110 duration-500">
                            <p className="text-center font-bold">AMERICA</p>
                        </div>
                    </div>

                    <div className="w-full flex justify-around">
                        <div className="hover:animate-pulse ring-2 ring-blue-600 w-1/3 h-auto bg-white p-5 m-5 rounded-full shadow-md hover:shadow-lg transform hover:scale-110 duration-500">
                            <p className="text-center font-bold">EUROPA</p>
                        </div>

                        <div className="hover:animate-pulse ring-2 ring-blue-600 w-1/3 h-auto bg-white p-5 m-5 rounded-full shadow-md hover:shadow-lg transform hover:scale-110 duration-500">
                            <p className="text-center font-bold">ASIA</p>
                        </div>
                    </div>

                    <div className="flex justify-center w-full">
                        <div className="hover:animate-pulse ring-2 ring-blue-600 w-1/3 h-auto bg-white p-5 m-5 rounded-full shadow-md hover:shadow-lg transform hover:scale-110 duration-500">
                            <p className="text-center font-bold">AFRICA</p>
                        </div>
                    </div>
                </div>
            </div>
            <a href="https://api.whatsapp.com/send?phone=50378532004" className="fixed z-10 w-16 h-16 m-10 right-0 bottom-0"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-900 opacity-75"></span><img src={Whatsapp}/></a>
            <Footer />
        </>
    )
}

export default ScopePage