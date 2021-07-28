const WorkCard = ({ title, content, image }) => {
    return(
        <>
            <div className="bg-white w-4/5 h-auto overflow-hidden flex items-center rounded-lg shadow-md m-5">
                <div className="flex flex-col w-full text-center md:text-left mr-10 my-4 mx-10 md:items-start">
                    <h2 className="font-extrabold text-xl md:text-3xl">{title}</h2>
                    <div className="mt-10">
                        <img src={process.env.REACT_APP_BUCKET + image} alt="Imagen del artículo" className="w-full md:w-2/4 h-auto md:m-5 md:float-right"/>
                        <p className="text-justify">{content}</p>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default WorkCard