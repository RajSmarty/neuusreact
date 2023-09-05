import React from 'react';
import searchIcon from "../images/home.jpg"


export default function Homepage() {
    setTimeout(() => {
        window.location.href="/login"
    }, 4000);
    return (
        // <div style={{ backgroundColor: "rgb(85 179 213)", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection:"column" }}>
        <div >
            <img alt='' style={{ height: "auto", width:"100%", display:"block" }} src={searchIcon} />
            <h1 style={{ letterSpacing: "-3px", fontSize: "8em", height: "37px" }} className='logopara mx-4 focus-in-contract-bck overlay'>neuus<span style={{ color: "white", marginLeft: "5px", marginBottom: "0px" , marginRight:"8rem", marginTop:"2rem"}} className="dothome"></span>
            {/* <span style={{ color: "white", marginLeft: "2px", marginBottom: "0px" , marginRight:"8rem"}}>.</span> */}
            </h1>
                <span className="focus-in-contract-bck overlay" style={{ fontSize: "2em",fontWeight: "normal", marginLeft:"2.8em", color:"white" }}>See what's trending from around the world.</span>
        </div>
    )
}
