import React from 'react'

export default function AccessDenied() {
  return (
    <section style={{backgroundColor:"rgb(85 179 213)", height:"100vh"}}>

      <div style={{ flexDirection: "column", height: "80vh" }} className='d-flex justify-content-center align-items-center animate__animated animate__zoomInDown'>
        <h1 className='mb-2 mt-5' style={{ color:"wheat", textShadow:"1px 1px 8px #2e2e2e" }}>Error: <span style={{fontWeight:"bold"}}>401 Unauthorized</span></h1>
        <p style={{ fontWeight: "bold", fontSize: "4em", color:"white", textShadow:"1px 1px 8px #2e2e2e" }}>Authorization Required</p>
      </div>
    </section>
  )
}