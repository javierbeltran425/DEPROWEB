const CompaniesCard = ({ title, img, msg }) => {
    return(
        <div className="my-5 mx-14 w-8/12 flex flex-col lg:flex-row lg:justify-between ring-2 ring-blue-600 rounded-md lg:rounded-full items-center text-black bg-gray-600 bg-opacity-60 transform hover:scale-105 lg:hover:scale-110 motion-reduce:transform-none duration-1000 shadow-lg">
            <img src={img} alt="" className="md:w-48 p-5 m-2" />
            <div className="flex flex-col">
                <h1 className="text-center text-white font-extrabold p-1 mt-2 text-xl">{title}</h1>
                <p className="text-lg text-center lg:text-right p-5 lg:mr-20 font-semibold text-white">{msg}</p>
            </div>
        </div>
    )
}

export default CompaniesCard