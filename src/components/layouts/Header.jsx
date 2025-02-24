import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
        <header className=' h-[10vh] bg-[#EEEEEE] flex justify-center items-center md:flex md:justify-between md:items-center pl-[5vw] pr-[5vw]'>
            {/* Logo */}
            <div className=''>
                <Link to={"/"} aria-label="Home">
               <svg width="240" height="100" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
                {/* <!-- Wallet Icon --> */}
               <rect x="10" y="30" width="40" height="30" rx="5" ry="5" fill="#4CAF50"/>
                <circle cx="45" cy="45" r="5" fill="white"/>
                <path d="M10 40 L50 40" stroke="white" strokeWidth="2"/>

                {/* <!-- SpendWise Text --> */} 
                <text x="60" y="55" fontFamily="Arial, sans-serif" fontSize="30" fontWeight="bold" fill="#333">
                 Spend<tspan fill="#4CAF50">Wise</tspan>
                </text>
                </svg>
            </Link>
            </div>
            {/* Login and SignIN button */}
            <div className=' hidden p-[10px] md:block' >
                <Button variant="text" sx={{
                    color:'green',
                    fontSize:'16px',
                    fontWeight:'500',
                    textTransform: 'none',  // Keep the text as camelCase
        
                 }}>Log in</Button>
                <Button variant="contained" color="success" sx={{
                    backgroundColor:'#4CAF50',
                    textTransform: 'none',  // Keep the text as camelCase
                    fontSize:'16px',
                    fontWeight:'500',
                 }}>Sign up</Button>
            </div>
                               
        </header>

    )
}

export default Header



// // <Button
//       variant="contained"
//       sx={{
//         backgroundColor: 'purple',
//         color: 'white',
//         padding: '10px 20px',
//         borderRadius: '10px',
//         textTransform: 'none',  // Keep the text as camelCase
//         '&:hover': {
//           backgroundColor: 'darkviolet',
//         },
//       }}
//     >
//       camelCaseButton
//     </Button>