'use client'

import React from 'react'
import Button from './Button'
import Image from "next/image"; 
import { useRouter } from 'next/navigation';



function Header() {
  const router= useRouter()

  return (
    <header className=" fixed w-full z-10 px-5 bg-primaryDark text-primarybg">
    <div className="  py-3 flex justify-between items-center font-manrope">
    <div className="flex items-center gap-2">
    <a
    href="/"
    onClick={() => window.location.reload()}
  >

    <Image
        src="/Suyog logo.jpg"
        alt="Suyog Plastic Logo"
        width={30} 
        height={30}
        className="bg-primarybg rounded-sm"
      /> 
        </a>
      <h1 className="text-2xl justify-start font-bold ">Suyog Plastics</h1>
      </div>


      <nav className="hidden md:block">
        <ul className="flex space-x-6 font-bold ">
          {["Home",'About', 'Gallery', 'Services', 'Contact'].map((item) => (
            <li key={item}>
              <a onClick={()=> {
                router.push("/")
                if (item === "About" || item === "Gallery"  || item === "Contact") {
                router.push(`/${item.toLowerCase()}`);
              }
              else{
                router.replace(`/#${item.toLowerCase()}`)
                // router.push(`#${item.toLowerCase()}`)
                

              }
              }}

              
                className=" hover:text-blue-600 transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <Button 
   href="#contact"
   className="font-bold rounded-full bg-primarybg px-4 text-black p-1">Support</Button>
      <button
        className="md:hidden text-gray-600 focus:outline-none"
        // onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
    
  </header>
  )
}

export default Header