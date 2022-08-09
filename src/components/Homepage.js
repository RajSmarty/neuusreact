import React from 'react'

export default function Homepage() {
    setTimeout(() => {
        window.location.href="/login"
    }, 5000);
    return (
        <div style={{ backgroundColor: "rgb(85 179 213)", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection:"column" }}>
            <h1 style={{ letterSpacing: "-4px", fontSize: "3em", height: "37px" }} className='logopara mx-4 focus-in-contract-bck'>neuus<span style={{ color: "white", marginLeft: "5px", marginBottom: "0px" , marginRight:"8rem"}} className="dot"></span>
            {/* <span style={{ color: "white", marginLeft: "2px", marginBottom: "0px" , marginRight:"8rem"}}>.</span> */}
            </h1>
            <span className="focus-in-contract-bck" style={{ fontSize: "1em",fontWeight: "normal", marginLeft:"3.5em", color:"white" }}>See what's trending from around the world.</span>
        </div>
    )
}
