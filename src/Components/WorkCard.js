const WorkCard = ({ title, content, image }) => {
    return(
        <>
            <div className="bg-white w-4/5 h-auto overflow-hidden flex items-center rounded-lg shadow-md m-5">
                <div className="flex flex-col md:flex-row w-full text-left mr-10 my-4 mx-10 md:items-start">
                    <h2 className="font-extrabold text-xl md:text-3xl text-center">{title}</h2>
                    <div className="flex flex-col items-center w-full md:mt-10">
                        <img src={process.env.REACT_APP_BUCKET + image} alt="Imagen del artículo" className="w-5/6 md:w-2/4 h-auto m-5 md:float-right"/>
                        <p className="text-justify">{content}</p>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default WorkCard