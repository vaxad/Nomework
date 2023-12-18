import React from 'react'

export default function Loading() {
  return (
    <div id="loading" style={{display: "none", width: "100%", justifyContent: "center", alignItems: "center", minHeight: "100vh"}}>
      <div className="lds-grid" ><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
