import React from 'react'

const HomeItem = (props) => {
  return (
    <>
        <div className='w-32 h-36'>
            <div className='w-full h-full'>
                <img src={props.img} alt="item" className='w-full h-full'/>
            </div>
        </div>
    </>
  )
}

export default HomeItem;