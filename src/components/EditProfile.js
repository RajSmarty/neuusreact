import React from 'react'
// import { Link } from 'react-router-dom'
import profileImg from "../images/animated.png"
import searchIcon from "../images/search.png"


export default function EditProfile() {
    return (
        <div className='container'>
            <div style={{ display: "flex" }}>
                <div style={{ border: "0px solid red", width: "70%" }}>
                    <h1 style={{ letterSpacing: "-4px", fontSize: "3em", height: "37px" }} className='logopara'>neuus<span className="dot"></span>
                        {/* <span style={{ color: "#57c0db", marginLeft: "2px", marginBottom: "0px" }}>.</span> */}
                    </h1>
                </div>
                <div style={{ border: "0px solid red", width: "28.5%" }}>
                    <div style={{ display: "flex", justifyContent: "end", alignItems: "center", marginTop: "15px", border: "1px solid gray", borderRadius: "6px" }}>
                        <input style={{ border: "0px solid gray", backgroundColor: "transparent", padding: "5px 50px" }} type="text" />
                        <button style={{ backgroundColor: "transparent", border: "0px solid gray" }}><img alt='' style={{ height: "1.2em", }} src={searchIcon} /></button>

                    </div>
                </div>
            </div>
            <span style={{ fontSize: "1em", marginLeft: "0rem", fontWeight: "bold" }}>See what's trending from around the world.</span>
            <div className=" emp-profile">
                <form method="post">
                    <div className="row">
                        <div className="row-md-4">
                            <div className="profile-img">
                                <div>
                                    <img style={{ height: "15rem", width: "15rem" }} src={profileImg} alt="" />
                                </div>
                                <div style={{ width: "30%" }} className="mt-4 file btn btn-lg btn-primary">
                                    Change Photo
                                    <input type="file" name="file" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 row">
                        <div className="">
                            <div className="profile-work">
                                <div className="tab-content profile-tab" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className=" row">
                                            <div className="col-md-6">
                                                <label style={{marginLeft:"13.5rem"}}>Name</label>
                                            </div>
                                            <div className="col-md-6 mt-2">
                                                <input style={{ width: "40%", borderRadius: "6px", border: "1px solid gray" }} type="text" />
                                            </div>
                                        </div>
                                        <div className=" row">
                                            <div className="col-md-6">
                                                <label style={{marginLeft:"13.5rem"}}>Username</label>
                                            </div>
                                            <div className="col-md-6 mt-2">
                                                <input style={{ width: "40%", borderRadius: "6px", border: "1px solid gray" }} type="text" />
                                            </div>
                                        </div>
                                        <div className=" row">
                                            <div className="col-md-6">
                                                <label style={{marginLeft:"13.5rem"}}>Email</label>
                                            </div>
                                            <div className="col-md-6 mt-2">
                                                <input style={{ width: "40%", borderRadius: "6px", border: "1px solid gray" }} type="text" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="mt-3 col-md-12">
                                                <div style={{ display: "flex", justifyContent: "center", marginRight: "0em" }}>
                                                    <button style={{ width: "7.5em", fontSize: "12px" }} className="btn btn-primary">SAVE</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}
