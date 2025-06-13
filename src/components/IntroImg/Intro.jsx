import React from 'react'
import introImage from '../../assets/introImage.png';
function intro() {
  return (
    <div className='mt-2 h-fit flex flex-col md:flex-row items-center justify-center rounded-md bg-gradient-to-tr from-[#650D1B] via-[#DE0D30] to-[#632228] gap-10 p-2 shadow-2xl m-1'>
        <img src={introImage} alt="image" className='w-96 h-[50%] sm:w-[90%] md:w-100 sm:h-full rounded-md shadow-xl hover:scale-105 cursor-pointer duration-300' />
        <p className='break-all text-md w-[90%] text-center md:w-1/2 text-white'>Welcome to VBookz – your gateway to a world of stories, knowledge, and imagination.
        At VBookz, we believe every book holds the power to inspire, entertain, and transform. Whether you're a lifelong reader or just starting your journey, our carefully curated collection spans all genres to help you find the perfect read. Explore bestsellers, uncover hidden gems, and let your next adventure begin here.</p>
    </div>
  )
}

export default intro