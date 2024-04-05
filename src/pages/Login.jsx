/* eslint-disable no-unused-vars */
import '../signup.css'
import Logo from "../assets/logo-black.svg"
import React, { useState } from 'react';
import Google from "../assets/google-logo.png"
import Metamask from "../assets/metamask-logo.png"
import Arrow from "../assets/arrow-white.png"
import { Link } from 'react-router-dom';
import { ethers } from 'ethers';
import { useNavigate } from 'react-router-dom';

async function connectToMetaMask() {
    // Check if MetaMask is installed
    if (window.ethereum) {
      // Request access to the user's Ethereum accounts
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      // Initialize ethers.js provider with MetaMask provider
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // Access the user's Ethereum accounts
      const accounts = await provider.listAccounts();
      console.log('Connected to MetaMask with accounts:', accounts);
      return accounts.length > 0; // Return true if at least one account is connected
    } else {
      console.error('MetaMask extension not detected');
      return false; // Return false if MetaMask is not installed
    }
  }
function Login() {
    const [formData, setFormData] = useState({
      username: '',
      email: '',
    });

    const navigate = useNavigate(); // Get the navigate function

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleConnect = async () => {
      const isConnected = await connectToMetaMask();
      if (isConnected) {
        navigate('/Dashboard'); // Navigate to Dashboard page
      }
    };
    return (
        
      <div className='background'>
        <Link to="/"><img className='relative top-12 left-12' src={Logo} alt='Logo' /></Link>
        <section className='mx-auto flex flex-col bg-[#1A324D] w-[24rem] mt-32 py-6 px-2 rounded-lg form-container'>
          <h1 className='text-2xl font-bold mb-4 pl-6 text-white'>Log In</h1>
          <form className='flex flex-col w-[20rem] mx-auto'>
            <input 
              className="bg-[#0B1A2B] text-white rounded-md py-3 pl-3 pr-8 mb-4 border-0" 
              type="email" 
              name="email" 
              value={formData.username} 
              onChange={handleChange} 
              placeholder="Email"
            />
            <input 
              className="bg-[#0B1A2B] text-white  rounded-md py-3 pl-3 pr-8 mb-4 border-0" 
              type="password" 
              name="password" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Password"
            />
            <button className='bg-white rounded-lg py-4 pl-3 pr-8 mb-10 text-black' type="submit"><Link to="/Dashboard">Login</Link></button>
           <button className='flex items-center justify-between bg- rounded-lg py-2 pl-3 pr-8 mb-4 text-white border-white border-2'>
              <span className='flex gap-2 items-center'>
              <img src={Google} alt="Google logo" />
              <span>Sign in with Google</span>
              </span>
              <img src={Arrow} alt="" />
              
            </button>

            <button className='flex items-center justify-between bg- rounded-lg py-2 pl-3 pr-8 text-white border-white border-2' onClick={handleConnect}>
              <span className='flex gap-2 items-center'>
              <img src={Metamask} alt="Google logo" />
              <span>Login with Metamask</span>
              </span>
              <img src={Arrow} alt="" />
            </button>
          </form> 
        </section>
        </div>
    )
  }

export default Login
