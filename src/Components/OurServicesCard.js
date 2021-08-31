const OurServicesCard = ({ title, content }) => {
    return(
        <>
            <div className="w-3/4 h-full flex flex-col rounded-md bg-white shadow-lg m-2">
                <h1 className="text-bold text-blue-600 text-center m-5 underline">{title}</h1>
                <p className="m-5">
                    {content}
                </p>
            </div>
        </>
    )
}

export default OurServicesCard