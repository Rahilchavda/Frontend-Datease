import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.logo1} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Datease, your trusted platform for seamless online slot booking and hassle-free service appointments. Designed and developed indigenously, our platform ensures secure payment integration, real-time booking updates, and an effortless user experience.</p>
          <p>At Datease, we prioritize convenience, security, and trust. Our advanced booking system allows clients to choose available slots instantly, make secure payments through trusted gateways, and receive instant confirmations. Whether you're booking for a personal appointment or a professional service, Datease ensures a smooth and confidential process.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>We are committed to enhancing your booking experience with cutting-edge technology, user-friendly design, and transparent transactions. With Datease, you can book with confidence, knowing your privacy and convenience are our top priorities.</p>
          <p className='font-bold'> Your time matters—book smart, book secure, book with Datease.</p>
          
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-secondary hover:text-primary hover:font-bold transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-secondary hover:text-black-900 hover:font-bold transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE: </b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-secondary hover:text-black-900 hover:font-bold transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p >Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>

    </div>
  )
}

export default About
