/* eslint-disable no-unused-vars */
import './App.css'
import Logo from "./assets/logo-black.svg"
import { Link } from 'react-router-dom';




function App() {
  return(
    <div className='home-bg pl-20'>
      <div className="flex justify-between w-[90%] items-center pt-14">
      <Link to="/"><img src={Logo} alt='Logo' /></Link>
          <div className="mini-flex flex w-[10%] gap-6 justify-between">
            <button className='rounded-lg py-3 px-8 bg-[#F0F8FF] text-[#1A324D] border-white border-2'><Link to="/Login">Login</Link></button>
            <button className='rounded-lg py-3 px-8 bg-transparent text-[#F0F8FF] border-white border-2'><Link to="/SignUp">SignUp</Link></button>
          </div>
      </div> 
      <div className="home-text">
        <h1 className='text-[5rem] font-semibold leading-[5rem] mt-48 w-[55%] text-white'>Your Trusted Web3 <span className='text-[#2E86DE]'>Escrow</span> Platform</h1>
      </div>
    </div>
  )
  }

export default App
