import React from 'react'

function GetStart() {
  return (
    <div className='pb h-[14vh]'>
        <main className='pb  h-[40vh]  md:h-[80vh] md:flex md:justify-center md:items-center md:pl-[5vw] md:pr-[5vw]'>
        {/* Text Area */}
        <div className='   h-[100%] w-[100%]  md:w-[50%] '>
            {/* Tag Line  */}
            <div className='  text-center  h-[50%] pt-[4vh] md:text-start md:pt-[14vh] md:pl-[2vw]'>
                   <p className=' font-bold text-5xl md:text-6xl text-[#333]'>
                      Track smart, 
                  </p>
                  <p className=' font-bold text-6xl pl-[10vw] text-[#4CAF50]'>spend wiser</p>   
            </div>
           {/* tag line description */} 
           <div className=' h-[50%]  flex justify-center md:justify-end '>
              <p className=' w-[90vw] md:w-[42vw]  md:h-[24vh] p-[12px]  md:p-[10px] rounded-xl bg-[#EEEEEE] text-[#625959] text-start text-[20px] md:text-[18px] font-semibold '>"Let’s face it – keeping track of expenses can be overwhelming. But what if it didn’t have to be? With our easy-to-use tools, you can <span className='font-bold text-[#4CAF50]' >track your spending smartly</span>  and <span className='font-bold text-[#4CAF50]'>make wiser financial choices</span> without breaking a sweat."</p>

           </div>


        </div>
        {/* Image Area */}
        <div className=' h-[100%] w-[100%] flex justify-center items-center   md:w-[50%]'>
            <img src={mainImage} alt="ladyImage"  className=' h-[38vh] md:h-[76vh] rounded-2xl'/>
        </div>


        {/* <div className='  h-[100%] w-[50%] flex flex-col justify-start items-center gap-[6vh] pt-[18vh]'> */}
            {/* Tag Line  */}
            {/* <div className=' md:pl-[12px] md:w-[100%]'>
            <p className='  font-bold text-5xl md:text-6xl text-[#333]'>
                 Track smart, 
            </p>
            <p className=' font-bold text-6xl pl-[10vw] text-[#4CAF50]'>spend wiser</p>

            </div>
            */}
           {/* tag line description */}
           {/* <div className=' pl-[4vw] w-[100%]'>
            <p className=' w-[40vw] p-[12px] rounded-xl bg-[#EEEEEE] text-[#625959] text-start text-[17px] font-semibold '>"Let’s face it – keeping track of expenses can be overwhelming. But what if it didn’t have to be? With our easy-to-use tools, you can <span className='font-bold text-[#4CAF50]' >track your spending smartly</span>  and <span className='font-bold text-[#4CAF50]'>make wiser financial choices</span> without breaking a sweat."</p>

           </div>
        </div> */}
        {/* Image Area */}
        {/* <div className='  h-[100%] w-[50%] flex justify-center items-center '>
            <img src={mainImage} alt="ladyImage"  className=' h-[74vh] rounded-2xl'/>
        </div> */}

    </main>

    </div>
  )
}

export default GetStart
