import React from 'react'

const ServicePoster = (props) => {
  return (
    <div className='flex flex-col justify-center items-center border border-gray-400 py-4 gap-4 w-full rounded-2xl lg:w-1/3 lg:py-8 px-3 lg:px-8 '>
        <div className='w-32 h-32'>
            <img src={props.img} alt="" className='w-full h-full'/>
        </div>
        <div className='px-4 justify-center flex flex-col items-center gap-2'>
            <h1 className='font-semibold text-lg'>{props.title}</h1>
            <span className='text-base font-light text-gray-500 text-center'>{props.desc}</span>
        </div>

    </div>
  )
}

export default ServicePoster