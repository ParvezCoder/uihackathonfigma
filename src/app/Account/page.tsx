import Navbar from "@/app/components/Navbar"
import React from 'react'
import Image from "next//image"
import Footer from "@/app/components/SharedComponents/Footer"
const page = () => {
    return (

        <>
            <Navbar />
            <div className="relative  py-16 font-[sans-serif]">
                <div className="absolute inset-0 ">
                    <Image height={300} width={300} src="/shop2.png" alt="Background Image" className="w-full h-full object-cover " />
                </div>

                <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center ">
                    {/* <Image height={300} width={300} src="/small.png" alt="Background Image" className="w-auto h-auto object-cover " /> */}
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">My Account</h1>
                    <p className="text-lg md:text-xl mb-12">Home</p>
                    {/* <button type="button" className="  text-base tracking-wide px-6 py-3 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl">Get Started</button> */}
                </div>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2  py-10 mt-10 '>

                <form className="md:max-w-sm w-full mx-auto">
                    <div className="mb-8">
                        <h3 className="text-gray-800 text-2xl font-extrabold">Login</h3>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">UserName or Email Address</label>
                            <div className="relative flex items-center">
                                <input name="name" type="text" required className="bg-transparent border border-gray-400 w-full text-gray-800 text-sm pl-4 pr-10 py-3 rounded-xl outline-blue-600" placeholder="" />
                            </div>
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Password</label>
                            <div className="relative flex items-center">
                                <input name="email" type="email" required className="bg-transparent border border-gray-400 w-full text-gray-800 text-sm pl-4 pr-10 py-3 rounded-xl outline-blue-600" placeholder="" />
                            </div>
                        </div>
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                            <label className="ml-3 block text-sm text-gray-800">
                                remember me
                            </label>
                        </div>
                    </div>
                    <div className='flex mt-10 space-x-6 items-center'>

                        <button className='border-2 px-10 rounded-lg py-3'>Log in</button>
                        <p>Last your password?</p>

                    </div>
                </form>

                <form className="md:max-w-sm w-full mx-auto">
                    <div className="mb-8">
                        <h3 className="text-gray-800 text-2xl font-extrabold">Register</h3>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Email Address</label>
                            <div className="relative flex items-center">
                                <input name="name" type="text" required className="bg-transparent border border-gray-400 w-full text-gray-800 text-sm pl-4 pr-10 py-3 rounded-xl outline-blue-600" placeholder="" />
                            </div>
                        </div>

                    </div>
                    <p className='mt-2'>A link to set a new password will be sent to your email address.
                        <br />
                        Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
                    </p>
                    <div className='flex mt-10 space-x-6 items-center'>

                        <button className='border-2 px-10 rounded-lg py-3'>Register</button>
                        <p>Last your password?</p>

                    </div>
                </form>

            </div>
            <div className='grid bg-[#FAF4F4] p-16 grid-cols-1 md:grid-cols-3 gap-2 space-x-2 mt-24 '>
                <div className='text-center space-y-4'>
                    <h2 className='font-bold text-lg lg:text-2xl '>
                        Free Delivery
                    </h2>
                    <p className='text-sm lg:text-lg'>For all oders over $50, consectetur adipim scing elit.</p>
                </div>

                <div className='text-center space-y-4'>
                    <h2 className='font-bold text-lg lg:text-2xl '>
                        90 days Return
                    </h2>
                    <p className='text-sm lg:text-lg'>If goods have problems, consectetur adipim scing elit..</p>
                </div>
                <div className='text-center space-y-4'>
                    <h2 className='font-bold text-lg lg:text-2xl '>
                        Secure PAyment
                    </h2>
                    <p className='text-sm lg:text-lg'>100% secure payment, consectetur adipim scing elit.</p>
                </div>


            </div>
            <Footer/>


        </>

    )
}

export default page