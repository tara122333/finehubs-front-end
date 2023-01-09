import React from 'react'
import Slider from 'react-slick';

import Poster from './Poster';

const PosterCaurosal = (props) => {

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        autoPlay:true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                nextArrow:true,
                prevArrow: true,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                nextArrow: true,
                prevArrow: true,
              },
            },
          ],
    };


    // const Itemdetails = [
    //     {
    //         img : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/app/images/products/sliding_image/439697a.jpg?ts=1644840288",
    //         title : "Amul Blend Diced Cheese",
    //         desc : "200 g",
    //         price : "118"
    //     },
    //     {
    //         img : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/app/images/products/sliding_image/24194a.jpg?ts=1661157751",
    //         title : "Harvest Gold Hearty Brown Bread",
    //         desc : "400 g",
    //         price : "40"
    //     },
    //     {
    //         img : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/app/images/products/sliding_image/439697a.jpg?ts=1644840288",
    //         title : "Amul Blend Diced Cheese",
    //         desc : "200 g",
    //         price : "118"
    //     },
    //     {
    //         img : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/app/images/products/sliding_image/24194a.jpg?ts=1661157751",
    //         title : "Harvest Gold Hearty Brown Bread",
    //         desc : "400 g",
    //         price : "40"
    //     },
    //     {
    //         img : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/app/images/products/sliding_image/439697a.jpg?ts=1644840288",
    //         title : "Amul Blend Diced Cheese",
    //         desc : "200 g",
    //         price : "118"
    //     },
    //     {
    //         img : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/app/images/products/sliding_image/24194a.jpg?ts=1661157751",
    //         title : "Harvest Gold Hearty Brown Bread",
    //         desc : "400 g",
    //         price : "40"
    //     },
    //     {
    //         img : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/app/images/products/sliding_image/439697a.jpg?ts=1644840288",
    //         title : "Amul Blend Diced Cheese",
    //         desc : "200 g",
    //         price : "118"
    //     },
    //     {
    //         img : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/app/images/products/sliding_image/24194a.jpg?ts=1661157751",
    //         title : "Harvest Gold Hearty Brown Bread",
    //         desc : "400 g",
    //         price : "40"
    //     },
    //     {
    //         img : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/app/images/products/sliding_image/439697a.jpg?ts=1644840288",
    //         title : "Amul Blend Diced Cheese",
    //         desc : "200 g",
    //         price : "118"
    //     },
    //     {
    //         img : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/app/images/products/sliding_image/24194a.jpg?ts=1661157751",
    //         title : "Harvest Gold Hearty Brown Bread",
    //         desc : "400 g",
    //         price : "40"
    //     },
    //     {
    //         img : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/app/images/products/sliding_image/439697a.jpg?ts=1644840288",
    //         title : "Amul Blend Diced Cheese",
    //         desc : "200 g",
    //         price : "118"
    //     },
    //     {
    //         img : "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/app/images/products/sliding_image/24194a.jpg?ts=1661157751",
    //         title : "Harvest Gold Hearty Brown Bread",
    //         desc : "400 g",
    //         price : "40"
    //     },
    //     {
    //         img : "",
    //         title : "",
    //         desc : "",
    //         price : ""
    //     },
    // ];
  return (
    <>
        <div className='py-4 lg:py-6'>
            <h1 className='text-xl lg:text-3xl font-bold py-3 lg:py-6'>{props.tag}</h1>
            <div className='block'>
                <Slider {...settings}>
                    {
                        props.Itemdetails.map((items)=>(
                            <Poster {...items} />
                        ))
                    }
                </Slider>
            </div>
        </div>
    </>
  )
}

export default PosterCaurosal;