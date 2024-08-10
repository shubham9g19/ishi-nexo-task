import React,{useRef,useEffect} from 'react'
import pinkTilt from '../../images/pinkTilt.png'

function Pink() {
  const tiltWrapperRef = useRef(null);
  const tiltImageRef = useRef(null);

    const handleMouseMove = (event) => {
      const tiltWrapper = tiltWrapperRef.current;
      const tiltImage = tiltImageRef.current;
  
      if (!tiltWrapper || !tiltImage) return;
  
      const rect = tiltWrapper.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
  
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
  
      const deltaX = x - centerX;
      const deltaY = y - centerY;
  
      const rotateX = (deltaY / centerY) * -50; // Adjust tilt intensity
      const rotateY = (deltaX / centerX) * 50;  // Adjust tilt intensity
  
      tiltImage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
  
    const handleMouseLeave = () => {
      const tiltImage = tiltImageRef.current;
      if (tiltImage) {
        tiltImage.style.transform = 'rotateX(0deg) rotateY(0deg)';
      }
    };
  


  return (
    <div className='bg-home-pink min-h-[900px]' ref={tiltWrapperRef} onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}>
      <div className='  flex space-x-56 relative top-44'>
        <div className='mt-[-90px] ml-[20px]'>
          <img src={pinkTilt} ref={tiltImageRef} className='w-[1200px] h-[500px]' alt="" />
        </div>

        <div className=' w-[1500px]'>
          <div className='text-[rgb(80,34,116)] text-6xl text-left font-extrabold'>
            <p>Create and customize</p>
            <p>your Linktree in</p>
            <p>minutes</p>
          </div>
          <div className='text-left text-[rgb(80,34,116)] font-semiboldbold mt-4 text-lg'>
            <p>Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast,</p>
            <p>events and more. It all comes together in a link in bio landing page designed to</p>
            <p>convert.</p>
          </div>
          <div className='flex justify-start mt-10'>
            <button className='bg-[rgb(80,34,116)] w-[240px] h-16 rounded-full text-white text-lg p-0 ml-0'>Get started for free</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pink