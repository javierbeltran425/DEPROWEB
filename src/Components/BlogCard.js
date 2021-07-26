const BlogCard = ({ title, content, image }) => {
    return(
        <>
            <div className="bg-white w-4/5 h-auto overflow-hidden flex items-center rounded-lg shadow-md m-5 hover:shadow-xl transform hover:scale-105 duration-500">
                <div className="flex flex-col w-full text-left mr-10 my-4 mx-10 items-start">
                    <h2 className="font-extrabold text-3xl">{title}</h2>
                    <div className="mt-10">
                        <img src={process.env.REACT_APP_BUCKET + image} alt="Imagen del artículo" className="w-2/4 h-auto m-5 float-right"/>
                        <p className="text-justify">{content}</p>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default BlogCard