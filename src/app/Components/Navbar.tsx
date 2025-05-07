"use client";
import React, { useState } from "react";
import Link from 'next/link'

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
       <nav className="bg-orange-500 p-4 flex justify-between items-center w-screen fixed">
      {/* Logo */}
      <div className="text-xl font-bold text-white ml-8">Logo</div>
      
      <div className="flex items-center space-x-6 relative">
        <button className="text-white hover:text-gray-200">Help</button>
        
        {/* Language Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-white hover:text-gray-200"
          >
            Language
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-lg overflow-hidden">
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200">English</button>
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200">Tamil</button>
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200">Hindi</button>
            </div>
          )}
        </div>

        <button className="text-white hover:text-gray-200 mr-8">Account</button>
      </div>
    </nav>
    </div>
  )
}

export default Navbar