import Header from '../Components/Header'
import Footer from '../Components/Footer'

import Mision from '../images/Mision.jpg'
import Vision from '../images/Vision.jpg'
import Laptop from '../images/laptop.jpg'
import Social from '../images/Social.jpg'

const AboutUsPage = () => {
    return(
        <>
            <div className="fixed w-full flex flex-wrap z-10">
                <Header />
            </div>
            <div className="flex flex-col w-full bg-gray-300">
                <h1 className="text-center font-bold md:text-2xl pt-40">BIENVENIDOS A DELTAS PROYECTOS E INVERSIONES SA DE CV</h1>
                <h5 className="text-center">DESDE 1996</h5>
            </div>

            <div className="flex w-full flex-col md:flex-row md:grid-cols-2 bg-gray-300">
                <div className="m-16">
                    <h3 className="font-bold text-center">MISION</h3>
                    <p className="font-normal text-justify md:px-32">
                        Brindar Productos y servicios competitivos en los 
                        campos de la Industria. Nos encantan los desafíos que nos 
                        presentan nuestros clientes, queremos ayudarlo a diseñar sus 
                        aplicaciones industriales para que sean más eficientes y confiables 
                        en el proceso, desde simples aplicaciones estándar hasta complejas 
                        soluciones específicas para el cliente.
                    </p>
                </div>
                <div className="m-16">
                    <img src={Mision} />
                </div>
            </div>

            <div className="flex w-full flex-col md:flex-row md:grid-cols-2 bg-gray-300">
                <div className="hidden md:inline m-16 md:w-5/6 md:h-5/6">
                    <img src={Vision} />
                </div>
                <div className="m-16">
                    <h3 className="font-bold text-center">VISION</h3>
                    <p className="font-normal text-justify md:px-32">
                        Ser la empresa líder en equipos de Electricidad y Automatización 
                        en El Salvador en un futuro, con nuestro excelente servicio y 
                        personal capacitado estableciendo una empresa con éxito 
                        responsabilidad y confianza para sus clientes.
                    </p>
                </div>
                <div className="md:hidden m-16 md:w-5/6 md:h-5/6">
                    <img src={Vision} />
                </div>
            </div>

            <div className="flex w-full flex-col md:flex-row md:grid-cols-2 bg-gray-300">
                <div className="flex flex-col justify-center md:m-16">
                    <h3 className="font-bold text-center">Nuestros valores</h3>
                    <p className="font-normal text-justify px-32">
                        <ul className="list-disc">
                            <li>Estima</li>
                            <li>Justicia</li>
                            <li>Franqueza</li>
                            <li>Tolerancia</li>
                            <li>Honestidad</li>
                            <li>Fiabilidad</li>
                            <li>Eficiencia</li>
                            <li>Adaptabilidad</li>
                        </ul>                           
                    </p>
                </div>
                <div className="flex w-full mt-16 md:mt-0 md:m-16 justify-center md:justify-end">
                    <img className="w-3/4" src={Laptop} />
                </div>
            </div>

            <div className="flex w-full flex-col md:flex-row md:grid-cols-2 bg-gray-300">
                <div className="hidden md:inline flex w-full md:m-16 justify-center md:justify-start">
                    <img className="w-3/4" src={Social} />
                </div>
                <div className="flex flex-col md:justify-center md:m-16">
                    <h3 className="font-bold mt-16 md:mt-0 mb-5 text-center md:text-left">Compromiso social</h3>
                    <p className="font-normal md:pr-32">
                        <ul className="list-disc text-center md:text-left">
                            <li>Apoyo a iniciativas y proyectos regionales</li>
                            <li>Participación en eventos deportivos (caridad)</li>
                            <li>Apoyo a proyectos educativos de diversas instituciones para niños y nuestros empleados</li>
                        </ul>
                    </p>
                </div>
                <div className="mt-16 md:mt-0 md:hidden flex w-full md:m-16 justify-center md:justify-start">
                    <img className="w-3/4" src={Social} />
                </div>
            </div>

            <div className="flex flex-col items-center p-20 bg-gray-300">
                <h4 className="text-center font-extrabold text-3xl">¿Por qué somos diferentes?</h4>
                <p className="text-center mt-5 font-semibold">
                    Calidad <br />
                    Tecnología <br />
                    Experiencia certificada <br />
                </p>
            </div>
            <Footer />
        </>
    );
}

export default AboutUsPage