import React from 'react'
import ladyImage from '../../../public/images/AccountingWoman.jpg'
function Main() {
  return (
    <main className='pb h-[80vh] flex justify-center items-center pl-[5vw] pr-[5vw]'>
        {/* Text Area */}
        <div className='pb h-[100%] w-[50%] flex flex-col justify-center items-center'>
            {/* Tag Line  */}
            <p className='pb font-bold text-5xl'>
                 Track smart,spend wiser 
            </p>
           
           {/* tag line description */}
            <p>"Take control of your finances effortlessly with SpendWise. Our smart tracking tools help you visualize your expenses, manage your budget, and build a brighter financial future. Make every purchase a wise decision—track smart, spend wiser!"</p>
        </div>
        {/* Image Area */}
        <div className='pb h-[100%] w-[50%] flex justify-center items-center '>
            <img src={ladyImage} alt="ladyImage"  className='h-[70vh]'/>
        </div>

    </main>
  )
}

export default Main
