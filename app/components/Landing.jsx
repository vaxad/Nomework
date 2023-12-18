"use client"
import React from 'react'

export default function Landing() {
    function scrollToDiv(elementId) {
        var element = document.getElementById(elementId);
        element.scrollIntoView({ behavior: 'smooth' });
    }
  return (
    <section style={{minHeight: "100vh", display: "flex", justifyContent: "start", alignItems: "center", flexDirection: "column", height: "100%", position: "relative"}}>
          <div className='' style={{borderRadius: "100%", width: "300px", height: "300px",position: "absolute", zIndex: "-15", 
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -110%)",
          backgroundImage: "linear-gradient(to right, #b3ffab 0%, #12fff7 100%)",
        //   clip: "var(--clipPath)"
          }}></div>
          {/* <!-- <div style=" border-radius: 100%; width: 300px; height: 300px;position: absolute; z-index: -3; 
          top: 50%;
          left: 50%;
          transform: translate(-50%, -70%);
          background-image: linear-gradient(to right, #21D4FD 0%, #B721FF 100%);
          clip: rect(220px, 260px, 500px, -150px);
          "></div> --> */}
            <h1 className=' scale-90 lg:scale-100 md:scale-100' style={{fontSize: "3rem", textAlign: "center", backgroundImage: "linear-gradient(to right, #21D4FD, #B721FF)", paddingTop: "10vh",
            color: "transparent",
            marginTop : "5vh",
            marginBottom:"5vh",
            WebkitBackgroundClip: "text",
            backgroundClip: "text", mixBlendMode:"exclusion"}}>NOMEWORK</h1>
            <div className=' px-5 py-4 w-full md:w-10/12 lg:w-9/12 relative' style={{color: "rgb(255, 255, 255)", borderRadius: "10px", borderWidth: "10px", border:"transparent",
            backgroundImage: "var(--promptField-bg)", display: "flex", flexDirection: "row", gap: "1vw", justifyContent: "center", alignItems: "center", marginTop: "2rem", fontSize: "medium", maxWidth: "80%", borderColor: "transparent"}}>
            <div contenteditable="true" id="promptField" style={{width: "100%", height: "100%",outline: "none", color:"var(--primary-button-color)"}}></div>
            <svg onClick={()=>{scrollToDiv("inputs")}} xmlns="http://www.w3.org/2000/svg" 
            id="scrollButton" fill="#fff" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
              <path d="M 2 3 L 2 10.5 L 17 12 L 2 13.5 L 2 21 L 22 12 L 2 3 z"></path>
          </svg>
        <div className=' w-screen h-screen -z-10 absolute top-0 ' style={{backgroundImage:"var(--background-primary)"}}></div>
        </div>
            <p className=' text-xs md:text-base lg:text-lg w-11/12 md:w-10/12 lg:w-9/12' style={{ textAlign: "center", marginTop: "2rem"}}>Whether you&apos;re a kid, teenager, or adult, craft assignments effortlessly and download them as individual images or a complete PDF. Unleash your creativity and enhance your writing experience with <b>Nomework</b>!</p>
            {/* <!-- <div style="textAlign: center; marginTop: 2rem;">
                <a href="https://saurabhdaware.github.io/text-to-handwriting" style="padding: 1rem 2rem; backgroundColor: #fff; color: #000; border-radius: 5px; fontSize: 1.5rem; text-decoration: none;">Go to Text to Handwriting</a>
            </div> --> */}
            <div className=' h-full flex flex-col justify-center items-center w-full lg:hidden md:hidden '>
                <img src="/landing.png" alt="" className=' w-4/5 mt-5' />
            </div>
        </section>
  )
}
