import { React, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import codeContext from "../context/codes/codeContext"


const NewsItemPro = (props) => {
    let history = useHistory();

    // let { title, description, imageUrl, newsUrl, author, date, source } = props;
    let { title, imageUrl, newsUrl, author, date, source } = props;

    useEffect(() => {
        if (localStorage.getItem("token")) {

            getCodes()
        }

        // eslint-disable-next-line
    }, [])

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

    // CONTEXT API LOGIC
    const context = useContext(codeContext);

    const { codes, getCodes, json, getUserDetails } = context;




    return (
        <div className="my-3">
            <div className="card" style={{ cursor: "pointer", borderRadius: "3%", boxShadow: "1px 1px 10px #e3e3e3" }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }
                }>
                    {/* <span style={{backgroundColor:"green"}} className="badge rounded-pill "> {source} </span> */}
                    {/* <section key={jsonobj._id} jsonobj={jsonobj}> */}
                        <span style={{ backgroundColor: "green" }} className="badge rounded-pill "> 
                        {json.map((jsonobj) => {
                                            return (
                                                <>
                                                    <span key={jsonobj._id} jsonobj={jsonobj}>
                                                        <span>{jsonobj.profession}</span>
                                                    </span>
                                                </>
                                            )
                                        })}
                         </span>
                    {/* </section> */}
                </div>

                <div className="card-body" style={{ display: "flex", width: "100%", height: "14rem" }}>
                    <a rel="noreferrer" href={newsUrl} style={{ textDecoration: "none" }}>
                        <div style={{ width: "100%" }}>
                            <h5 className="card-title latoFont" style={{ color: "black", marginRight: "0.5px" }}>{title}  </h5>
                            {/* <p className="card-text">{description}</p> */}
                            {/* <p className="card-text latoFont"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p> */}
                            {/* <p className="card-text latoFont"><small className="text-muted">On  {new Date(date).toGMTString()}</small></p> */}
                            {/* <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a> */}
                        </div>
                    </a>
                    <div style={{ width: "100%" }}>
                        <img style={{ height: "100px", width: "7rem", }} src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default NewsItemPro
