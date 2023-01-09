import React, { useState } from 'react'
import {BiSearch} from 'react-icons/bi'
import {FaRegUser} from 'react-icons/fa'
import {BsCart3} from 'react-icons/bs'


// Login File
import SignIn from '../Auth/SignIn'

const NavbarSM = ({SignIn,SignUp}) =>{
  return(
    <>
      <div className='flex flex-col gap-1 w-full px-4 pb-4'>
        <div className='w-full justify-between flex py-1'>
          <div className='flex flex-col'>
            <h1 className='font-bold text-2xl font-sans'>Location</h1>
            <p className='text-gray-500'>Shop No, 5, Rawan Gate Rd, Gokulpura, Jaipur,Rajasthan</p>
          </div>
          <div className='flex justify-center items-center'>
            <FaRegUser className='text-2xl justify-center items-center cursor-pointer' onClick={SignIn} />
          </div>
        </div>


        <div className='w-full'>
          <div className='flex gap-4 items-center border-2 px-3 py-2 cursor-pointer rounded-md shadow-sm'>
            <BiSearch className='text-xl'/>
            <input type="text" name="search" id="search" placeholder='Search for products' className='outline-none'/>
          </div>
        </div>
      </div>
    </>
  )
}

const NavbarLG = ({SignIn,SignUp})=>{
  return(
    <>
      <div className='flex justify-between items-center w-full px-8 gap-10 py-2'>
        <div className='h-14 w-2/12'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Blinkit-yellow-rounded.svg" alt="" className='w-full h-full'/>
        </div>
        <div className='w-9/12 flex justify-center items-center gap-4'>
            <div className='flex w-full justify-center items-center'>
                <div className='flex py-1 flex-col w-1/4'>
                    <h1 className='font-bold text-2xl font-sans'>Location</h1>
                    <p className='text-gray-500'>Shop No, 5, Rawan Gate ...</p>
                </div>
                <div className='w-3/4'>
                  <div className='flex gap-4 items-center border-2 px-3 py-2 cursor-pointer rounded-md shadow-sm'>
                    <BiSearch className='text-2xl'/>
                    <input type="text" name="search" id="search" placeholder='Search for products' className='outline-none' />
                  </div>
                </div>
            </div>
            <div className='flex justify-center items-center px-6'>
                <h1 className='text-gray-600 font-semibold text-xl cursor-pointer' onClick={SignIn}>Login</h1>
            </div>
        </div>
        <div className='flex gap-2 bg-green py-3 px-2
         justify-center items-center rounded-xl text-white w-36 cursor-pointer'>
          <BsCart3 className='text-2xl font-bold' />
          <h1 className='font-semibold text-lg'>My Cart</h1>
        </div>
      </div>
    </>
  )
}

const Navbar = () => {

  const [openSignin, setOpenSignin] = useState(false);

  const openSignInmodal = () => setOpenSignin(true);

  return (
    <>

      <SignIn isOpen={openSignin} setIsOpen={setOpenSignin} />


      {/* Navbar for mobile */}
      <div className='flex lg:hidden'>
        <NavbarSM SignIn={openSignInmodal} />
      </div>

      {/* Navbar for PC */}
      <div className='hidden lg:flex'>
        {/* <h1>Navbar for PC</h1> */}
        <NavbarLG SignIn={openSignInmodal} />
      </div>
    </>
  )
}

export default Navbar;