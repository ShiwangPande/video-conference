import React from 'react'
import logo from '../assets/conf-logo.png'
function Navbar() {
    return (
        <div className='bg-black/90 '>
            <div className='h-[6rem] flex items-center justify-between px-4 md:max-w-[90vw] mx-auto'>
                <div className='flex items-center'>
                    <div className=' flex w-[4rem] h-[4rem] bg-white rounded-full'>
                        <img src={logo} alt="" className='object-cover p-2' />
                    </div>
                    <div className="text-white font-bold logo_text">
                        <p className='text-[21px] pl-2 '>Video Call App</p>
                    </div>
                </div>
                <div>
                    <ul className='text-white font-bold flex items-center gap-4 cursor pointer'>
                        <li>About Us</li>
                        <li>Products</li>
                        <li>Blogs</li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar