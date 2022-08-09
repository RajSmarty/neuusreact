import { React, useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import profileImg from "../images/animated.png"
import searchIcon from "../images/search.png"
import AccessDenied from './AccessDenied';
import codeContext from "../context/codes/codeContext"


export default function Profile() {

    let history = useHistory();

    // Logout Logic 
    const handleLogout = () => {
        localStorage.removeItem("token");
        setTimeout(() => {
            history.push("/login")
        }, 1000);
    }

    // GET USER DETAILS MAPPING LOGIC
    useEffect(() => {
        if (localStorage.getItem("token")) {

            getUserDetails()
        }
        else {
            history.push("/accessdenied")
        }
        // eslint-disable-next-line
    }, [0])

    // GET USER FORMS DETAILS MAPPING LOGIC
    useEffect(() => {
        if (localStorage.getItem("token")) {

            getCodes()
        }
        else {
            history.push("/")
        }
        // eslint-disable-next-line
    }, [])

    // CONTEXT API LOGIC
    const context = useContext(codeContext);

    const { codes, json, getCodes, getUserDetails } = context;


    return (
        <>
            {localStorage.getItem("token") ?
                <div className='container'>

                    {/* -------------------Company Logo Starts-------------->>>>>>>>>>>>>>>>>>>>>>> */}
                    <div style={{ display: "flex" }}>
                        <div style={{ border: "0px solid red", width: "70%" }}>
                            <h1 style={{ letterSpacing: "-4px", fontSize: "3em", height: "37px" }} className='logopara'>neuus<span className="dot"></span>
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
                    {/* <<<<<<<<<<<<<<<<<<<<<<Company Logo Ends------------------------------------*/}


                    <div className=" emp-profile">
                        <form>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="profile-img">
                                        <img src={profileImg} alt="" />
                                        <div className="file btn btn-lg btn-primary">
                                            Change Photo
                                            <input type="file" name="file" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="profile-head">
                                        {json.map((jsonobj) => {
                                            return (
                                                <>
                                                    <section key={jsonobj._id} jsonobj={jsonobj}>
                                                        <h5>{jsonobj.name}</h5>
                                                    </section>
                                                </>
                                            )
                                        })}

                                        <h6>
                                            (Bio/Name-Alias Section)
                                            {codes.map((code) => {
                                                return (
                                                    <section key={code._id} code={code}>
                                                        <h6>{(code.bio)}</h6>
                                                    </section>
                                                )
                                            })}
                                        </h6>
                                        <p className="proile-rating">Mode : <span style={{ color: "#22d602" }}>Pro
                                        </span></p>
                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item">
                                                <Link className="nav-link active" id="home-tab" data-toggle="tab" to="profile" role="tab" aria-controls="home" aria-selected="true">About</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="profile-tab" data-toggle="tab" to="profiledesc" role="tab" aria-controls="profile" aria-selected="false">Customise / Update News Settings</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <Link to="/profiledit"><button type="button" className="profile-edit-btn">Edit Profile</button></Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="profile-work">
                                        <p style={{ fontSize: "15px" }}>News Sources</p>
                                        {/* (Bio/Name-Alias Section) */}
                                        {codes.map((code) => {
                                            return (
                                                <section key={code._id} code={code}>
                                                    <p style={{ lineHeight: "0px", color: "#03a5fc" }}>{code.newssource}</p>
                                                </section>
                                            )
                                        })}

                                        {/* <div>
                                            <p style={{ fontSize: "15px" }}>News Categories</p>
                                            {codes.map((code) => {
                                            return (
                                                <section key={code._id} code={code}>
                                                    <p style={{ lineHeight: "0px", color: "#03a5fc" }}>{code.newscategory}</p>
                                                </section>
                                            )
                                        })}
                                        </div>

                                        <div>
                                            <p style={{ fontSize: "15px" }}>News Types</p>
                                            {codes.map((code) => {
                                            return (
                                                <section key={code._id} code={code}>
                                                    <p style={{ lineHeight: "0px", color: "#03a5fc" }}>{code.newstype}</p>
                                                </section>
                                            )
                                        })}
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="tab-content profile-tab" id="myTabContent">



                                        {json.map((jsonobj) => {
                                            return (
                                                <>
                                                    <section key={jsonobj._id} jsonobj={jsonobj}>
                                                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <label>User Id</label>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    {/* <p>{jsonobj._id}</p> */}
                                                                    <p>{jsonobj.username}</p>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <label>Name</label>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <p>{jsonobj.name}</p>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <label>Email</label>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <p>{jsonobj.email}</p>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <label>Phone</label>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <p>{jsonobj.phone}</p>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <label>Profession</label>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <p>{jsonobj.profession}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </section>
                                                </>
                                            )
                                        })}



                                        <div className="row">
                                            <div className="mt-3 col-md-12">
                                                <div style={{ display: "flex", justifyContent: "center", marginRight: "10em" }}>
                                                    <li onClick={handleLogout} style={{ width: "7.5em", fontSize: "15px" }} className="btn btn-danger">Logout</li>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div > : <AccessDenied />
            }
        </>
    )
}
