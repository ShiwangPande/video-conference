import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import conf from '../assets/conf.jpg'
import Navbar from '../components/Navbar'
function Home() {
  const [Roomcode, setRoomcode] = useState('');
  console.log(Roomcode);

  const navigate = useNavigate();

  const submitCode = (e) => {
    e.preventDefault();
    console.log(Roomcode);
    navigate(`/room/${Roomcode}`);
  }
  return (
    <div className=''>
      <Navbar />
      <div className='relative h-screen'>
        <div className='absolute h-full w-full flex overflow-hidden'>
          <img src={conf} alt="" className='object-cover w-full h-full' />
        </div>
        <div className='absolute h-full w-full flex overflow-hidden bg-black/60'>
        </div>
        <div className='lg:flex lg:pt-20 flex-col items-center justify-center z-10 relative px-6 md:max-w-[90vw] mx-auto'>
          <div className='flex flex-col items-center justify-center pb-8'>
            <h1 className='text-[38px] md:text-[80px] text-white font-bold pt-12'>Video Chat App</h1>
          </div>
          <form onSubmit={submitCode} className=' text-white md-pt-12 flex flex-col items-center justify-center'>
            <div className='flex flex-col justify-center items-center'>
              <label className='text-[27px] md:text-[40px] font-bold pt-6'>Enter The Room Code</label>
              <input type='text' required placeholder='Enter Room Code' value={Roomcode} onChange={(e) => setRoomcode(e.target.value)} className='py-1.5 md:py-2 px-4 rounded-full max-w-[14rem] mt-2 text-black md:mt-6 outline-0' />
            </div>
            <button type='submit' className='bg-blue-500 hover:bg-blue-400 duration-100 ease-out font-bold w-[5rem] md:w-[7rem] rounded-full py-[5px] md:py-[7px] mt-2 md:mt-4 ' >GO</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home