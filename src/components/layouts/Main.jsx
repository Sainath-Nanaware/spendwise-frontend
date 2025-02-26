import React from 'react'
import mainImage from '../../../public/images/AccountingWoman.jpg'
function Main() {
  return (
    <main className=' h-[20vh] flex  flex-col justify-center items-center md:h-[80vh] md:flex-row md:justify-center md:items-center md:pl-[5vw] md:pr-[5vw]'>
        {/* Text Area */}
        <div className='  h-[100%] w-[50%] flex flex-col justify-start items-center gap-[6vh] pt-[18vh]'>
            {/* Tag Line  */}
            <div className=' md:pl-[12px] md:w-[100%]'>
            <p className='  font-bold text-5xl md:text-6xl text-[#333]'>
                 Track smart, 
            </p>
            <p className=' font-bold text-6xl pl-[10vw] text-[#4CAF50]'>spend wiser</p>

            </div>
           
           {/* tag line description */}
           <div className=' pl-[4vw] w-[100%]'>
            <p className=' w-[40vw] p-[12px] rounded-xl bg-[#EEEEEE] text-[#625959] text-start text-[17px] font-semibold '>"Let’s face it – keeping track of expenses can be overwhelming. But what if it didn’t have to be? With our easy-to-use tools, you can <span className='font-bold text-[#4CAF50]' >track your spending smartly</span>  and <span className='font-bold text-[#4CAF50]'>make wiser financial choices</span> without breaking a sweat."</p>

           </div>
        </div>
        {/* Image Area */}
        <div className='  h-[100%] w-[50%] flex justify-center items-center '>
            <img src={mainImage} alt="ladyImage"  className=' h-[74vh] rounded-2xl'/>
        </div>

    </main>
  )
}

export default Main
