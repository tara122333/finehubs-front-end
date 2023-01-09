import React from 'react'

import Slider from 'react-slick';

const HomeCaurosal = () => {

    const homeImg = [
        {
            image : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=450/layout-engine/2022-11/winter_PC-masthead-WEB.png",
        },
        {
            image : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=450/layout-engine/2022-11/Winter_FB-masthead-WEB.png",
        },
        {
            image : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=450/layout-engine/2022-10/gifting-store-Banner-Web.jpg",
        },
        {
            image : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=450/layout-engine/2022-11/Winter_HH-masthead-WEB.png",
        },
        {
            image : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=450/layout-engine/2022-11/winter_PC-masthead-WEB.png",
        },
        {
            image : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=450/layout-engine/2022-11/Winter_FB-masthead-WEB.png",
        },
        {
            image : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=450/layout-engine/2022-10/gifting-store-Banner-Web.jpg",
        },
        {
            image : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=450/layout-engine/2022-11/Winter_HH-masthead-WEB.png",
        },
    ];


    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoPlay:true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                nextArrow:true,
                prevArrow: true,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow: true,
                prevArrow: true,
              },
            },
          ],
    };


  return (
    <>
        <Slider {...settings}>
                    {
                        homeImg.map((items)=>(
                            <div>
                                <div className="w-full h-40 lg:h-52 p-1 lg:px-2">
                                    <img src={items.image} alt="food" className="w-full h-full"/>
                                </div>
                            </div>
                        ))
                    }
                    </Slider>
    </>
  )
}

export default HomeCaurosal