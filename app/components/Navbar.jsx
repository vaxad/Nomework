"use client"
import React, { useState } from 'react'

export default function Navbar() {
    const [nav, setnav] = useState(false)
    function toggleTheme() {
        let toggleButton = document.getElementById("toggler")
        if (document.body.classList.contains('dark')) {
            document.getElementById('logo').src = '/logoblack.png'
          document.body.classList.add('fade-in-light');
          document.body.classList.remove('dark');
          document.body.classList.remove('fade-in-dark');
          window.localStorage.setItem('prefers-theme', 'light');
          if (toggleButton) {
            toggleButton.setAttribute('aria-pressed', false);
            toggleButton.setAttribute('aria-label', 'Activate Dark Mode');
          }
        } else {
            document.getElementById('logo').src = '/logowhite.png'
          document.body.classList.add('fade-in-dark');
          document.body.classList.add('dark');
          document.body.classList.remove('fade-in-light');
          window.localStorage.setItem('prefers-theme', 'dark');
          if (toggleButton) {
            toggleButton.setAttribute('aria-pressed', true);
            toggleButton.setAttribute('aria-label', 'Activate Light Mode');
          }
        }
      }
  return (
    <div className=' flex flex-row w-full md:justify-evenly justify-between  lg:px-0 md:px-0 lg:justify-evenly items-center  '>
        <img id='logo' className=' hidden lg:block md:block' src='/logoblack.png' 
         width="140px" style={{ left: "60px", top:"60px"}} alt="nomework">

            </img>
      
    <div className=' hidden lg:flex md:flex' style={{flexDirection: "row", gap: "2vw", justifyContent: "start", alignItems: "center"}}>
        <h3 className="navlink">Home</h3>
        <h3 className="navlink">Features</h3>
        <h3 className="navlink">Pricing</h3>
        <h3 className="navlink">FAQ</h3>
        <h3 className="navlink">Contact</h3>
        </div>

    
        
      <button className=' block lg:hidden md:hidden z-30' onClick={()=>setnav(!nav)}>=</button>
      <div className={`lg:hidden flex md:hidden justify-evenly ${!nav&&"-translate-y-full"} transition-all items-center flex-col h-screen w-full fixed bottom-0 left-0 z-20`} style={{backgroundImage:"var(--background-primary)", transitionDuration:"1.5s"}}>
        <h3 className="navlink">Home</h3>
        <h3 className="navlink">Features</h3>
        <h3 className="navlink">Pricing</h3>
        <h3 className="navlink">FAQ</h3>
        <h3 className="navlink">Contact</h3>
        </div>

        <button
        aria-label="Activate Dark Mode"
        id='toggler'
        title="Toggle Dark Mode"
        // aria-pressed="false"
        onClick={()=>toggleTheme()}
        className="dark-mode-toggle z-10 "
      >
        <span className="sun">
          <img
            alt="sun icon that represents light mode"
            width="35px"
            src="/images/sun.svg"
        /></span>
        <span className="moon"
          ><img
            alt="moon icon to represent dark mode "
            width="25px"
            src="/images/moon.svg"
        /></span>
      </button>
      </div>
  )
}
