import React from 'react'
import dailyTrack from '../../../public/images/dailyTrack.jpg'

function FeaturesCards() {
  return (
    <div className=' h-[80vh] md:h-[90vh] md:pl-[5vw] md:pr-[5vw]'>
        {/* 1st feature */}
        <div className='   h-[70vh] p-[8px] flex flex-col justify-start items-center md:pl-[15px] md:flex-row md:h-[50vh]'>
            {/* description  */}
            <div className=' h-[32vh] p-[8px] flex flex-col justify-start items-start gap-2 bg-[#EEEEEE] rounded-xl md:w-[52vw] md:h-[42vh] md:p-[22px]'>
                <p className=' text-[26px] font-semibold  md:text-[36px]'>Track Your Daily Expenses</p>
                <p className=' text-[19px] text-gray-800'>Easily record your daily expenses in just a few seconds. Categorize them into predefined or custom categories to ensure accurate tracking of where your money goes, helping you maintain a clear view of your day-to-day spending. Plus, track recurring payments and subscriptions effortlessly to avoid unexpected surprises.</p>

            </div>
            {/* image */}
            <div className='  h-[30vh] flex justify-center items-center p-[5px] md:w-[40vw] md:h-[42vh]'>
                <img src={dailyTrack} alt="daily Track "  className=' rounded-2xl md:h-[40vh]'/>

            </div>
        </div>

    </div>
  )
}

export default FeaturesCards
