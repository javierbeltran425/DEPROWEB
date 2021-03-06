import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import ProductsHeader from '../Components/ProductsHeader'
import Footer from '../Components/Footer'

import Whatsapp from '../resources/whatsappLogo.png'

import axios from 'axios'

import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useAxiosGet } from '../Hooks/useAxiosGet'
import { useAxiosPost } from '../Hooks/useAxiosPost'

import ProductCard from '../Components/ProductCard'

const Products = () => {
    const [ search, setSearch ] = useState('')
    const history = useHistory()
    const [page, setPage] = useState(1)
    const [ searchContent, setSearchContent ] = useState(null)

    var category = localStorage.getItem('category')
    let auxData = {
        category: category
    }

    /*
    axios.get(process.env.REACT_APP_API_URL + 'users/my-info', {
        headers: { Authorize: localStorage.getItem('token') }
    })
    .then(res => {
        if( res.data.user.admin ) 
            history.push('/admin-page-upload')
    })
    */
   
    let petition = useAxiosGet(process.env.REACT_APP_API_URL + 'products?page=' + page)

    let petitionFilter = useAxiosPost(process.env.REACT_APP_API_URL + 'products/product-category?page=' + page, auxData)

    let content = null

    const nextPage = () => {
        setPage(page + 1)
    }

    const backPage = () => {
        setPage(page - 1)
    }

    console.log("Desde vista products: " + category)

    if(petition.error){
        alert('Ha ocurrido un error')
    }

    if(!category){
        if(searchContent == null || search.length < 2){
            if(petition.response != null){
                content = petition.response.products.map(e => 
                    <ProductCard title={`${e.name}`} img={`${e.productImg}`} desc={`${e.description}`} productID={e.productID} maker={e.maker} categ={e.category} />
                )
            }
        }else{
            content = searchContent.map(e => 
                <ProductCard title={`${e.name}`} img={`${e.productImg}`} desc={`${e.description}`} productID={e.productID} maker={e.maker} categ={e.category} />
            )
        }
    }

    if(category){
        if(searchContent == null || search.length < 2){
            if(petitionFilter.response != null){
                content = petitionFilter.response.products.map(e => 
                    <ProductCard title={`${e.name}`} img={`${e.productImg}`} desc={`${e.description}`} productID={e.productID} maker={e.maker} categ={e.category} />
                )
            }
        }else{
            content = searchContent.map(e => 
                <ProductCard title={`${e.name}`} img={`${e.productImg}`} desc={`${e.description}`} productID={e.productID} maker={e.maker} categ={e.category} />
            )
        }
    }

    const onChange = async e => {
        e.persist();

        await setSearch(e.target.value.toLowerCase())

        filterElements()

        console.log("Impresion de SearchContent: " + searchContent)  
    }

    const filterElements = () => {
        var searchE = petition.response.products.filter(item =>{
            if(item.name.toLowerCase().includes(search) || item.maker.toLowerCase().includes(search) || item.description.toLowerCase().includes(search))
                return item
        });
        setSearchContent(searchE)
    }

    return(
        <>
            <div className="w-full h-auto bg-gray-300">
            <div className="fixed flex flex-wrap top-0 z-20">
                <ProductsHeader />
            </div>
                <div className="w-full flex flex-wrap">
                    <div className="flex md:justify-around items-center w-full text-white bg-transparent p-2 mt-20 md:mt-28 mb-5 overflow-x-auto md:overflow-visible ">
                        <p className="bg-gray-400 mx-2 md:mx-0 md:py-2 px-5 rounded-full hover:animate-wiggle shadow-lg">Banner</p>
                        <p className="bg-gray-400 mx-2 md:mx-0 md:py-2 px-5 rounded-full hover:animate-wiggle shadow-lg">Grainger</p>
                        <p className="bg-gray-400 mx-2 md:mx-0 md:py-2 px-5 rounded-full hover:animate-wiggle shadow-lg">Lovato Electric</p>
                        <p className="bg-gray-400 mx-2 md:mx-0 md:py-2 px-5 rounded-full hover:animate-wiggle shadow-lg">SineTamer</p>
                        <p className="bg-gray-400 mx-2 md:mx-0 md:py-2 px-5 rounded-full hover:animate-wiggle shadow-lg">Disoric</p>
                        <p className="bg-gray-400 mx-2 md:mx-0 md:py-2 px-5 rounded-full hover:animate-wiggle shadow-lg">Maruson</p>
                    </div>
                    <div className="flex flex-row w-full justify-center items-center">
                        <input value={search} onChange={onChange} type="text" placeholder="Buscar..." className="my-3 border rounded shadow-lg text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none w-3/4"></input>
                        <Icon icon={faSearch} className="mx-3"/>
                    </div>
                    <div className="w-full h-full flex flex-col lg:flex-row lg:flex-wrap justify-center">
                        {content}
                        <a href="https://api.whatsapp.com/send?phone=50377483000" className="fixed z-10 w-10 h-10 md:w-16 md:h-16 m-10 right-0 bottom-0"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-900 opacity-75"></span><img src={Whatsapp}/></a>
                    </div>
                    <div className="w-full flex justify-center">
                        <Icon icon={faArrowCircleLeft} onClick={backPage} className="text-3xl m-4 text-gray-600 hover:text-white duration-500"/>
                        <Icon icon={faArrowCircleRight} onClick={nextPage} className="text-3xl m-4 text-gray-600 hover:text-white duration-500"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Products