/* eslint-disable no-unused-vars */
import React from 'react'
import Logo from '../assets/logo-black.svg'
import Secure from '../assets/Secure.png'
import HomeIcon from '../assets/Home-icon.png'
import Notification from '../assets/Notification.svg'
import Profile from '../assets/Profile.svg'
import Delete from '../assets/Delete.svg'
import Data from "../components/market-data.jsx"
import { Link } from 'react-router-dom'
import "../utils.css"
import { useState } from 'react';

function Marketplace() {
  const [filters, setFilters] = useState({
    name: '',
    status: '',
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Apply filters here
  };
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
      <div className="dashboard w-[70%] ml-14 text-white">
        <h1 className='mb-[2rem] text-2xl mt-[5rem]'>MarketPlace</h1>
        <div className='mt-6 bg-[#1A324D] w-[95%] h-[85%] rounded-lg py-4 px-6'> 
          <div className="w-full overflow-hidden rounded-lg shadow-xs">
            <div className="w-full overflow-x-auto">
              <table className="w-full whitespace-no-wrap">
                <thead>
                  <tr className="text-xs font-semibold tracking-wide text-left text-white uppercase">
                    <th className="px-4 py-3">Item</th>
                    <th className="px-4 py-3">ID</th>
                    <th className="px-4 py-3">Type</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Category</th>
                    <th className="px-4 py-3">Price</th>
                    <th className="px-4 py-3">Action</th>
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
                      <td className={`px-2 py-3 bg-transparent`}>
                        {item.type}
                      </td>
                      <td className={`px-2 py-3 bg-transparent ${item.status === 'Paid' ? 'text-green-500' : item.status === 'Not Paid' ? 'text-red-500' : 'text-yellow-500'}`}>
                        {item.status}
                      </td>
                      <td className={`px-2 py-3 bg-transparent`}>
                        {item.category}
                      </td>
                      <td className={`px-2 py-3 bg-transparent`}>
                        {item.price}
                      </td>
                      <td>
                        <button className='rounded-lg py-1 px-3 bg-[#F0F8FF] text-[#1A324D] border-white border-2'>
                          Buy now
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
      <div className="history w-[35%] pt-6 text-white">
        <span className='flex gap-8 justify-end pr-8'>
          <img src={Notification} alt="" />
          <img src={Profile} alt="" className='bg-white px-3 py-2 rounded-full'/>
        </span>
        {/* <div className="form">
              <form onSubmit={handleSubmit}>
            <label>
              Item Name:
              <input
                type="text"
                name="name"
                value={filters.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Status:
              <select name="status" value={filters.status} onChange={handleChange}>
                <option value="">All</option>
                <option value="Paid">Paid</option>
                <option value="Not Paid">Not Paid</option>
                <option value="Pending">Pending</option>
              </select>
            </label>
            <button type="submit">Apply Filters</button>
          </form>
        </div> */}
      </div>
  
</div>
  )
}

export default Marketplace