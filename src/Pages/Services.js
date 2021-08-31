import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ServicesCard from '../Components/OurServicesCard'

import Whatsapp from '../resources/whatsappLogo.png'

const Services = () => {
    return(
        <>
            <Header />
            <div className="w-full h-full bg-gray-300">
                <h1 className="font-bold text-center p-10 text-3xl">NUESTROS SERVICIOS</h1>
                <div className="flex flex-row flex-wrap justify-center pb-5">
                    <ServicesCard title="INGENIERIA Y PROYECTOS" content={
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
                    }/>

                    <ServicesCard title="MANTENIMIENTOS PREVENTIVOS Y CORRECTIVOS" content={
                        <ul className="list-disc px-5">
                        <li className="hover:text-blue-600">SUB-ESTACIONES ELECTRICAS.</li>
                        <li className="hover:text-blue-600">REDES DE TIERRA.</li>
                        <li className="hover:text-blue-600">CHILLERS, MANEJADORAS DE AIRE Y AIRES ACONDICIONADOS.</li>
                        <li className="hover:text-blue-600">MOTORES MONOFASICOS Y TRIFASICOS.</li>
                        <li className="hover:text-blue-600">UPS MONOFASICOS Y TRIFASICOS.</li>
                        <li className="hover:text-blue-600">TABLEROS ELECTRICOS DE CONTROL.</li>
                    </ul>
                    }/>

                    <ServicesCard title="SOPORTE TECNICO" content={
                        <ul className="list-disc px-5">
                            <li className="hover:text-blue-600">PROGRAMACION DE VARIADORES DE FRECUENCIA.</li>
                            <li className="hover:text-blue-600">DIAGNOSTICOS EN PLC, VARIADORES DE FRECUENCIA Y HMI.</li>
                            <li className="hover:text-blue-600">REPROGRAMACION DE PLC Y HMI.</li>
                            <li className="hover:text-blue-600">INSTALACION DE UPS Y SUPRESORES DE TRANSIENTES.</li>
                            <li className="hover:text-blue-600">CABLEADO DE PANELES DE CONTROL.</li>
                        </ul>
                    }/>

                    <ServicesCard title="CALIDAD DE ENERGIA" content={
                        <ul className="list-disc px-5">
                            <li className="hover:text-blue-600">CORRECCION DE FACTOR DE POTENCIA.</li>
                            <li className="hover:text-blue-600">ANALISIS DE CALIDAD DE ENERGIA.</li>
                            <li className="hover:text-blue-600">SISTEMAS DE ALIMENTACION ININTERRUMPIDA(UPS).</li>
                            <li className="hover:text-blue-600">SUPRESORES DE TRANSIENTES.</li>
                            <li className="hover:text-blue-600">AHORRO ENERGETICO.</li>
                            <li className="hover:text-blue-600">SISTEMA SCADA PARA MONITOREO DE ENERGIA.</li>
                        </ul>
                    }/>
                </div>
                <a href="https://api.whatsapp.com/send?phone=50378532004" className="fixed z-10 w-10 h-10 md:w-16 md:h-16 m-10 right-0 bottom-0"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-900 opacity-75"></span><img src={Whatsapp}/></a>
            </div>
            <Footer />
        </>
    )
}

export default Services