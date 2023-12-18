"use client"
import React from 'react'

export default function Params() {
    function scrollToDiv(elementId) {
        var element = document.getElementById(elementId);
        element.scrollIntoView({ behavior: 'smooth' });
    }
    async function getData(){
        console.log('clicked');
        document.getElementById('loading').style.display = 'flex';
        document.getElementById('homework').style.display = 'none';
        document.getElementById('outputContainer').style.display = 'none';
      
            scrollToDiv('loading');
        const promptField = document.getElementById('promptField');
        const level = document.getElementById('level');
        const characters = document.getElementById('characters');
        const mistakes = document.getElementById('mistakes');
        const data = {
          prompt: promptField.innerText,
          level: level.value,
          characters: characters.value,
          mistakes: mistakes.value
        }
    console.log(data);
    try {
    const resd = await fetch('http://localhost:4000/textprompt/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    const result = await resd.json();
    console.log(result);
        if(result.result){
          
        document.getElementById('loading').style.display = 'none';
        document.getElementById('homework').style.display = 'block';
        document.getElementById('outputContainer').style.display = 'block';
          scrollToDiv('homework');
          const canv = document.getElementById('note');
          canv.innerText = result.result;
        }
         
    } catch (error) {
    console.log(error);
    }
      }
  return (
    <div id="inputs" style={{minHeight: "100vh",display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "center", width: "100%"}}>
              <h2 style={{paddingBottom:"5vh",paddingTop: "7vh"}}>Help us make your answer <i>yours</i></h2>
              <div style={{width: "100%", paddingTop: "2vh", paddingBottom: "2vh"}}>
                <label className="block" for="Level"
                  >Level</label>
                <select id="level" style={{width: "100%"}}>
                  <option
                    selected
                    value="kids"
                  >
                    Kids
                  </option>
                  <option value="teenager">Teenager</option>
                  <option
                    value="adults"
                  >
                    Adults
                  </option>
                </select>
              </div>
              <div style={{width: "100%",paddingTop: "2vh", paddingBottom: "2vh"}}>
                <label className="block" for="characters"
                  >Number of characters</label>
                <select id="characters" style={{width: "100%"}}>
                  <option
                    selected
                    value="100"
                  >
                    100
                  </option>
                  <option value="200">200</option>
                  <option value="300">300</option>
                  <option value="400">400</option>
                  <option value="500">500</option>
                  <option value="600">600</option>
                  <option value="700">700</option>
                  <option value="800">800</option>
                  <option value="900">900</option>
                  <option value="1000">1000</option>
                </select>
              </div>
              <div style={{width: "100%", paddingTop: "2vh", paddingBottom: "2vh"}}>
                <label className="block" for="vocab"
                  >Mistakes</label>
                <select id="mistakes" style={{width: "100%"}}>
                  <option
                    selected
                    value="kids"
                  >
                    None
                  </option>
                  <option value="few">Few</option>
                  <option
                    value="many"
                  >
                    Many
                  </option>
                </select>
              </div>
              <button
              id="prompt"
              className="button generate-image-button"
              style={{width: "100%", color: "#434343", marginTop: "5vh"}}
              onClick={()=>getData()}
            >
              Generate Text
            </button>
            <div className=' h-full flex flex-col justify-center items-center w-full lg:hidden md:hidden '>
                <img src="/params.png" alt="" className=' w-4/5 mt-5' />
            </div>
            </div>
  )
}
