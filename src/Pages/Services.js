import Header from '../Components/Header'
import Footer from '../Components/Footer'

import Whatsapp from '../resources/whatsappLogo.png'

const Services = () => {
    return(
        <>
            <Header />
            <div className="w-full h-screen bg-gray-300">
                <h1 className="font-bold text-center p-10 text-3xl">NUESTROS SERVICIOS</h1>
                <div className="grid grid-cols-4 divide-x-2 divide-gray-400 divide-solid">
                    <div className="w-full h-full">
                        <h2 className="font-bold p-2 text-blue-700 text-xl text-center mb-10">INGENIERIA Y PROYECTOS</h2>
                        <ul className="list-disc px-5">
                            <li className="hover:text-blue-600">AUTOMATIZACION DE PROCESOS INDUSTRIALES Y SISTEMAS SCADA.</li>
                            <li className="hover:text-blue-600">MODIFICACION Y RESTAURACION DE PANELES ELECTRICOS.</li>
                            <li className="hover:text-blue-600">DISEÑO Y ELABORACION DE TABLEROS DE CONTROL.</li>
                            <li className="hover:text-blue-600">ILUMINACION DE ESPACIOS PUBLICOS Y CERRADOS.</li>
                            <li className="hover:text-blue-600">MIGRACION DE PLC´s -HMI DE DIFERENTES MARCAS.</li>
                            <li className="hover:text-blue-600">APLICACIONES BASADAS EN SERVOMOTORES.</li>
                            <li className="hover:text-blue-600">PROTECCIONES ATMOSFERICAS (PARARRAYOS)</li>
                            <li className="hover:text-blue-600">CONTROL DE TIEMPOS MUERTOS EN MÁQUINA</li>
                        </ul>
                    </div>

                    <div className="w-full h-full">
                        <h2 className="font-bold p-2 text-blue-700 text-xl text-center mb-10">MANTENIMIENTOS PREVENTIVOS Y CORRECTIVOS</h2>
                        <ul className="list-disc px-5">
                            <li>SUB-ESTACIONES ELECTRICAS.</li>
                            <li>REDES DE TIERRA.</li>
                            <li>CHILLERS, MANEJADORAS DE AIRE Y AIRES ACONDICIONADOS.</li>
                            <li>MOTORES MONOFASICOS Y TRIFASICOS.</li>
                            <li>UPS MONOFASICOS Y TRIFASICOS.</li>
                            <li>TABLEROS ELECTRICOS DE CONTROL.</li>
                        </ul>
                    </div>

                    <div className="w-full h-full">
                        <h2 className="font-bold p-2 text-blue-700 text-xl text-center mb-10">SOPORTE TECNICO</h2>
                        <ul className="list-disc px-5">
                            <li>PROGRAMACION DE VARIADORES DE FRECUENCIA.</li>
                            <li>DIAGNOSTICOS EN PLC, VARIADORES DE FRECUENCIA Y HMI.</li>
                            <li>REPROGRAMACION DE PLC Y HMI.</li>
                            <li>INSTALACION DE UPS Y SUPRESORES DE TRANSIENTES.</li>
                            <li>CABLEADO DE PANELES DE CONTROL.</li>
                        </ul>
                    </div>

                    <div className="w-full h-full">
                        <h2 className="font-bold p-2 text-blue-700 text-xl text-center mb-10">CALIDAD DE ENERGIA</h2>
                        <ul className="list-disc px-5">
                            <li>CORRECCION DE FACTOR DE POTENCIA.</li>
                            <li>ANALISIS DE CALIDAD DE ENERGIA.</li>
                            <li>SISTEMAS DE ALIMENTACION ININTERRUMPIDA(UPS).</li>
                            <li>SUPRESORES DE TRANSIENTES.</li>
                            <li>AHORRO ENERGETICO.</li>
                            <li>SISTEMA SCADA PARA MONITOREO DE ENERGIA.</li>
                        </ul>
                    </div>

                </div>
                <a href="https://api.whatsapp.com/send?phone=50378532004" className="fixed z-10 w-10 h-10 md:w-16 md:h-16 m-10 right-0 bottom-0"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-900 opacity-75"></span><img src={Whatsapp}/></a>
            </div>
            <Footer />
        </>
    )
}

export default Services