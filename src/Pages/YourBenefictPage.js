import Header from '../Components/Header'
import Footer from '../Components/Footer'

import Inteligencia from '../images/inteligencia.jpg'
import Soluciones from '../images/soluciones.jpg'
import Practicidad from '../images/practicidad.jpg'

const YourBenefictPage = () => {
    return (
        <>
            <Header />
                <div className="w-full min-h-screen bg-gray-300">
                    <h1 className="text-center text-4xl p-10 font-extrabold text-blue-600">¡EN DEPROINV NUESTRA INSPIRACIÓN ERES TÚ!</h1>
                    <p className="text-justify px-10">
                        Deseamos poder poner su disposición los mejores productos y las 
                        soluciones más eficaces para sus necesidades individuales. 
                        Es por eso que en Deltas Proyectos e Inversiones nos esforzamos cada 
                        día por pensar más allá de lo habitual y traerte las mejores soluciones 
                        para tus proyectos. Nos enfocamos en adoptar un enfoque directo y trabajar 
                        de la mano con nuestros clientes, empleados y socios.
                    </p>

                    <div className="flex justify-around w-full h-auto mt-10">

                        <div className="w-1/4 h-96 bg-white rounded-lg shadow-md">
                            <img src={Soluciones} className="p-5"/>
                            <ul className="list-disc mx-10 mb-4 text-blue-600">
                                <li>Asesoramiento específico y experiencia en soluciones técnicas.</li>
                                <li>Soluciones específicas para el cliente.</li>
                            </ul>
                        </div>

                        <div className="w-1/4 h-96 bg-white rounded-lg shadow-md">
                            <img src={Inteligencia} className="p-5"/>
                            <ul className="list-disc mx-10 mb-4 text-blue-600">
                                <li>Soluciones inteligentes para tus proyectos.</li>
                                <li>Productos de alta calidad.</li>
                                <li>Productos eficientes y fáciles de utilizar.</li>
                            </ul>
                        </div>

                        <div className="w-1/4 h-96 bg-white rounded-lg shadow-md">
                            <img src={Practicidad} className="p-5"/>
                            <ul className="list-disc mx-10 mb-4 text-blue-600">
                                <li>Para nosotros son importantes las relaciones laborales cooperativas.</li>
                                <li>Mayor eficiencia.</li>
                                <li>El trabajo en equipo es clave.</li>
                            </ul>
                        </div>

                    </div>

                    <div className="flex grid-cols-2 justify-center items-center w-full min-h-screen mt-32 pb-20 pt-20 pl-10 bg-gray-500">
                        <div className="flex flex-col justify-center w-full h-full ml-20">
                            <h2 className="text-4xl font-extrabold text-blue-300">Alcanzaremos sus metas</h2>
                            <h3 className="text-2xl font-bold">Un paso a la vez</h3>
                        </div>

                        <div className="flex flex-row flex-wrap justify-center items-center w-full h-full mt-10 mr-20">
                            <div className="flex justify-center w-full">
                                <div className="hover:animate-pulse ring-2 ring-blue-600 w-1/3 h-auto bg-white p-5 m-5 rounded-full shadow-md hover:shadow-lg transform hover:scale-110 duration-500">
                                    <p className="text-center font-bold">CALIDAD </p>
                                </div>
                            </div>
                            
                            <div className="hover:animate-pulse ring-2 ring-blue-600 w-1/3 h-auto bg-white p-5 m-5 rounded-full shadow-md hover:shadow-lg transform hover:scale-110 duration-500">
                                <p className="text-center font-bold">CONOCIMIENTO </p>
                            </div>

                            <div className="hover:animate-pulse ring-2 ring-blue-600 w-1/3 h-auto bg-white p-5 m-5 rounded-full shadow-md hover:shadow-lg transform hover:scale-110 duration-500">
                                <p className="text-center font-bold">CONFIANZA</p>
                            </div>

                            <div className="hover:animate-pulse ring-2 ring-blue-600 w-1/3 h-auto bg-white p-5 m-5 rounded-full shadow-md hover:shadow-lg transform hover:scale-110 duration-500">
                                <p className="text-center font-bold">IDEAS</p>
                            </div>

                            <div className="hover:animate-pulse ring-2 ring-blue-600 w-1/3 h-auto bg-white p-5 m-5 rounded-full shadow-md hover:shadow-lg transform hover:scale-110 duration-500">
                                <p className="text-center font-bold">SOPORTE</p>
                            </div>

                            <div className="hover:animate-pulse ring-2 ring-blue-600 w-1/3 h-auto bg-white p-5 m-5 rounded-full shadow-md hover:shadow-lg transform hover:scale-110 duration-500">
                                <p className="text-center font-bold">FLEXIBILIDAD</p>
                            </div>

                            <div className="hover:animate-pulse ring-2 ring-blue-600 w-1/3 h-auto bg-white p-5 m-5 rounded-full shadow-md hover:shadow-lg transform hover:scale-110 duration-500">
                                <p className="text-center font-bold">DISPONIBILIDAD</p>
                            </div>

                            <div className="flex justify-center w-full">
                                <div className="hover:animate-pulse ring-2 ring-blue-600 w-1/3 h-auto bg-white p-5 m-5 rounded-full shadow-md hover:shadow-lg transform hover:scale-110 duration-500">
                                    <p className="text-center font-bold">FIABILIDAD</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    )
}

export default YourBenefictPage