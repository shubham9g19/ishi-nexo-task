import React from 'react'
import offwhitePic from '../../images/offwhitePic.png'
import pinkbox_left from '../../images/pinkbox_left.png'
import pinkbox_2nd from '../../images/pinkbox_2nd.png'
import yellowpic from '../../images/yellowpic.png'
import redpic from '../../images/redpic.png'

const images = [
  'https://ugc.production.linktr.ee/8irA8v3dRp6wjlIhcpsO_gbAFfY2WPeVGeq9b?io=true&size=avatar-v3_0',
  'https://ugc.production.linktr.ee/4iMJiuLJT5ClrgdWYNkN_5BRad832QTF0jslc?io=true&size=avatar-v3_0',
  'https://linktr.ee/_gatsby/image/3366c979a0e1dbf88ebae4f99acfcb3d/4f416d82b6825673b168ccd728ef0ba2/hbo.png?u=https%3A%2F%2Fapi.blog.production.linktr.ee%2Fwp-content%2Fuploads%2F2022%2F05%2Fhbo.png&a=w%3D223%26h%3D223%26fm%3Dpng%26q%3D75&cd=af3d6e04a6bdcee2389e753866f0e02c',
  'https://ugc.production.linktr.ee/WGMzOsSDCLGKAtmJPbeQ_kAW5PV0Z8WHUJ5G8?io=true&size=thumbnail-stack-v1_0',
  'https://ugc.production.linktr.ee/8ffff88b-7211-4ebc-a706-20384538baf8_1.jpeg',
  'https://ugc.production.linktr.ee/91065139-3097-45d4-bf67-a1012d5b5958_800x800-Social-Avatar.png'
  // Add more image paths here
];

function OffWhite() {
  return (
    <div className='bg-[rgb(243,243,241)] min-h-[2564px] overflow-hidden'>
      <div className='flex  space-x-32 relative top-48 left-24 '>
        <div className=' w-[600px] h-[500px] p-0'>
          <img src={offwhitePic} alt="" />
        </div>


        <div className=' text-[rgb(30,35,48)] '>
          <div className='text-left text-6xl font-extrabold text-[rgb(30,35,48)]'>
            <p>Analyze your</p>
            <p>audience and keep</p>
            <p>your followers</p>
            <p>engaged</p>
          </div>
          <div className='text-left font-semi mt-5 text-base font-semibold '>
            <p>Track your engagement over time, monitor revenue and learn what’s converting</p>
            <p> your audience. Make informed updates on the fly to keep them coming back.</p>
          </div>
          <div className='flex '>
            <button className='bg-[rgb(233,192,233)] w-[220px] h-16 rounded-full text-black text-lg p-0 ml-0 mt-10'>Get started for free</button>
          </div>
        </div>

      </div>




      <div className='text-6xl font-extrabold text-[rgb(30,35,48)] z-90 relative top-[340px]'>
        <p>The only link in bio trusted by 50M+</p>
        <p>streamers</p>
      </div>
      <div className='slider-container relative top-[440px] w-full overflow-hidden '>

        <div className='slider flex whitespace-nowrap'>
          {
            images.map((image, index) => (
              <img src={image} key={index} className='w-1/4 h-auto object-cover mx-4 rounded-xl' />
            ))

          }

          {
            images.map((image, index) => (
              <img
                key={`copy-${index}`}
                src={image}
                alt={`Slide Copy ${index + 1}`}
                className="w-1/4 h-auto object-cover mx-4 rounded-xl"
              />
            ))
          }
        </div>

      </div>


      <div className='flex relative top-[450px] '>

        <div className='flex-col ml-[90px] mr-4 w-[660px] '>
          <div className=' bg-home-pink h-[430px] border mb-4 rounded-[35px]'>
            
            <div className='flip-card k mt-12 ml-6'>
            <div className='flip-card-inner'>
              <div className='flip-card-front'>
                <img src={pinkbox_left} alt="" className=' w-[600px]' />
              </div>
              <div className='flip-card-back '>
                <img src={pinkbox_2nd} alt="" className='w-[580px]' />
              </div>
            </div>
            </div>

            <p className='ml-[50px] text-left text-[rgb(80,34,116)] font-bold underline text-[32px] mt-10 '>Share your content in limitless</p>
            <p className='ml-[50px] text-left text-[rgb(80,34,116)] font-bold underline text-[32px]'>ways on your Linktree.</p>
          </div>
          <div className='bg-[rgb(210,232,35)]  h-[430px]  rounded-[35px]'>
            <img src={yellowpic} alt="" className='w-[580px]  ml-12 mt-4'/>
          </div>
        </div>
        {/* i want a width 20px less than 50% of a div */}


        <div className='bg-home-red w-[670px] h-[880px]  rounded-[35px]'>
          <img src={redpic} alt="" className='w-[600px] ml-12 mt-6'/>
        </div>

      </div>
    </div>
  )
}

export default OffWhite