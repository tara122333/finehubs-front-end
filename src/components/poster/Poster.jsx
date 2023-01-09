import React from 'react'
// import {BiPlus} from 'react-icons/bi'

const Poster = (props) => {
  return (
    <>
        <div className='w-52 h-full border border-gray-200 rounded-lg px-3 py-3 lg:w-64 hover:border-green'>
            <div className='w-full h-48'>
                <img src={props.img} alt="" className='w-full h-full'/>
            </div>
            <div className='h-20'> 
                <h1 className='text-lg'>{props.title}</h1>
                <p className='font-light'>{props.desc}</p>
            </div>
            <div className='flex justify-between'>
                {/* price */}
                <div className='flex gap-1 items-center'>
                    <s className='text-red-600'>150</s>
                    <span className='text-lg font-semibold text-gray-500'>{props.price}</span>
                </div>
                
                <div className='flex gap-2 bg-bggreen px-1 justify-center items-center rounded-lg text-green w-24 py-2 cursor-pointer border border-green'>
                    {/* <BiPlus className='text-xl'/> */}
                    <h1 className='font-bold text-xl'>ADD</h1>
                </div>
            </div>
        </div>
    </>
  )
}

export default Poster;