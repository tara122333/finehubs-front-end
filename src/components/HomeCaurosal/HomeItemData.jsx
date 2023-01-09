import React from 'react'

import HomeItem from './HomeItem';

const HomeItemData = () => {
    const homedata = [ 
        {
            img : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/layout-engine/2022-12/paan-corner_web.png",
            title : "Paan Corner"
        },
        {
            img : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/layout-engine/2022-11/Slice-2_10.png",
            title : "Dairy, Bread & Eggs"
        },
        {
            img : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/layout-engine/2022-11/Slice-3_9.png",
            title : "Fruits & vegetables"
        },
        {
            img : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/layout-engine/2022-11/Slice-4_9.png",
            title : "Cold Drinks & Juices"
        },
        {
            img : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/layout-engine/2022-11/Slice-5_4.png",
            title : "Snacks & Munchines"
        },
        {
            img : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/layout-engine/2022-11/Slice-6_5.png",
            title : "Breakfast"
        },
        {
            img : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/layout-engine/2022-11/Slice-7_3.png",
            title : "Sweet Tooth"
        },
        {
            img : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/layout-engine/2022-11/Slice-8_4.png",
            title : "Bakery & Biscuits"
        },
        {
            img : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/layout-engine/2022-11/Slice-9_3.png",
            title : "Tea, Coffee & Health Drink"
        },
        {
            img : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/layout-engine/2022-11/Slice-10.png",
            title : "Atta, Rice & Dal"
        },
        

    ];
  return (
    <>
        <div className='flex flex-col gap-5'>
            <div className='flex flex-wrap justify-between items-center'>
                {
                    homedata.map((item)=>(
                        <HomeItem {...item}/>
                    ))
                }
            </div>
            <div className='flex flex-wrap justify-between items-center'>
                {
                    homedata.map((item)=>(
                        <HomeItem {...item}/>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default HomeItemData