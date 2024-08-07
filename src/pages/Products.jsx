import React from 'react'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowLeftCircle } from "react-icons/bs";
import highlowshirtdressyellow from '../assets/highlowshirtdressyellow.jpg'
import adirepantslemon from '../assets/adirepantslemon.jpg'
import scrubsandshortslemon from '../assets/scrubsandshortslemon.jpg'
import scrubsandshortsblue from '../assets/scrubsandshortsblue.jpg'
import bubashokotoyellow from '../assets/bubashokotoyellow.jpg'
import adireshortlemon from '../assets/adireshortlemon.jpg'
import adireshortsorange from '../assets/adireshortsorange.jpg'
import adirepantsblue from '../assets/adirepantsblue.jpg'
import adirepantsyellow from '../assets/adirepantsyellow.jpg'
import Highlowshirtdressblue from '../assets/Highlowshirtdressblue.jpg'
import highlowshirtdressorange from '../assets/highlowshirtdressorange.jpg'

import freeDressOneHand from '../assets/FreeDressOneHandMulti-colored.jpg'
import chiffonStreetDressBlueBlack from '../assets/ChiffonStreetDressBlue&Black.jpg'
import chiffonStreetDressPinkBlack from '../assets/ChiffonStreetDressPink&Black.jpg'
import shortFloDressOrange from '../assets/ShortFloDressOrange.jpg'
import mudClothDenim from '../assets/MudClothDenimTrousersNavyBlue.jpg'
import openBackDressGreen from '../assets/OpenBackDressGreen.jpg'
import openBackDressBlue from '../assets/OpenBackDressBlue.jpg'
import flowerAdireDress from '../assets/FlowerAdireDressMulti-colored.jpg'


import streetDressOrange from '../assets/StreetDressOrange.jpg'
import streetDressGreen from '../assets/StreetDressGreen.jpg'
import streetDressBlue from '../assets/StreetDressBlue.jpg'
import streetDressYellow from '../assets/StreetDressYellow.jpg'



const Products = () => {
    const navigate = useNavigate()

  return (
    <div className="overflow-x-hidden px-3">
        <Navbar />
        <div onClick={() => navigate(-1)} className='cursor-pointer font-bold text-xl flex gap-x-6 mt-6 px-12'><BsArrowLeftCircle size={25} /> Back </div>
        <p className='text-4xl font-semibold text-center py-9'>Products</p>

        <div className='px-12 grid grid-cols-1 md:grid-cols-4 content-center gap-y-9'>

        <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={highlowshirtdressyellow} className='object-cover w-72 h-[345px]' />
        <p className='font-semibold text-xl pt-2'>High Low Shirt Dress (yellow)</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦55,000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>1 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

        <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={adirepantslemon} className='object-cover w-72 h-[345px]' />
        <p className='font-semibold text-xl pt-2'>Adire pants (lime)</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦45,000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>1 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

                <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={scrubsandshortslemon} className='object-cover w-72 h-[345px]' />
        <p className='font-semibold text-xl pt-2'>Scrubs and shorts (lime)</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦50,000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>2 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>


        
        <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={scrubsandshortsblue} className='object-cover w-72 h-[345px]' />
        <p className='font-semibold text-xl pt-2'>Scrubs and shorts (blue)</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦50,000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>1 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

        <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={bubashokotoyellow} className='object-cover w-72 h-[345px]' />
        <p className='font-semibold text-xl pt-2'>Buba Shokoto (yellow) </p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦75,000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>1 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

                <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={adireshortlemon} className='object-cover w-72 h-[345px]' />
        <p className='font-semibold text-xl pt-2'>Adire Shorts (lime)</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦30,000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>1 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

        
        <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={adireshortsorange} className='object-cover w-72 h-[345px]' />
        <p className='font-semibold text-xl pt-2'>Adire Shorts (orange)</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦30,000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>1 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

        <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={adirepantsblue} className='object-cover w-72 h-[345px]' />
        <p className='font-semibold text-xl pt-2'>Adire pants (blue)</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦45,000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>1 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

                <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={adirepantsyellow} className='object-cover w-72 h-[345px]' />
        <p className='font-semibold text-xl pt-2'>Adire pants (yellow)</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦45,000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>1 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

        
        <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={Highlowshirtdressblue} className='object-cover w-72 h-[345px]' />
        <p className='font-semibold text-xl pt-2'>High Low Shirt Dress (Blue)</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦55,000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>1 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

        <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={highlowshirtdressorange} className='object-cover w-72 h-[345px]' />
        <p className='font-semibold text-xl pt-2'>High Low Shirt Dress (Orange)</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦55,000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>1 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

        <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={mudClothDenim} className='object-cover w-72 h-[345px]' />
        <p className='font-semibold text-xl pt-2'>Mud Cloth Denim Trousers (Navy Blue)</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦65,000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>6 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

        <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={flowerAdireDress} className='object-cover w-72 h-[345px]' />
        <p className='font-semibold text-xl pt-2'>Flower Adire Dress (Multi-colored)</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦85,000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>1 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

        
        <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={freeDressOneHand} className='object-cover w-72 h-[345px]' />
        <p className='font-semibold text-xl pt-2'>Free Dress(One Hand) (Multi-colored)</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦110,000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>1 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

        <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={chiffonStreetDressBlueBlack} className='object-cover w-72 h-[345px]' />
        <p className='font-semibold text-xl pt-2'>Chiffon Street Dress (Blue & Black)</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦100,000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>1 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

                <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={chiffonStreetDressPinkBlack} className='object-cover w-72 h-[345px]' />
        <p className='font-semibold text-xl pt-2'>Chiffon Street Dress (Pink & Black)</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦100,000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>1 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

        
        <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={openBackDressBlue} className='object-cover w-72 h-[345px]' />
        <p className='font-semibold text-xl pt-2'>Open Back Dress (Blue)</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦75,000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>1 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

        <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={openBackDressGreen} className='object-cover w-72 h-[345px]' />
        <p className='font-semibold text-xl pt-2'>Open Back Dress (Green)</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦75,000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>1 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

        <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={shortFloDressOrange} className='object-cover w-72 h-[345px]' />
        <p className='font-semibold text-xl pt-2'>Short Flo Dress (Orange)</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦75,000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>2 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

        
        <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={streetDressBlue} className='object-cover w-72 h-[345px]' />
        <p className='font-semibold text-xl pt-2'>Street Dress (Blue)</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦85,000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>3 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

        
        <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={streetDressGreen} className='object-cover w-72 h-[345px]' />
        <p className='font-semibold text-xl pt-2'>Street Dress (Green)</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦85,000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>3 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

        <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={streetDressOrange} className='object-cover w-72 h-[345px]' />
        <p className='font-semibold text-xl pt-2'>Street Dress (Orange)</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦85,000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>3 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>

        <Link to={'https://wa.me/2348185513597'}>
        <div className='border px-4 py-4 max-w-[320px]'>
        <img src={streetDressYellow} className='object-cover w-72 h-[345px]' />
        <p className='font-semibold text-xl pt-2'>Street Dress (Yellow)</p>
        <div className='flex justify-between'>
        <p className='font-thin text-xl pt-2'>₦85,000</p>
        <p className='font-medium text-xl pt-2 text-green-500'>3 available</p>
        </div>

        <p className='text-orange-400'>Please click to make enquiries</p>
        </div>
        </Link>


        





        </div>
        
        
    <div className='mb-24'></div>
    </div>
  )
}

export default Products