import React,{useEffect,useState} from 'react'

const images = ['https://api.blog.production.linktr.ee/wp-content/themes/blog-theme/static-assets/Caterpiller/social-0.svg', 'https://api.blog.production.linktr.ee/wp-content/themes/blog-theme/static-assets/Caterpiller/social-1.svg"', 'https://api.blog.production.linktr.ee/wp-content/themes/blog-theme/static-assets/Caterpiller/social-2.svg','https://api.blog.production.linktr.ee/wp-content/themes/blog-theme/static-assets/Caterpiller/social-3.svg','https://api.blog.production.linktr.ee/wp-content/themes/blog-theme/static-assets/Caterpiller/social-4.svg'];

function Red() {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //       setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  //   }, 1000);

  //   return () => clearInterval(intervalId);
  //   }, []);

  return (
    <div className='bg-home-red min-h-screen'>
    <div className='flex space-x-32 relative top-40 left-24'>
      <div>
        <div className='text-[rgb(233,192,233)] text-6xl text-left font-extrabold'>
          <p>Share your Linktree</p>
          <p>from your Instagram,</p>
          <p>TikTok, Twitter and</p>
          <p>other bios</p>
        </div>
        <div className='text-[rgb(233,192,233)] text-left font-semiboldbold mt-5 text-lg'>
          <p>Add your unique Linktree URL to all the platforms and places you find your</p>
          <p>audience. Then use your QR code to drive your offline traffic online.</p>
        </div>
        <div className='flex py-5'>
        <button className='bg-[rgb(233,192,233)] w-[240px] h-16 rounded-full text-black text-lg p-0 ml-0 mt-3'>
          Get started for free
        </button>
        </div>
      </div>
      <div className=' mt-20 w-[600px]'>
            <img src={images[2]}  alt="" className='w-[400px] h-[300px] absolute'/>
          
      </div>
    </div>




    </div>
  )
}

export default Red