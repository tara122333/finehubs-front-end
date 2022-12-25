import React from 'react'

const Home = () => {
  return (
    <>
        <div>
            <div className='flex flex-col justify-center items-center py-16 bg-black gap-2'>
                <h1 className='text-5xl font-bold text-purple-600 py-3'>Welcome to </h1>
                <h3 className='text-2xl font-bold text-red-500'>C++ With DSA Course</h3>
                <h6 className='text-lg font-semibold text-cyan-400'>Or</h6>
                <h3 className='text-2xl font-bold text-red-500' >Java With DSA Course</h3>
            </div>

            <div>
                <h1>About Course</h1>
                
            </div>

            <div className='py-5'>
                <h1 className='text-lg'>How to enroll course ??</h1>
            </div>
        </div>
    </>
  )
}

export default Home