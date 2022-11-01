import React from 'react'
import Image from 'next/image';
import {MenuIcon,SearchIcon,ShoppingCartIcon} from "@heroicons/react/outline";

const Headers = () => {
  return (
   <header>
        {/* top nav  */}
        <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
            {/* left nav  */}
            <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
                <Image src='https://links.papareact.com/f90' width={150} height={40} objectFit="contain" className='cursor-pointer'/>
            </div>

            {/* search nav */}
            <div className='bg-yellow-400 hover:bg-yellow-500 hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer'>
                <input type="text" className='p-2 h-full flex-grow flex-shrink rounded-l-md w-6 focus:outline-none px-4'/>
                <SearchIcon className="h-12 p-4"/>
            </div>

            {/* right nav  */}
            <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
                <div className='link'>
                    <p>naveen kala</p>
                    <p className='para'>Account & Lists</p>
                </div>
                <div className='cursor-pointer link'>
                    <p>Returns</p>
                    <p className='para'>&Orders</p>
                </div>
                <div className='link relative flex items-center'>
                    <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-extrabold'>10</span>
                    <ShoppingCartIcon className='h-10'/>
                    <p className='hidden md:inline para mt-2'>Cart</p>
                </div>
            </div>
        </div>
        
        {/* Bottom nav  */}
        <div className='flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6'>
            <p className='link flex items-center'>
                <MenuIcon className='h-6 mr-1'/>
                All
            </p>
            <p className='link'>Best Sellers</p>
            <p className='link'>Prime</p>
            <p className='link'>Amazon Pay</p>
            <p className='link hidden md:inline-flex'>Fashion</p>
            <p className='link hidden md:inline-flex'>Electronics</p>
            <p className='link hidden md:inline-flex'>Computers</p>
            <p className='link hidden md:inline-flex'>New Releases</p>
            <p className='link hidden md:inline-flex'>Customer Services</p>
        </div>
   </header>
  )
}

export default Headers
