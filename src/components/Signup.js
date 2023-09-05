import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import userLogoImg from '../images/logo1.png';
// import Spinner from './SpinnerLogin';
import { Link } from 'react-router-dom'


export default function Signup() {

    let history = useHistory();
    // const [spinner, setSpinner] = useState("")

    const [credentials, setCredentials] = useState({ name: "", username: "", email: "", phone: "", profession: "", password: "" })

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (credentials.email.length === 0) {
            alert("Please Fill all the Inputs")
            window.location.reload()
        }
        // else {

        //     setSpinner(<Spinner />);
        //   }

        const { name, username, email, phone, profession, password } = credentials;
        const response = await fetch("https://nice-lime-coyote-coat.cyclic.app/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, username, email, phone, profession, password })
        });
        const data = await response.json()

        setTimeout(() => {

            console.log(data);
            if (data) {
                // Save the auth token and redirect
                // setTimeout(() => {
                // history.push("/Authenticating");

                setTimeout(() => {
                    localStorage.setItem('token', data.authtoken);
                    history.push("/news");
                }, 1000);
                // }, 0);

            }
            else {
                alert("User already exists!");
                setTimeout(() => {
                    console.log("Reloading Page...")
                    window.location.reload()
                }, 0);
            }
        }, 1000);

    }

    const handleOnChange = (event) => {

        setCredentials({ ...credentials, [event.target.name]: event.target.value })
        setTextName(event.target.value.text3)
        setText1(event.target.value.text1)
        setText2(event.target.value.text2)
        setText3(event.target.value.text3)
        setText4(event.target.value.text4)
        setText5(event.target.value.text5)
        setText6(event.target.value.text5)

    }

    const [text1, setText1] = useState("")
    const [text2, setText2] = useState("")
    const [text3, setText3] = useState("")
    const [text4, setText4] = useState("")
    const [text5, setText5] = useState("")
    const [text6, setText6] = useState("")

    const [textName, setTextName] = useState("")


    return (
        <div className='container'>
            {/* <!-- Pills navs --> */}
            <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                    <Link className="nav-link active" id="tab-login" data-mdb-toggle="pill" to="/login" role="tab"
                        aria-controls="pills-login" aria-selected="false" style={{ backgroundColor: "#f5f5f5", color: "rgb(0 0 0 / 60%)" }}>Login</Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link className="nav-link" id="tab-register" data-mdb-toggle="pill" to="/signup" role="tab"
                        aria-controls="pills-register" aria-selected="true" style={{ backgroundColor: "#1266f1", color: "white" }}>Register</Link>
                </li>
            </ul>
            {/* <!-- Pills navs --> */}

            {/* <!-- Pills content --> */}
            <div className="tab-content mt-4" >
                <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                    <form onSubmit={handleSubmit} style={{ marginTop: "8rem" }}>
                        {/* <div className="text-center mb-3">
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

                        <p className="text-center">or:</p> */}

                        {/* <!-- Name input --> */}
                        <label className="form-label" for="registerName">Name</label>
                        <div className="form-outline mb-4">
                            <input style={{ border: "1px solid gray" }} type="text" id="registerName" className="form-control" minLength="3" name='name' required placeholder="Enter Name"
                                onChange={handleOnChange} value={textName} />
                        </div>

                        {/* <!-- Username input --> */}
                        <label className="form-label" for="registerUsername">Username</label>
                        <div className="form-outline mb-4">
                            <input style={{ border: "1px solid gray" }} type="text" id="registerUsername" className="form-control" name="username" minLength="3" placeholder="Enter Username"
                                onChange={handleOnChange} value={text4} />
                        </div>

                        {/* <!-- Email input --> */}
                        <label className="form-label" for="registerEmail">Email</label>
                        <div className="form-outline mb-4">
                            <input style={{ border: "1px solid gray" }} type="email" id="registerEmail" className="form-control" name="email" placeholder="Enter e-mail" required
                                onChange={handleOnChange} value={text2} />
                        </div>

                        {/* <!-- Phone input --> */}
                        <label className="form-label" for="registerPhone">Phone</label>
                        <div className="form-outline mb-4">
                            <input style={{ border: "1px solid gray" }} type="number" id="registerPhone" className="form-control" name="phone" placeholder="Enter Phone" required
                                onChange={handleOnChange} value={text5} />
                        </div>

                        {/* <!-- Phone input --> */}
                        <label className="form-label" for="registerProfession">Profession</label>
                        <div className="form-outline mb-4">
                            <input style={{ border: "1px solid gray" }} type="text" id="registerProfession" className="form-control" name="profession" placeholder="Enter Profession" required
                                onChange={handleOnChange} value={text6} />
                        </div>

                        {/* <!-- Password input --> */}
                        <label className="form-label" for="registerPassword">Password</label>
                        <div className="form-outline mb-4">
                            <input style={{ border: "1px solid gray" }} type="password" id="registerPassword" className="form-control" name="password" placeholder="Enter Password" required
                                onChange={handleOnChange} value={text1} />
                        </div>

                        {/* <!-- Repeat Password input --> */}
                        <label className="form-label" for="registerRepeatPassword">Repeat password</label>
                        <div className="form-outline mb-4">
                            <input style={{ border: "1px solid gray" }} type="password" id="registerRepeatPassword" className="form-control" name="cpassword" placeholder="Re-enter Password" required
                                onChange={handleOnChange} value={text3} />
                        </div>

                        {/* <!-- Checkbox --> */}
                        <div className="form-check d-flex justify-content-center mb-4">
                            <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
                                aria-describedby="registerCheckHelpText" />
                            <label className="form-check-label" for="registerCheck">
                                I have read and agree to the terms
                            </label>
                        </div>

                        {/* <!-- Submit button --> */}
                        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <button disabled={credentials.email.length === 0 || credentials.password.length === 0} style={{ width: "28%" }} type="submit" className="btn btn-primary btn-block mb-4">Sign up</button>
                        </div>


                    </form>
                </div>

            </div>
            {/* <!-- Pills content --> */}

        </div>
    )
}
