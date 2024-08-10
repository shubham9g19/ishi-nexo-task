import React from 'react'
import pic_1 from '../../images/pic_1.png'
import pic_2 from '../../images/pic_2.png'
import pic_3 from '../../images/pic_3.png'
import pic_4 from '../../images/pic_4.png'
import pic_5 from '../../images/pic_5.png'
import pic_6 from '../../images/pic_6.png'
import pic_7 from '../../images/pic_7.png'
import pic_8 from '../../images/pic_8.png'
import pic_9 from '../../images/pic_9.png'

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

function OffWhiteTwo() {
  return (
    <div className='bg-[rgb(243,243,241)] text-black min-h-screen overflow-hidden'>

      <div className='w-full'>
        <div className='text-[rgb(30,35,48)] text-[58px] font-extrabold w-[1400px] mx-auto'>The fast, friendly and powerful link in bio tool.</div>
        <div>
          <button className='bg-[rgb(233,192,233)] w-[220px] h-16 rounded-full text-black text-lg p-0 ml-0 mt-10'>Explore all plans</button>
        </div>
      </div>

      <div className='flex space-x-3 justify-center text-[rgb(30,35,48)] font-semibold mt-28'>
        <div className='w-[400px] h-[450px] bg-white space-y-28 rounded-[35px]'>
          <img src={pic_1} alt='' className='mt-[100px]' />
          <p className='text-center max-w-[300px] ml-12 text-[17px]'>Seamlessly connect your Linktree with the tools you already use.</p>
        </div>
        <div className='w-[400px] h-[450px]   bg-white space-y-14 rounded-[35px]'>
          <img src={pic_2} alt="" className='w-[320px] ml-[40px] mt-[70px]' />
          <p className='text-center max-w-[300px] ml-12 text-[17px]'>Customize your Linktree to match your brand. Make it feel like you.</p>
        </div>
        <div className='w-[400px] h-[450px]  bg-white space-y-24 rounded-[35px]'>
          <img src={pic_3} alt="" className='mt-[100px]' />
          <p className='text-center max-w-[300px] ml-12 text-[17px]'>Manage, update and schedule content with our quick, easy editor.</p>
        </div>

      </div>


      <div>
        <div className='text-[rgb(30,35,48)] ml-10 text-[64px] font-extrabold mt-[130px] text-center'>As featured in...</div>
        <div className="flex flex-wrap justify-center space-y-4 space-x-4 mx-20">
          <div className=" bg-white button py-2 px-6 rounded-[32px] w-[300px] h-[100px] flex justify-center items-center"><img className='w-[86px] h-[53px]' src={pic_4} alt="" /></div>

          <div className=" bg-white button py-2 px-6 rounded-[32px] w-[300px] flex justify-center items-center"><img className='w-[137px] h-[53px]' src={pic_5} alt="" /></div>

          <div className=" bg-white button py-2 px-6 rounded-[32px] w-[300px] flex justify-center items-center"><img className='w-[137px] h-[53px]' src={pic_6} alt="" /></div>

          <div className=" bg-white button py-2 px-6 rounded-[32px] w-[300px] flex justify-center items-center"><img className='w-[137px] h-[53px]' src={pic_7} alt="" /></div>

          <div className=" bg-white button py-2 px-6 rounded-[32px] w-[300px] flex justify-center items-center"><img className='w-[137px] h-[53px]' src={pic_8} alt="" /></div>

        </div>
      </div>


      <div className='mt-[150px]'>
        <div className='flex justify-center w-full'>
          <img src={pic_9} alt="" className='w-[950px]' />
        </div>
        <div className='w-[1200px] ml-[150px]'>
          <p className='text-[64px] text-center leading-[59px] font-extrabold text-[rgb(30,35,48)] mt-14 mb-7'>"Linktree simplifies the process for
            creators to share multiple parts of
            themselves in one inclusive link."</p>
            <p className='text-gray-600'>Riley Lemon,</p>
            <p className='text-gray-600'>YouTuber, Content Creator</p>
        </div>
        <div className='flex justify-center space-x-2 mt-12 mb-[100px]'>
        <button className="w-12 h-12 border font-bold border-black rounded-xl flex items-center justify-center hover:bg-[rgb(30,35,48)] hover:text-white">
        <ArrowLeftIcon className="h-6 w-6" />
      </button>

      <button className="w-12 h-12 border border-black rounded-xl flex items-center justify-center hover:bg-[rgb(30,35,48)] hover:text-white">
        <ArrowRightIcon className="h-6 w-6" />
      </button>
        </div>
      </div>



    </div>
  )
}

export default OffWhiteTwo