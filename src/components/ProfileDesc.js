import { React, useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import profileImg from "../images/animated.png"
import searchIcon from "../images/search.png"
import codeContext from "../context/codes/codeContext"


export default function ProfileDesc() {

    // GET USER FORMS DETAILS MAPPING LOGIC
    useEffect(() => {
        if (localStorage.getItem("token")) {

            getCodes()
        }

        // eslint-disable-next-line
    }, [])

    // CONTEXT API LOGIC
    const context = useContext(codeContext);

    const { codes, getCodes, addCode } = context;

    const [code, setCode] = useState({ newssource: "", newscategory: "", newstype: "" })

    const handleClick = (e) => {
        e.preventDefault();
        addCode(code.newssource, code.newscategory, code.newstype);
        setCode({ newssource: "", newscategory: "", newstype: "" })
        // window.location.reload();
    }
    const handleClicks = (e) => {
        e.preventDefault();
        // addCode(code.newssource, code.newscategory, code.newstype);
        // setCode({ newssource: "", newscategory: "", newstype: "" })
        window.location.reload();
    }

    const onChange = (e) => {
        setCode({ ...code, [e.target.name]: e.target.value })
    }

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
                        <button style={{ backgroundColor: "transparent", border: "0px solid gray" }}><img alt="" style={{ height: "1.2em", }} src={searchIcon} /></button>

                    </div>
                </div>
            </div>
            <span style={{ fontSize: "1em", marginLeft: "0rem", fontWeight: "bold" }}>See what's trending from around the world.</span>
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
                                <h5>
                                    Raj Mishra
                                </h5>
                                <h6>
                                    (Bio/Name-Alias Section)
                                </h6>
                                <p className="proile-rating">Mode : <span style={{ color: "#22d602" }}>Pro
                                </span></p>
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <Link className="nav-link" id="profile-tab" data-toggle="tab" to="profile" role="tab" aria-controls="profile" aria-selected="false">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" id="home-tab" data-toggle="tab" to="profiledesc" role="tab" aria-controls="home" aria-selected="true">Customise / Update News Settings</Link>
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
                                <p>News Sources</p>
                                <div>
                                    {codes.map((code) => {
                                        return (
                                            <section key={code._id} code={code}>
                                                <p style={{ lineHeight: "0px", color: "#03a5fc" }}></p>

                                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                    <p style={{ lineHeight: "0px", color: "#03a5fc", cursor: "pointer" }}>{code.newssource}</p>
                                                    <img alt="" style={{ height: "1.5em", marginTop: "10px", marginLeft: "50%", cursor: "pointer" }} src="https://img.icons8.com/fluency/48/undefined/delete-trash.png" />
                                                </div>
                                            </section>
                                        )
                                    })}
                                </div>

                                {/* <div>
                                    <p>News Categories</p>

                                    {codes.map((code) => {
                                        return (
                                            <section key={code._id} code={code}>
                                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                    <p style={{ lineHeight: "0px", color: "#03a5fc", cursor: "pointer" }}>{code.newscategory}</p>
                                                    <img alt="" style={{ height: "1.5em", marginTop: "10px", marginLeft: "50%", cursor: "pointer" }} src="https://img.icons8.com/fluency/48/undefined/delete-trash.png" />
                                                </div>
                                            </section>
                                        )
                                    })}
                                </div>

                                <div>
                                    <p>News Types</p>

                                    {codes.map((code) => {
                                        return (
                                            <section key={code._id} code={code}>
                                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                    <p style={{ lineHeight: "0px", color: "#03a5fc", cursor: "pointer" }}>Apple</p>
                                                    <img alt="" style={{ height: "1.5em", marginTop: "10px", marginLeft: "50%", cursor: "pointer" }} src="https://img.icons8.com/fluency/48/undefined/delete-trash.png" />
                                                </div>
                                            </section>
                                        )
                                    })}


                                </div> */}
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="tab-content profile-tab" id="myTabContent">

                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>News Source</label>
                                        </div>
                                        <div className="col-md-6 mt-2">
                                            <input style={{ width: "70%", borderRadius: "6px", border: "1px solid gray" }} type="text" id="newssource" name="newssource" value={code.newssource} onChange={onChange} minLength={5} />
                                            <li onClick={handleClick} style={{ color: "white", backgroundColor: "rgb(27 145 187)", fontSize: "13px", padding: "4.5px 15px" }} className="mx-2 btn">ADD</li>
                                        </div>
                                    </div>
                                    {/* <div className="row">
                                        <div className="col-md-6">
                                            <label>News Category</label>
                                        </div>
                                        <div className="col-md-6 mt-2">
                                            <input style={{ width: "70%", borderRadius: "6px", border: "1px solid gray" }} type="text" id="newssource" name="newscategory" value={code.newscategory} onChange={onChange} minLength={5} />
                                            <button onClick={handleClick} style={{ color: "white", backgroundColor: "rgb(27 145 187)", fontSize: "13px", padding: "4.5px 15px" }} className="mx-2 btn">ADD</button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>News Type</label>
                                        </div>
                                        <div className="col-md-6 mt-2">
                                            <input style={{ width: "70%", borderRadius: "6px", border: "1px solid gray" }} type="text" id="newssource" name="newstype" value={code.newstype} onChange={onChange} minLength={5} />
                                            <button onClick={handleClick} style={{ color: "white", backgroundColor: "rgb(27 145 187)", fontSize: "13px", padding: "4.5px 15px" }} className="mx-2 btn">ADD</button>
                                        </div>
                                    </div> */}
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>News Language</label>
                                        </div>
                                        <div className="col-md-6 mt-2">
                                            <input style={{ width: "70%", borderRadius: "6px", border: "1px solid gray" }} type="text" />
                                            <button style={{ color: "white", backgroundColor: "rgb(27 145 187)", fontSize: "13px", padding: "4.5px 15px" }} className="mx-2 btn">ADD</button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Audible Language</label>
                                        </div>
                                        <div className="col-md-6 mt-2">
                                            <input style={{ width: "70%", borderRadius: "6px", border: "1px solid gray" }} type="text" />
                                            <button style={{ color: "white", backgroundColor: "rgb(27 145 187)", fontSize: "13px", padding: "4.5px 15px" }} className="mx-2 btn">ADD</button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="mt-3 col-md-12">
                                            <div style={{ display: "flex", justifyContent: "center", marginRight: "10em" }}>
                                                <li disabled={code.newssource.length < 5 || code.newscategory.length < 5} type="submit" onClick={handleClicks} style={{ width: "7.5em", fontSize: "15px" }} className="btn btn-primary">SAVE</li>
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
