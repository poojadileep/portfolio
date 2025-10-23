"use client"
import React from 'react'
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';




const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
        <div className="lg:col-span-2">
          <h1 className="text-yellow-600  mb-4 text-6xl lg:text-6xl font-extrabold">
           <span className='text-yellow-600  bg-gradient-to-r from primary-600 to-secondary-400'>
            Hello! I am {" "}
            </span>
            <br></br>
            <TypeAnimation
      sequence={[
        
        'Pooja Dileep',
        1000, 
        'a Software Enthusiast',
        1000,
        'a Student',
        1000,
        'a Dancer',
        1000
      ]}
      wrapper="span"
      speed={50}
     
      repeat={Infinity}
    />
  


          </h1>
          <p className="text-black text-lg lg:text-xl mb-4 text-start text-balance">
            I am a BTech ECE Graduate from Amrita Vishwa Vidyapeetham, Amritapuri Campus. 
            I am passionate about learning new things and utilizing my knowledge and skills for a better world.
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 rounded-full bg-yellow-600 hover:bg-slate-800 text-white mt-1 border-black "> <a href="mailto:poojadileeppd16@gmail.com"> Hire me </a> </button>
            <button className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 bg-yellow-600 text-yellow-600 mt-3"> <a href="https://drive.google.com/file/d/1ayMItzgyeKN8vgWexd6ABmHITGfBZH0J/view?usp=sharing" target='blank'>  <span className="block bg-white hover:bg-orange-100 rounded-full px-5 py-2">
                Download CV
              </span> </a> </button>
          </div>
        </div>
        <div className="relative w-full lg:w-auto">
          <Image 
            src={"/cropedpic.jpg"}
            alt='hero image'
            className="rounded-full "
            width={300}
            height={100}
          /> 
        </div>
      </div>
    </section>
  )
}

export default HeroSection


