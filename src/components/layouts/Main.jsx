import React from 'react'
import mainImage from '../../../public/images/phoneWithMoney.jpg'
function Main() {
  return (
    <main className=' h-[88vh] p-[10px]  md:h-[82vh] md:pl-[5vw] md:pr-[5vw] md:flex  md:items-center'> 
        {/* Tag Line wih description */}
        <div className=' h-[50vh] flex  flex-col justify-center items-center gap-4  md:h-[80vh] md:w-[50vw] '>
            {/* Tag Line */}
            <div className=' md:w-[48vw]'>
                <p className=' font-bold text-5xl  text-[#333] md:text-[72px]'>
                          Track smart, 
                </p>
                <p className='font-bold text-6xl  text-[#4CAF50] md:text-[72px] md:pl-[95px]'>spend wiser</p>
            </div>
            {/* tag line description */}
            <div className='  h-[30vh] w-[88vw] text-[20px] flex justify-center items-center md:w-[44vw]'>
              <p className=' w-[90vw] md:w-[42vw]  md:h-[24vh] p-[12px]  md:p-[10px] rounded-xl bg-[#EEEEEE] text-[#625959] text-start text-[20px] md:text-[18px] font-semibold '>"Let’s face it – keeping track of expenses can be overwhelming. But what if it didn’t have to be? With our easy-to-use tools, you can <span className='font-bold text-[#4CAF50]' >track your spending smartly</span>  and <span className='font-bold text-[#4CAF50]'>make wiser financial choices</span> without breaking a sweat."</p>

            </div>
        </div>
        {/* Image section */}
        <div className=' h-[36vh] flex justify-center items-center md:h-[80vh] md:w-[50vw]'>
            <img src={mainImage} alt="ladyImage"  className='  h-[34vh]  rounded-2xl md:h-[72vh]'/>
        </div>

    </main>
  )
}

export default Main
