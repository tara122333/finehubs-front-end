import React from 'react'
import {BiPlus} from 'react-icons/bi'

const Poster = () => {
  return (
    <>
        <div className='w-48 border border-green rounded-sm px-3 py-2'>
            <div className='w-full h-48'>
                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/app/images/products/sliding_image/434549a.jpg?ts=1633497471" alt="" className='w-full h-full'/>
            </div>
            <div>
                <h1>Durex Invisible Super Ultra Thin Condom</h1>
                <p>10 units</p>
            </div>
            <div>
                {/* price */}
                <div className='flex gap-2 bg-bggreen px-2 justify-center items-center rounded-xl text-green w-28 cursor-pointer border border-green'>
                    <BiPlus className='text-lg'/>
                    <h1 className='font-semibold text-lg'>Add</h1>
                </div>
            </div>
        </div>
    </>
  )
}

export default Poster;