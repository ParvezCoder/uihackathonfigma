import React from 'react'
import Navbar from "@/app/components/SharedComponents/Navbar"
import Header2 from "@/app/components/SharedComponents/Header2"
import FreeDelieveryComponents from '../components/SharedComponents/FreeDelieveryComponents'
import Footer from '../components/SharedComponents/Footer'
const page = () => {
    return (

        <>
            <Navbar />
            <Header2 heading="Chekout" text="Chekout" />
            <div className='space-x-7 px-12 mt-10 flex'>
                <div className='h-96 w1/2 bg-blue-500'>lkkk</div>
                <div className='h-96 w-1/2 bg-red-500'>dd</div>
            </div>

            <FreeDelieveryComponents />
            <Footer />

        </>
    )
}

export default page