import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div id='Hero' className='font-sans'>
        
      <Image
        src={"/picture/farm-g-1.jpg"} 
        width={1400}
        height={100} 
        alt="farms"
        className="absolute inset-0 h-screen"
      />
      <div className='relative flex-col my-36 ml-32 mr-[600px]'>
      <h2 className='text-[#F6FCDF] text-[18px] font-medium '>Original & Natural</h2>
      <h1 className='text-[#ffca60] text-5xl font-extrabold'>Agriculture Matter</h1>
      <h1 className='text-[#F6FCDF] text-5xl font-bold'>Good Production</h1>
      <p className='text-[#F6FCDF] text-[16px]'>We accelerate plant growth with specialized nutrition feed, ensuring faster and 
        healthier crops. Our advanced solutions promote robust development for optimal
         yields.</p>
         <button className='w-36 h-12 bg-[#ffca60] mt-8 rounded-xl font-semibold'>
            Discover More
         </button>
      </div>
    </div>
    
  );
};

export default Hero;



