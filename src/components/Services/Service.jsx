import React from 'react'

import ServicePoster from './ServicePoster';

const Service = () => {
    const ServiceData = [
        {
            img : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/assets/web/blinkit-promises/10_minute_delivery.png",
            title : "Superfast Delivery",
            desc : "Get your order delivered to your doorstep at the earliest from dark stores near you.",
        },
        {
            img : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/assets/web/blinkit-promises/Best_Prices_Offers.png",
            title : "Best Prices & Offers",
            desc : "Best price destination with offers directly from the manufacturers.",
        },
        {
            img : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/assets/web/blinkit-promises/Wide_Assortment.png",
            title : "Wide Assortment",
            desc : "Choose from 5000+ products across food, personal care, household & other categories",
        },
    ];
  return (
    <>
        <div className='flex flex-col gap-4 lg:flex-row lg:gap-12'>
            {
                ServiceData.map((data)=>(
                    <ServicePoster {...data} />
                ))
            }
        </div>
    </>
  )
}

export default Service