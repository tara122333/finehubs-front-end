import React from 'react'

const Home = () => {
  return (
    <>
        <div>
            <div className='flex flex-col justify-center items-center py-16 bg-black gap-2'>
                <h1 className='text-5xl font-bold text-purple-600 py-3'>Welcome to</h1>
                <h3 className='text-2xl font-bold text-red-500'>C++ With DSA Course</h3>
                <h6 className='text-lg font-semibold text-cyan-400'>Or</h6>
                <h3 className='text-2xl font-bold text-red-500' >Java With DSA Course</h3>
            </div>

            <div className='flex justify-center items-center py-5'>
                <h1 className='px-5 py-1 rounded-lg bg-purple-400 text-xl font-bold'>About Course</h1>
                <div>

                </div>

            </div>

            <div className='py-5 px-3'>
                <h1 className='text-xl font-semibold text-red-500'>How to enroll course ?</h1>
                <h3 className='text-lg font-mono'>This is 3 step process</h3>
                <din className="flex flex-col gap-5">
                    <div>
                        <span className='px-3 bg-red-300 rounded-sm font-serif'>Step I</span>
                        <p>Go to Video And Like And Subscribe the Channel ConceptWithTara And Take Screenshot.</p>
                    </div>
                    <div>
                    <span className='px-3 bg-red-300 rounded-sm font-serif'>Step II</span>
                        <p>Share this Video with 5 WhatsApp Groups Or Share with your 10 friends And Take Screenshot.</p>
                    </div>

                    <div>
                    <span className='px-3 bg-red-300 rounded-sm font-serif'>Step III</span>
                        <p>Click this enroll button and upload these screenshot.</p>
                    </div>
                </din>

            </div>
        </div>
    </>
  )
}

export default Home