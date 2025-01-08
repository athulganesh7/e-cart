import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../Redux/slices/wishlistSlice'

const Wishlist = () => {
  const dispatch = useDispatch()
  const userWishlist = useSelector(state=>state.wishlistReducer)
  return (
    <>
      <Header/>
      <div style={{paddingTop: "110px"}} className='px-5'>
        {
          userWishlist?.length>0 ?
          <>
          <h3 className='text-4xl font-bold text-red-600 my-2'>My Wishlist</h3>
          <div className='grid grid-cols-4 gap-4'>
               {
                userWishlist?.map(product=>(
                  <div className='rounded p-2 shadow'>
                  <img width={'100%'} height={'200px'} src={product?.thumbnail} alt="" />
                  <div className='text-center'>
                      <h3 className='text-xl font-bold text-wrap'>{product?.title}</h3>
                      <div className='flex justify-evenly mt-3'>
                        <button onClick={()=>dispatch(removeItem(product?.id))} className='text-xl'><i className="fa-solid fa-heart-circle-xmark text-red-600"></i></button>
                        <button className='text-xl'><i className="fa-solid fa-cart-plus text-gray-700"></i></button>
                      </div>
                  </div>
              </div>
                ))
               }
            </div>
        </>
        :
        <div className='flex justify-center items-center h-screen'>
          <img src="https://sa.adanione.com/~/media/Foundation/Adani/emptyImages/empty_cart.gif" alt="" />
          <h1 className='text-3xl text-red-600'>Wishlist is empty</h1>
        </div>
        }
      </div>
    </>
  )
}

export default Wishlist