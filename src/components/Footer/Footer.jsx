import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='flex justify-between flex-col lg:flex-row my-2 py-4 lg:my-6 lg:container lg:mx-auto lg:px-16 gap-4 lg:gap-12'>
            <div className='w-full lg:w-1/3 flex justify-center items-center'>
                <span className=' text-sm text-gray-500'>© Blink Commerce Private Limited (formerly known as Grofers India Private Limited), 2016-2023</span>
            </div>
            <div className='gap-3 w-full lg:w-1/3 flex justify-center items-center'>
                <h1 className='font-bold text-xl text-gray-900'>Download App</h1>
                <div className='w-36 h-10'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="" className='w-full h-full'/>
                </div>
                <div className='w-36 h-10'>
                    <img src="https://tabtap.shop/wp-content/uploads/2020/07/1_EiZrcN_DIapbZaxutxbZRA.png" alt="" className='w-full h-full'/>
                </div>

            </div>
            <div className='w-full lg:w-1/3 flex justify-center items-center gap-2'>
                <div className='w-14 h-14'>
                    <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png" alt="" className='w-full h-full' />
                </div>
                <div className='w-14 h-14 rounded-full'>
                    <img src="https://cdn-icons-png.flaticon.com/512/60/60580.png" alt="" className='w-full h-full rounded-full' />
                </div>
                <div className='w-14 h-14 rounded-full bg-black'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Instagram_logo.png/1024px-Instagram_logo.png" alt="" className='w-full h-full rounded-full' />
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer