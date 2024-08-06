import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'

import logo from '../../assets/Logo.png'

const Header = () => {
  // 'input' tag의 가시성을 설정하는 변수   
  const [isVisible, setIsVisible] = useState(true);
    
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
  }

  return (
    <div className='header'>
        <div className='navbar-top'>
            <div className='navbar-top-left'>
                <div className='select-region'>
                    <p>North America ▼</p>
                </div>
            </div>
            <div className='navbar-top-center'>
                <input type="text" id="search-input" class={`search-input ${isVisible === true ? "active" : ""}`} placeholder="Search..."></input>
            </div>
            <div className='navbar-top-right'>
                <div className='search'>
                    <i id="search-icon" class="fa-solid fa-magnifying-glass" onClick={()=>setIsVisible((prev)=>(prev === false ? true : false))}></i>
                </div>
                <ul>
                    <li>
                        <a href="#">EduCore Free</a>
                        <a href="#">Support</a>
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
                <Link className="log-in" to={"/login"}>Log In ⋁</Link>
            </div>
        </div>
        <div className='navbar-bottom'>
            <div className="navbar-bottom-left">
                <div className="logo-box">
                    <img className="logo" src={logo} alt="" onClick={goToMain}></img>
                </div>
            </div>
            <div class="navbar-bottom-right">
                <ul>
                    <li>
                        <a href="#">YOUTH</a>
                        <a href="#">HIGHER ED</a>
                        <a href="#">VOCATIONAL</a>
                        <a href="#">RESOURCES</a>
                        <a href="#">NEW & EVENTS</a>
                        <a href="#">ABOUT US</a>
                    </li>
                </ul>
                <button className="get-a-demo">GET A DEMO</button>
            </div>
        </div>
    </div>
      
  )
}

export default Header