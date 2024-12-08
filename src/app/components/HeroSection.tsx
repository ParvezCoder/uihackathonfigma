import React from 'react'
import Navbar from "@/app/components/Navbar"
import Image from 'next/image'
import SecondPartHeroSection from "@/app/components/SecondPartHeroSection"

const HeroSection = () => {
    return (
        <>
            <div className='h-[200] w-1440 bg-[#FBEBB5] '>

                <Navbar />
                <div className='flex items-center justify-center -mt-16  '>
                    <div className='w-1/3  flex md:flex-col items-end justify-end '>
                        <div className='w-80'><h1 className='text-5xl  '>Rocket Single Seater</h1></div>
                        <button className='border-b-2 text-lg border-black mr-56  text-black mt-2'>Shop Now</button>

                    </div>
                    <div className='w-2/3  flex items-center justify-center h-[900] '>
                        <Image src="/Rocket.png" alt='Rocket' height={200} width={300} className=' w-2/3 h-auto ' />
                    </div>
                </div>
            </div>

            <div className="flex space-x-36 justify-center bg-[#FAF4F4] p-10">
                <SecondPartHeroSection image='/Table.png' />
                <SecondPartHeroSection image='/Soofa.png' />

            </div>

        </>
    )
}

export default HeroSection
