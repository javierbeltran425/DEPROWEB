const ProductCard = ({ title, img, desc, price }) => {
    return(
        <>
        <div className="bg-white lg:w-1/4 h-1/3 overflow-hidden flex items-center rounded-lg shadow-md m-5 hover:shadow-xl transform hover:scale-105 duration-500">
            <img src={img} alt="producto" className="w-1/3 h-auto m-5"/>
            <div className="flex flex-col w-full justify-end text-right mr-10 my-2 items-end">
                <h3 className="font-bold">{title}</h3>
                <div>
                    <p className="">{desc}</p>
                </div>
                <a href="https://api.whatsapp.com/send?phone=50378532004" className="bg-gray-600 text-white text-center rounded-md shadow-lg hover:bg-gray-300 hover:text-black duration-500 w-1/2 mt-5 mb-2" >Cotizar</a>
            </div>
        </div>
        </>
    )
}

export default ProductCard