import React from 'react'
import card from '../assets/card.jpg'

const Food = () => {
  return (
    <div className='px-32 py-20'>
        <div className="flex flex-col justify-center items-center">
            <h1 className='text-3xl font-semibold mb-4'>MENU</h1>
            <p className='text-center w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis illo deserunt repudiandae assumenda animi fugit reprehenderit fugiat nulla, accusantium nemo.</p>
        </div>
        <div className='flex gap-12 justify-center items-center p-20 -mt-4'>
            <div class="max-w-sm bg-white border-[0.1px] border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                    <img class="rounded-t-lg w-full" src={card} alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">SIMPLE CRUSTY BREAD</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-900">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, aperiam.</p>
                    <a href="#" className="text-xs font-semibold">READ MORE</a>
                </div>
            </div>
            <div class="max-w-sm bg-white border-[0.1px] border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                    <img class="rounded-t-lg w-full" src={card} alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">SIMPLE CRUSTY BREAD</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-900">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, aperiam.</p>
                    <a href="#" className="text-xs font-semibold">READ MORE</a>
                </div>
            </div>
            <div class="max-w-sm bg-white border-[0.1px] border-gray-200 rounded-lg shadow-sm">
                <a href="#">
                    <img class="rounded-t-lg w-full" src={card} alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">SIMPLE CRUSTY BREAD</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-900">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, aperiam.</p>
                    <a href="#" className="text-xs font-semibold">READ MORE</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Food