import React from 'react'
import Poster from '../components/poster/Poster';
import HomeCaurosal from '../components/HomeCaurosal/HomeCaurosal';
import HomeItemData from '../components/HomeCaurosal/HomeItemData';
import PosterCaurosal from '../components/poster/PosterCaurosal';
import AllItemDetails from '../components/poster/AllItemDetails';

const Home = () => {
  return (
    <>
      <div className='lg:container lg:mx-auto lg:px-16 '>
        <div className='w-full h-48 lg:hidden' >
          <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=540/layout-engine/2022-12/Paan-Corner-Full.jpg" alt=""  className='w-full h-full'/>
        </div>
        <div className='w-full h-56'>
          <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=1440/layout-engine/2022-05/Group-33704.jpg" alt=""  className='w-full h-full'/>
        </div>
        <div>
          <HomeCaurosal />
        </div>
        <div>
          <HomeItemData />
        </div>
        <div className='px-2 py-4 lg:px-0 lg:py-0 my-5 lg:my-12'>
          <div>
            <AllItemDetails />
          </div>
        </div>
      </div>
      
    </>

  )
}

export default Home;