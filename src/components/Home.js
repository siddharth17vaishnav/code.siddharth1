import React from 'react';
import Typical from 'react-typical'


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#ffffff]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-blue-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#000000]'>
        <Typical
        steps={['SIDDHARTH ', 2000, 'VAISHNAV', 2000]}
        loop={Infinity}
        wrapper="p"
      />
        
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#655D8A]'>
          I'm a Front End Developer.
        </h2>
        <p className='text-[#576F72] py-4 max-w-[700px]'>
          I’m a front end developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive  web applications.
        </p>
        <div>
        
         
        </div>
      </div>
    </div>
  );
};

export default Home;