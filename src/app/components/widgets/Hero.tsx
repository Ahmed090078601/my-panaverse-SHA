import React from 'react'
import Wrapper from '../shared/Wrapper'
import Image from 'next/image'
import Button from '../shared/button'
import { Specifications } from './SpecificationsDB'
const Hero = () => {
  return (
    <section className=' '>
    <Wrapper>
      <div className='flex flex-col md:flex-row items-center '>
    <div className='flex-1'>
      {
    Specifications.map((item,i) => 
      (<div>
      <h4 className='text-teal-700 font-semibold text-lg '>{item.descriptionh4}</h4>
      <h1 className='text-5xl sm:text-6xl font-bold '>{item.heading1}</h1>
      <p className='mt-6 text-lg text-slate-600'>{item.para1}</p>
      <p className='mt-2 text-xl text-slate-600'>{item.para2}</p>
      </div>
      )
    )    
}     
      <Button text={"Enroll Now"} />
      </div>
<div className='hover:scale-125 m-8'>
    <Image src="/humanpopcorn.jpg" className='rounded-lg' width='400' height='300' alt='nxt' />
    </div>
    </div>
    </Wrapper>
    </section>
  )
}

export default Hero
