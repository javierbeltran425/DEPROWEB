const CompaniesCard = ({ title, img, msg }) => {
    return(
        <div className="my-5 mx-14 w-8/12 flex flex-col lg:flex-row lg:justify-between rounded-md lg:rounded-full items-center text-black bg-gray-600 bg-opacity-60 transform hover:scale-110 motion-reduce:transform-none duration-1000">
            <img src={img} alt="" className="lg:w-3/12 p-5 lg:rounded-full" />
            <div className="flex flex-col">
                <h1 className="text-center font-bold p-1 mt-2">{title}</h1>
                <p className="text-sm text-center lg:text-right p-5 lg:mr-10">{msg}</p>
            </div>
        </div>
    )
}

export default CompaniesCard