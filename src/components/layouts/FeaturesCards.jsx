import React from 'react'
import dailyTrack from '../../../public/images/dailyTrack.jpg'
import analytics from '../../../public/images/analytics.jpg'

function FeaturesCards() {
  return (
    <div className=' h-[134vh] md:h-[106vh] md:pl-[5vw] md:pr-[5vw]'>
        {/* 1st feature */}
        <div className='   h-[64vh] p-[8px] flex flex-col justify-start items-center md:pl-[15px] md:flex-row md:h-[50vh]'>
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
        

        {/* 2nd  feature */}
        <div className='   h-[68vh] p-[8px] flex flex-col justify-start items-center md:pl-[15px] md:flex-row md:h-[50vh]'>
            {/* image */}
            <div className='  h-[32vh] flex justify-center items-center p-[5px] md:w-[40vw] md:h-[42vh]'>
                <img src={analytics} alt="monthly analytics "  className=' h-[30vh] rounded-2xl md:h-[40vh]'/>

            </div>

            {/* description  */}
            <div className=' h-[38vh] p-[8px] flex flex-col justify-start items-start gap-2 bg-[#EEEEEE] rounded-xl md:w-[52vw] md:h-[42vh] md:p-[22px]'>
                <p className=' text-[26px] font-semibold  md:text-[36px]'>Monthly Spend Analytics</p>
                <p className=' text-[19px] text-gray-800'>Get a detailed breakdown of your monthly expenses through interactive graphs, charts, and visual summaries. Easily identify spending patterns across categories, track recurring payments, and compare month-to-month trends. Empower yourself to make smarter financial decisions by analyzing where your money goes.</p>

            </div>
            
        </div>
    </div>

  )
}

export default FeaturesCards


