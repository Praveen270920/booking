import React from 'react'

function Footer() {
  return (
    <footer className="bg-cover bg-center text-white py-16 mt-10" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)),url('/foot.jpg')" }}>
         {/* Header Background in Css */}
        <div className="w-3/4 mx-auto grid grid-cols-2 gap-6">
          {/* Left Side - Company Info */}
          <div>
            <h2 className="text-2xl font-bold">BusBooking Co.</h2>
            <p className="mt-4 text-gray-200">We are committed to providing the best travel experiences with comfort and reliability. <br /> Book your next trip with us and enjoy a smooth journey.</p>
          </div>
          
          {/* Right Side - Contact Info */}
          <div className='ml-72'>
            <h3 className="text-xl font-bold mb-3">Contact Us</h3>
            <ul>
              <li className="mb-2"><strong>Address:</strong> No.6, Vivekanandar Street, Dubai Main Road, Dubai</li>
              <li className="mb-2"><strong>Email:</strong> contact@busbooking.com</li>
              <li className="mb-2"><strong>Website:</strong> <a href="https://busbooking.com" className="underline">www.busbooking.com</a></li>
            </ul>
          </div>
        </div>
      </footer>
  )
}

export default Footer