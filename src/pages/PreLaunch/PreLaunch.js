import React from 'react'
import Card from '../../components/Card/Card'


const PreLaunch = () => {
  return (
    <div>
      <div className='bg-gray-950 text-white flex justify-center mt-3 font-semibold text-2xl lg:text-4xl md:text-3xl sm:text-xl py-5 '>
        Pre - Launch
      </div>
      <div className="container mx-auto px-4 flex flex-wrap gap-8 my-8 justify-center">
      
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
    <div className="w-full">
      <div className="">
        <Card/>
      </div>
    </div>
    <div className="w-full">
      <div className="">
        <Card/>
      </div>
    </div>
    <div className="w-full">
      <div className="">
        <Card/>
      </div>
    </div>
  </div>
</div>
    </div>
    

  




  )
}

export default PreLaunch
