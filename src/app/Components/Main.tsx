
import { CircleDollarSign, ShieldUser, Sprout } from 'lucide-react';


export default function Main() {
    return (
        <div className='w-3/4 mx-auto mt-48 p-6'>

            <h2 className='text-2xl font-bold text-center mb-6 uppercase '>why choose us?</h2>

            <div className='grid grid-cols-3 gap-6'>

                <div className='p-6 rounded-lg shadow-md text-center'>
                    <div className='bg-rose-100 p-4 rounded-2xl object-center inline-block'>
                        <CircleDollarSign size={36} />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Competitive Prices</h3>
                    <p className="text-gray-700">Enjoy competitive pricing without compromising on quality.</p>
                </div>

                <div className='p-6 rounded-lg shadow-md text-center'>
                    <div className='bg-rose-100 p-4 rounded-2xl object-center inline-block'>
                        <ShieldUser size={36} />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Secure Booking</h3>
                    <p className="text-gray-700">Book with confidence using our secure and reliable system. Your personal information and payments are protected with advanced security measures, ensuring a safe and hassle-free booking experience every time.</p>
                </div>
                
                <div className='p-6 rounded-lg shadow-md text-center'>
                    <div className='bg-rose-100 p-4 rounded-2xl object-center inline-block'>
                        <Sprout size={36} />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Seamless Experience</h3>
                    <p className="text-gray-700">Enjoy a seamless experience with smooth navigation, intuitive design, and effortless interactions. Whether you're browsing, booking, or exploring, everything flows naturally, making your journey hassle-free and enjoyable.</p>
                </div>
            </div>
        </div>
    );
  }