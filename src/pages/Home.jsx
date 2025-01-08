import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../Redux/slices/productSlice'

const Home = () => {

    const dispatch = useDispatch()


    const { allProducts, loading, errormeg } = useSelector(state => state.productReducer)
    console.log(allProducts, loading, errormeg);


    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <>
            <Header insideHome={true} />
            <div style={{ paddingTop: "110px" }} className='container px-4 mx-auto'>
                {
                    loading ?
                        <div className='flex justify-center iteam-center my-5 text-lg'>
                            <img width={'70px'} height={'70px'} src="https://media3.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif?cid=6c09b9528o3c062vpymz64sgq7xqg0obcy1vyt65t28rhjeu&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="" />
                            <h3>Loading...</h3>
                        </div>
                        :
                        <>
                            <div className='grid grid-cols-4 gap-4'>
                            {
                                allProducts?.length>0 ?
                                allProducts?.map(product=>(

                                <div key={product.id} className='border rounded p-2 shadow'>
                                    <img width={'100%'} height={'200px'} src={product?.thumbnail} alt="" />
                                    <div className='text-center'>
                                        <h3 className='text-xl font-bold text-wrap'>{product?.title}</h3>
                                        <Link to={`/${product?.id}/view`} className=' bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View More...</Link>
                                    </div>
                                </div>
                                 ))
                                :
                                <div className='flex justify-center items-center font-bold text-red-600 my-5 text-lg'>
                                    product not found
                                </div>
                            }
                            </div>
                        </>
                }
            </div>
        </>
    )
}

export default Home