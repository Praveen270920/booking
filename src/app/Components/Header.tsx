"use client";
import { Search } from 'lucide-react'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

function Header() {

  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (!source || !destination) {
      alert("Please enter both source and destination.");
      return;
    }

    // Navigate to the results page with parameters
    router.push(`/s?source=${source}&destination=${destination}`);
  };

  return (
    <div>
        <div className="header bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('/1132783.jpg')] bg-fixed h-3/4 w-full bg-cover bg-center flex justify-center align-center">
           {/* Header Background in Tailwind Css */}
          <div className='pt-96 text-white'>
            <p className='font-extrabold flex justify-center text-8xl py-4'>Let's Discover</p>
            <p className="font-bold flex justify-center text-3xl py-4">The World Together</p>
            <p className="font-bold flex justify-center text-l pt-4">Planning your next trip? Book your bus tickets effortlessly with our fast and reliable service.</p>
            <p className="font-bold flex justify-center text-l pb-4">Enjoy a smooth, hassle-free journey with secure payments and real-time updates. Travel made simple—because your comfort matters! 🚍✨</p>
          </div>  
        </div>

      {/* Search Bar */}
      <div className="w-3/4 mx-auto rounded-3xl text-white font-extrabold bg-orange-500 flex items-center transform -translate-y-12 space-x-4 shadow-lg">
      
      <div className="w-1/4 border-r p-4">
        <label className="block">From</label>
            <input 
            type="text" 
            name="from" 
            className="w-full p-2 rounded-lg" 
            placeholder="Enter starting location" 
            value={source}
            onChange={(e) => setSource(e.target.value)}
            />
      </div>

      <div className="w-1/4 border-r p-4">
        <label className="block">To</label>
            <input 
            type="text" 
            name="to" 
            className=" w-full p-2 rounded-lg" 
            placeholder="Enter destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            />
      </div>

      <div className="w-1/4 border-r p-4">
        <label className="block">Date</label>
            <input 
            type="date" 
            name="date" 
            className=" w-full p-2 rounded-lg"
            />
      </div>

      <div className="w-1/4 p-4">
        <button onClick={handleSearch} className="w-full bg-orange-500 p-2 py-4 rounded-lg hover:bg-orange-600 transition duration-500 ease-in-out flex items-center justify-center gap-2">
          <Search/> Search Buses</button>
      </div>
    </div>
  </div>
  )
}

export default Header