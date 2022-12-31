import React from 'react'

const Home = () => {
  return (
    <>
        <div className='md:px-16'>
            <div className='flex flex-col justify-center items-center py-16 bg-black gap-2'>
                <h1 className='text-5xl font-bold text-purple-600 py-3'>Welcome to</h1>
                <h3 className='text-2xl font-bold text-red-500'>C++ With DSA Course</h3>
                <h6 className='text-lg font-semibold text-cyan-400'>Or</h6>
                <h3 className='text-2xl font-bold text-red-500' >Java With DSA Course</h3>
            </div>

            {/* <div className='flex justify-center items-center py-5'>
                <h1 className='px-5 py-1 rounded-lg bg-purple-400 text-xl font-bold'>About Course</h1>
                <div>

                </div>

            </div> */}


            <div className='py-5 md:py-12'>
            </div>

            
            <div className='flex gap-2 md:gap-5 bg-purple-200 py-2 px-5 '>
                <span className='px-3 bg-red-600 text-white rounded-sm font-serif'>NOTE</span>
                <h1 className='text-lg font-bold'>| This is Free Course |</h1>
            </div>
            <hr />
            <div className='py-4 cursor-pointer'>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSfIuTIyJrTm0IwG7Qne8PjvxFk4cy9Mz5wScD0GM71ewgHsNw/viewform?usp=sf_link' target=" _blank" className='flex justify-center items-center cursor-pointer'>
                        <h1 className='px-12 py-4 bg-purple-500 text-2xl font-bold rounded-lg text-yellow-50'>
                            Enroll Now
                        </h1>
                    </a>

                </div>

<hr />
            <div className='py-5 px-3'>
                <h1 className='text-xl font-semibold text-red-500 md:text-3xl md:py-5'>How to enroll course ?</h1>
                <h3 className='text-lg font-mono md:py-2'>This is 3 step process</h3>

                <din className="flex flex-col gap-5 md:gap-8 py-2 md:py-5">
                    <hr/>
                    <div>
                        <span className='px-3 bg-red-300 rounded-sm font-serif'>Step I</span>
                        <p>Like this <a href='https://www.youtube.com/@ConceptWithTara' className='underline text-blue-600 text-xl font-bold'>Video</a> And Subscribe the Channel <a href='https://www.youtube.com/@ConceptWithTara' className='underline text-red-600 text-xl font-bold'>ConceptWithTara</a> And Take Screenshot.</p>

                        <div className='py-3 flex gap-3 flex-col md:flex-row'>
                            <span className='bg-purple-500 rounded-sm px-2 text-white w-28'>Video Link : </span>
                            <a href='https://www.youtube.com/@ConceptWithTara' className='text-blue-600'><span>https://www.youtube.com/@ConceptWithTara</span></a>
                        </div>
                        <div className='flex flex-col justify-center items-center py-3'>
                            <h1 className='text-xl py-2 font-bold'>Like This</h1>
                            <div className='w-48'>
                                <img src="https://www.digitaltrends.com/wp-content/uploads/2018/08/screenshot_20200507-124713_nova-launcher.jpg?fit=1080%2C2400&p=1" alt="" />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div>
                    <span className='px-3 bg-red-300 rounded-sm font-serif'>Step II</span>
                        <p>Share this <a href='https://www.youtube.com/@ConceptWithTara' className='underline text-blue-600 text-xl font-bold'>Video</a> with 5 WhatsApp Groups Or Share with your 10 friends And Take Screenshot.</p>

                        <div className='flex flex-col justify-center items-center py-3'>
                            <h1 className='text-xl py-2 font-bold'>Like This</h1>
                            <div className='w-48'>
                                <img src="https://www.digitaltrends.com/wp-content/uploads/2018/08/screenshot_20200507-124713_nova-launcher.jpg?fit=1080%2C2400&p=1" alt="" />
                            </div>
                        </div>

                    </div>



                    <hr />
                    <div>
                    <span className='px-3 bg-red-300 rounded-sm font-serif'>Step III</span>
                        <p>Click this enroll button then fill google form and upload Screenshot.</p>
                    </div>

                    <div className='flex flex-col justify-center items-center py-3'>
                            <h1 className='text-xl py-2 font-bold'>Like This</h1>
                            <div className='w-48'>
                                <img src="https://www.digitaltrends.com/wp-content/uploads/2018/08/screenshot_20200507-124713_nova-launcher.jpg?fit=1080%2C2400&p=1" alt="" />
                            </div>
                    </div>
                </din>

                <div className='py-12'>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSfIuTIyJrTm0IwG7Qne8PjvxFk4cy9Mz5wScD0GM71ewgHsNw/viewform?usp=sf_link' target=" _blank" className='flex justify-center items-center cursor-pointer'>
                        <h1 className='px-12 py-4 bg-purple-500 text-2xl font-bold rounded-lg text-yellow-50'>
                            Enroll Now
                        </h1>
                    </a>

                </div>

            </div>
        </div>
    </>
  )
}


export default Home