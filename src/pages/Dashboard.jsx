/* eslint-disable no-unused-vars */
import React from 'react'
import Logo from '../assets/logo-black.svg'
import Secure from '../assets/Secure.png'
import HomeIcon from '../assets/Home-icon.png'
import IllustrationOne from '../assets/Illustration-one.svg'
import Illustrationtwo from '../assets/Illustration-two.svg'
import ArrowBlack from '../assets/arrow-black.svg'
import Arrow from '../assets/arrow-white.svg'
import Notification from '../assets/Notification.svg'
import Profile from '../assets/Profile.svg'
import Delete from '../assets/Delete.svg'
import Data from "../components/Data.jsx"
import { Link } from 'react-router-dom'
import "../utils.css"

function Dashboard() {
  return (
    <div className='flex bg'>
        <div className="nav-menu min-w-[14rem]  h-screen bg-[#1A324D] xl:min-w-[19rem] 2xl:w-[20%]">
          <img className='relative top-16 left-6 mb-20 2xl:top-14 xl:left-14 2xl:mb-32' src={Logo} alt='Logo' />
          <div className=' w-[80%] py-3 pl-3 ml-16 bg-transparent rounded-l-md transition duration-500 ease-in-out transform hover:bg-opacity-20 hover:bg-white'>
            <span className=' w-[30%] flex gap-2 justify-between'>
            <img src={HomeIcon} className="" alt="" />
            <h3 className='text-white'><Link to="/Dashboard">Home</Link></h3>
            </span>
          </div>
          <div className=' w-[80%] py-3 pl-3 ml-16 bg-transparent rounded-l-md transition duration-500 ease-in-out transform hover:bg-opacity-20 hover:bg-white'>
            <span className=' w-[30%] flex gap-2 justify-between'>
            <img src={HomeIcon} className="" alt="" />
            <h3 className='text-white'><Link to="/Marketplace">Marketplace</Link></h3>
            </span>
          </div>
          <div className=' w-[80%] py-3 pl-3 ml-16 bg-transparent rounded-l-md transition duration-500 ease-in-out transform hover:bg-opacity-20 hover:bg-white'>
            <span className=' w-[30%] flex gap-2 justify-between'>
            <img src={HomeIcon} className="" alt="" />
            <h3 className='text-white'>Listings</h3>
            </span>
          </div>
          <div className=' w-[80%] py-3 pl-3 ml-16 bg-transparent rounded-l-md transition duration-500 ease-in-out transform hover:bg-opacity-20 hover:bg-white'>
            <span className=' w-[30%] flex gap-2 justify-between'>
            <img src={HomeIcon} className="" alt="" />
            <h3 className='text-white'>Escrows</h3>
            </span>
          </div>
        </div>
          <div className="dashboard w-[52%] ml-14 text-white">
            <h1 className='mb-[2rem] text-2xl mt-[5rem]'>Dashboard</h1>
            <div className="flex gap-20 w-[90%] justify-between py-6 pl-12 pr-20 bg-transparent bg-opacity-60 backdrop-filter backdrop-blur-lg rounded-lg border-white border-2">
                <div className="paying flex flex-col">
                  <h2 className='2xl:text-2xl'>To be Paid</h2>
                  <span className='bg-white text-black py-8 mt-2 px-20 rounded-lg text-xl font-semibold 2xl:py-10 2xl:px-24'>700000</span>
                </div>
                <div className="paying flex flex-col">
                  <h2 className='2xl:text-2xl'>To be Paid</h2>
                  <span className='bg-white text-black py-8 mt-2 px-20 rounded-lg text-xl font-semibold 2xl:py-10 2xl:px-24'>700000</span>
                </div>
            </div>
            <div className='flex w-[90%] mt-6 justify-between 2xl:mt-14'>
              <div className='flex w-[45%] items-center gap-4 bg-[#1A324D] text-white py-6 mt-2 px-14 rounded-lg font-medium'>
                <img src={Secure} alt=""  height={48} width={48}/>
                <h2>Secure Money</h2>
              </div>
              <div className='flex w-[45%] items-center gap-4 bg-[#1A324D] text-white py-6 mt-2 px-10 rounded-lg font-medium'>
                <img src={Secure} alt="" height={48} width={48}/>
                <h2>Top up money for later</h2>
              </div>
            </div>
            <div className='bg-[#1A324D] mt-10 rounded-lg py-4 px-8 w-[90%]'> 
              <div className='flex justify-between mb-10 py-4 px-8 bg-[#37AE21] rounded-xl'>
                <span className='flex items-center gap-10'>
                  <img src={IllustrationOne} alt="" height={148} width={148}/>
                  <h2 className='text-xl'>Share to Whatsapp</h2>
                </span>
                <img src={Arrow} alt="" height={7} width={14}/>
              </div>
              <div className='flex justify-between py-4 px-8 bg-white rounded-xl'>
                <span className='flex items-center gap-16'>
                    <img src={Illustrationtwo} alt="" height={120} width={120}/>
                    <h2 className='text-black text-xl'>Copy Link</h2>
                  </span>
                  <img src={ArrowBlack} alt="" height={2} width={14}/>
              </div>
            </div>
          </div>
        <div className="history w-[35%] pt-6 text-white">
            <span className='flex gap-8 justify-end pr-8'>
              <img src={Notification} alt="" />
              <img src={Profile} alt="" className='bg-white px-3 py-2 rounded-full'/>
            </span>
            <div className='mt-6 bg-[#1A324D] w-[95%] h-[85%] rounded-lg py-4 px-6'> 
              <h2 className='mb-6 '>History</h2>
              <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                  <table className="w-full whitespace-no-wrap">
                    <thead>
                      <tr className="text-xs font-semibold tracking-wide text-left text-white uppercase">
                        <th className="px-4 py-3">Item</th>
                        <th className="px-4 py-3">ID</th>
                        <th className="px-4 py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                    {Data.map((item, index) => (
                        <tr key={index}>
                          <td className="px-2 py-3">
                            {item.name}
                          </td>
                          <td className="px-2 py-3">
                            {item.ID}
                          </td>
                          <td className={`px-2 py-3 bg-transparent ${item.status === 'Paid' ? 'text-green-500' : item.status === 'Not Paid' ? 'text-red-500' : 'text-yellow-500'}`}>
                            {item.status}
                          </td>
                          <td>
                            <button>
                              <img src={Delete} alt="Delete" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard