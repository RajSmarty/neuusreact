import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function Login() {

    let history = useHistory();
    const [credentials, setCredentials] = useState({ email: "", password: "" })

    //   let loaderBtn = document.getElementById("loaderBtn");
    //   const [spinner, setSpinner] = useState("")

    // LOGIN Credentials LOGIC
    const handleSubmit = async (event) => {
        event.preventDefault()

        if (credentials.email.length === 0) {
            alert("Please Fill all the Inputs")

            window.location.reload()
        }
        // else {

        //   loaderBtn.style.backgroundColor = "rgb(52 176 223)"
        //   setSpinner(<Spinner />);
        // }
        const response = await fetch("https://nice-lime-coyote-coat.cyclic.app/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const data = await response.json()
        console.log(data);
        if (!data || response.status === 400) {
            //   if (credentials.email.length === 0) {
            alert("Please login with correct credentials")
            window.location.reload()
            //   }
        }
        else {
            // Save the auth token and redirect
            // loaderBtn.style.backgroundColor = "rgb(52 136 223)"
            localStorage.setItem('token', data.authtoken);

            history.push("/news");

        }
    }


    const handleOnChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <div className='container' >
                {/* <!-- Pills navs --> */}
                <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                    <li className="nav-item" role="presentation">
                        <Link className="nav-link active" id="tab-login" data-mdb-toggle="pill" to="/login" role="tab"
                            aria-controls="pills-login" aria-selected="true" style={{ backgroundColor: "#1266f1", color: "white" }}>Login</Link>
                    </li>
                    <li className="nav-item" role="presentation">
                        <Link className="nav-link" id="tab-register" data-mdb-toggle="pill" to="/signup" role="tab"
                            aria-controls="pills-register" aria-selected="false" style={{ backgroundColor: "#f5f5f5", color: "rgb(0 0 0 / 60%)" }}>Register</Link>
                    </li>
                </ul>
                {/* <!-- Pills navs --> */}

                {/* <!-- Pills content --> */}
                <div className="tab-content" style={{marginTop:"8rem"}}>
                    <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                        <form onSubmit={handleSubmit}>
                            <div className="text-center mb-3">
                                <p>Sign in with:</p>
                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-facebook-f"></i>
                                </button>

                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-google"></i>
                                </button>

                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-twitter"></i>
                                </button>

                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-github"></i>
                                </button>
                            </div>

                            <p className="text-center">or:</p>

                            {/* <!-- Email input --> */}
                            <label className="form-label" for="loginName">Email or username</label>
                            <div className="form-outline mb-4" >
                                <input style={{ border: "1px solid gray" }} type="email" id="loginName" className="form-control" onChange={handleOnChange} value={credentials.email} name="email" />
                            </div>

                            {/* <!-- Password input --> */}
                            <label className="form-label" for="loginPassword">Password</label>
                            <div className="form-outline mb-4">
                                <input style={{ border: "1px solid gray" }} type="password" id="loginPassword" className="form-control" name='password' onChange={handleOnChange} value={credentials.password} />
                            </div>

                            {/* <!-- 2 column grid layout --> */}
                            <div className="row mb-4">
                                <div className="col-md-6 d-flex justify-content-center">
                                    {/* <!-- Checkbox --> */}
                                    <div className="form-check mb-3 mb-md-0">
                                        <input className="form-check-input" type="checkbox" value="" id="loginCheck" />
                                        <label className="form-check-label" for="loginCheck"> Remember me </label>
                                    </div>
                                </div>

                                <div className="col-md-6 d-flex justify-content-center">
                                    {/* <!-- Simple link --> */}
                                    <a href="#!">Forgot password?</a>
                                </div>
                            </div>

                            {/* <!-- Submit button --> */}
                            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                <button disabled={credentials.email.length === 0 || credentials.password.length === 0} style={{ width: "28%" }} type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
                            </div>
                            {/* <!-- Register buttons --> */}
                            <div className="text-center">
                                <p>Not a member? <Link to="/signup">Register</Link></p>
                            </div>
                        </form>
                    </div>

                </div>
                {/* <!-- Pills content --> */}

            </div>
        </div>
    )
}
