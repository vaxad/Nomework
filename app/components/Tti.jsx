"use client"
import React, { useState, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import bgimg from "../../public/page.jpg"
const TTI = () => {
  function toggleTheme(toggleButton) {
    if (document.body.classList.contains('dark')) {
      document.body.classList.add('fade-in-light');
      document.body.classList.remove('dark');
      document.body.classList.remove('fade-in-dark');
      window.localStorage.setItem('prefers-theme', 'light');
      if (toggleButton) {
        toggleButton.setAttribute('aria-pressed', false);
        toggleButton.setAttribute('aria-label', 'Activate Dark Mode');
      }
    } else {
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
  
  useEffect(() => {
    if(window){
    const localPreference = window.localStorage.getItem('prefers-theme');
  if (localPreference) {
    if (localPreference === 'light') document.body.classList.remove('dark');
    else document.body.classList.add('dark');
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark');
  }
    }
  document.querySelectorAll('#donations a[href]').forEach((anchorEl) => {
    anchorEl.addEventListener('click', (e) => {
      const tracker = ga.getAll()[0];
      let label;
      if (e.target.href) {
        label = e.target.href;
      } else {
        label = e.target.parentElement.href;
      }

      if (tracker) {
        tracker.send('event', 'Donation Link', 'Click', label);
      }
    });
  });
  }, [])
  
  
  


  return (
    <div className=' p-6 bg-green-800'>
      <section className="generate-image-section">
        <br /><br />
        <form id="generate-image-form">
          
          <div className="display-flex output-grid responsive-flex">
            <div className="flex-1 page-container-super">
              <div>
                <h2 >Input</h2>
                <label className="block" for="note">Type/Paste text here</label>
              </div>

              <div className="flex-1 page-container">
                <div className="page-a margined lines">
                  <div contenteditable="true" className="top-margin"></div>
                  <div className="display-flex left-margin-and-content">
                    <div contenteditable="true" className="left-margin"></div>
                    <div className="paper-content" id="note" contenteditable="true">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut rhoncus dui eget tortor feugiat iaculis. Morbi et dolor
                      in felis viverra efficitur. Integer id laoreet arcu.
                      Mauris turpis nibh, scelerisque sed tristique non,
                      hendrerit in erat. Duis interdum nisl risus, ac ultrices
                      ipsum auctor at. Aliquam faucibus iaculis metus sit amet
                      tincidunt. Vestibulum cursus urna vel nunc imperdiet
                      suscipit. Ut eu augue egestas, porta orci lobortis,
                      pharetra orci. Morbi eu tellus quis nisi tempor accumsan
                      nec eu urna. empor, ullamcorper tortor. Mauris quis
                      fermentum augue. Phasellus ac nisl hendrerit, fringilla
                      enim aliquam, placerat odio. Ut tortor nisi, pellentesque
                      sed nisi at, hendrerit imperdiet turpis. Proin interdum
                      porttitor metus at hendrerit. Proin ipsum nisl, lacinia
                      vitae purus ullamcorper, maximus convallis sem. Sed nec
                      lacinia lorem. Duis arcu metus, cursus non odio quis,
                      tincidunt tempor augue. Donec eget vestibulum risus.
                      Nullam blandit quis est vitae feugiat.
                    </div>
                  </div>
                  <div className="overlay"></div>
                </div>
                <br />
              </div>

              <div>
                <button
                  id="draw-diagram-button"
                  type="button"
                  className="draw-button"
                >
                  Draw <small>(Beta)</small>
                </button>
              </div>
            </div>

            <div className="customization-col">
              
              <hr
              />
              <div>
                <button
                  type="submit"
                  data-testid="generate-image-button"
                  className="button generate-image-button"
                >
                  Generate Image
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
      <section>
        <h2 id="output-header">Output</h2>
        <div id="output" className="output" style={{textAlign: "center"}}>
          Click "Generate Image" Button to generate new image.
        </div>
        <div style={{textAlign: "center", padding: "30px"}}>
          <button className="imp-button" id="download-as-pdf-button">
            Download All Images as PDF
          </button>
          <button className="delete-button" id="delete-all-button">
            Clear all images
          </button>
        </div>
      </section>
    </div>
  );
};

export default TTI;
