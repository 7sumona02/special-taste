import React from 'react'

const Footer = () => {
  return (
    <div className='bg-orange-800 text-white flex justify-center items-start gap-32 p-20'>
        <div>
            <a href="#" className='text-2xl font-bold'>SPECIAL TASTE</a>
        </div>
        <div>
            <p className='font-semibold'>PRIVACY</p>
            <ul className='mt-2 leading-8'>
                <a href=""><li>Terms of use</li></a>
                <a href=""><li>Privacy policy</li></a>
                <a href=""><li>Cookies</li></a>
            </ul>
        </div>
        <div>
        <p className='font-semibold'>SERVICES</p>
            <ul className='mt-2 leading-8'>
                <a href=""><li>Shop</li></a>
                <a href=""><li>Order ahead</li></a>
                <a href=""><li>Menu</li></a>
            </ul>
        </div>
        <div>
        <p className='font-semibold'>ABOUT US</p>
            <ul className='mt-2 leading-8'>
                <a href=""><li>Find a location</li></a>
                <a href=""><li>About Us</li></a>
                <a href=""><li>Our story</li></a>
            </ul>
        </div>
        <div>
        <p className='font-semibold'>INFORMATION</p>
            <ul className='mt-2 leading-8'>
                <a href=""><li>Prizes & pricing</li></a>
                <a href=""><li>Sell your products</li></a>
                <a href=""><li>Jobs</li></a>
            </ul>
        </div>
        <div>
        <p className='font-semibold'>SOCIAL MEDIA</p>
            
        </div>
    </div>
  )
}

export default Footer