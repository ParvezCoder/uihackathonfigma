import React from 'react'
import Navbar from "@/app/components/SharedComponents/Navbar"
import Image from 'next/image'
import SecondPartHeroSection from "@/app/components/SecondPartHeroSection"

const HeroSection = () => {
    return (
        <>


            <div className="bg-[#FBEBB5] w-full h-screen font-[sans-serif]">
            <Navbar />

                <div className="grid md:grid-cols-2 items-center md:max-h-[1000px] overflow-hidden">
                    <div className="">
                    <h1 className="flex justify-center items-end sm:text-4xl text-2xl font-bold ">Rocket Single Seater</h1>
                    <h1 className="flex justify-center  items-end sm:text-md text-lg font-bold "> <span className='border-b-2 border-black mt-6 text-black'>Shop now</span></h1>

                    </div>
                    <Image src="/Rocket.png" alt='Rocket' height={200} width={300} className=' w-2/3 h-auto ' />

                </div>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 space-x-36 justify-center bg-[#FAF4F4]  p-10">

                <SecondPartHeroSection image='/Table.png' />
                <SecondPartHeroSection image='/Soofa.png' />

            </div>

        </>
    )
}

export default HeroSection
