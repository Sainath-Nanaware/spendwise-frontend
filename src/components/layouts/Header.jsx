import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
        <header className='pb h-[10vh] bg-[#EEEEEE] flex justify-start items-center pl-[6vw]'>
            <Link to={"/"} aria-label="Home">
               <svg width="240" height="100" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
                {/* <!-- Wallet Icon --> */}
               <rect x="10" y="30" width="40" height="30" rx="5" ry="5" fill="#4CAF50"/>
                <circle cx="45" cy="45" r="5" fill="white"/>
                <path d="M10 40 L50 40" stroke="white" stroke-width="2"/>

                {/* <!-- SpendWise Text --> */} 
                <text x="60" y="55" font-family="Arial, sans-serif" font-size="30" font-weight="bold" fill="#333">
                 Spend<tspan fill="#4CAF50">Wise</tspan>
                </text>
                </svg>
            </Link>                   
        </header>


    )
}

export default Header
