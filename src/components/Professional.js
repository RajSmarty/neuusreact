import React, { useEffect, useState } from 'react'
import NewsItemPro from './NewsItemPro'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import AccessDenied from './AccessDenied';
import searchIcon from "../images/search.png"
import { Link, useHistory } from 'react-router-dom';

const Professional = (props) => {

    let history = useHistory();

    // Logout Logic 
    const handleLogout = () => {
        localStorage.removeItem("token");
        setTimeout(() => {
            history.push("/login")
        }, 1000);
    }

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    // const updateSearchResults = async () => {
    //     props.setProgress(10);
    //     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}q=${}`;
    //     setLoading(true)
    //     let data = await fetch(url);
    //     props.setProgress(30);
    //     let parsedData = await data.json()
    //     props.setProgress(70);
    //     setArticles(parsedData.articles)
    //     setTotalResults(parsedData.totalResults)
    //     setLoading(false)
    //     props.setProgress(100);
    // }

    useEffect(() => {
        if (props.category === "health") {
            document.title = `${capitalizeFirstLetter("Professional")} - neuus`;
            updateNews();
            // eslint-disable-next-line

        } else {

            document.title = `${capitalizeFirstLetter(props.category)} - neuus`;
            updateNews();
            // eslint-disable-next-line
        }
    }, [])



    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f4874928fd994ad5b64b9bfe98a1164a&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    };

    return (
        <>
            {
                localStorage.getItem("token") ?
                    <div>
                        <div style={{ height: "100vh" }}>
                            <div className='container' style={{ textDecoration: "none", height: "90.2%", width: "100%" }}>
                                {/* <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1> */}
                                <div style={{ display: "flex", flexDirection: "column", marginTop: "1rem" }}>
                                    <div>
                                        {/* -------------------Company Logo Starts-------------->>>>>>>>>>>>>>>>>>>>>>> */}
                                        <div style={{ display: "flex" }}>
                                            <div style={{ border: "0px solid red", width: "70%" }}>
                                                <h1 style={{ letterSpacing: "-4px", fontSize: "3em", height: "37px" }} className='logopara'>neuus<span className="dot"></span>
                                                </h1>
                                            </div>
                                            {/* First Search Box */}
                                            <div className='mquery1 mx-4' style={{ border: "0px solid red", width: "28.5%" }}>
                                                <div style={{ display: "flex", justifyContent: "end", alignItems: "center", marginTop: "15px", border: "1px solid gray", borderRadius: "6px" }}>
                                                    <input className='text-right' style={{ border: "0px solid gray", backgroundColor: "transparent", padding: "5px 50px" }} type="text" placeholder='Search' />
                                                    <button style={{ backgroundColor: "transparent", border: "0px solid gray" }}><img alt='' style={{ height: "1.2em", }} src={searchIcon} /></button>
                                                    

                                                </div>
                                            </div>

                                            {/* Interest Search Box */}
                                            <div className='mquery1' style={{ border: "0px solid red", width: "18.5%" }}>
                                                <div style={{ display: "flex", justifyContent: "end", alignItems: "center", marginTop: "15px", border: "1px solid gray", borderRadius: "15px" }}>
                                                    <input className='text-center' style={{ border: "0px solid gray", backgroundColor: "transparent", padding: "5px 1px" }} type="text" placeholder='Interests' />
                                                    {/* <button style={{ backgroundColor: "transparent", border: "0px solid gray" }}><img alt='' style={{ height: "1.2em", }} src={searchIcon} /></button> */}
                                                    

                                                </div>
                                            </div>
                                        </div>
                                        <span style={{ fontSize: "1em", marginLeft: "0rem", fontWeight: "bold" }}>See what's trending from around the world.</span>
                                        {/* <<<<<<<<<<<<<<<<<<<<<<Company Logo Ends------------------------------------*/}
                                    </div>
                                </div>

                                {/* Second Search Box */}
                                <div className='mquery2' style={{ border: "0px solid red", width: "100%" }}>
                                    <div style={{ display: "flex", justifyContent: "end", alignItems: "center", marginTop: "15px", border: "1px solid #bdbdbd", borderRadius: "20px" }}>
                                        <input style={{ border: "0px solid gray", backgroundColor: "transparent", padding: "8px 50px" }} type="text" />
                                        <button style={{ backgroundColor: "transparent", border: "0px solid gray" }}><img alt='' style={{ height: "1.2em", }} src={searchIcon} /></button>

                                    </div>
                                </div>


                                <div style={{ marginTop: "2.5em", display: "flex" }}>
                                    
                                    <p className='text-center categoryUnderline' style={{ width: "50%", marginTop: "8px", fontSize: "1.5rem", fontWeight: "bold", cursor: "pointer", }}>
                                    <Link to="/news" style={{color:"black"}}><p style={{ borderRight: "1px solid rgb(149 146 159 / 32%)" }}> My neuus</p></Link>
                                    </p>
                                    
                                    <p className='text-center categoryUnderline' style={{ width: "50%", marginTop: "8px", fontSize: "1.5rem", fontWeight: "bold", cursor: "pointer", }}>
                                    <Link to="/trending" style={{color:"black"}}><p style={{ borderRight: "1px solid rgb(149 146 159 / 32%)" }}>Trending</p></Link>
                                    </p>
                                    
                                    <p className='text-center categoryUnderline' style={{ width: "50%", marginTop: "8px", fontSize: "1.5rem", fontWeight: "bold", cursor: "pointer",borderBottom:"2px solid #00b0e6"  }}>
                                    <Link to="/pro" style={{color:"#f0054b"}}><p>Professional</p></Link>
                                    </p>
                                </div>
                                {/* <hr /> */}
                                <div style={{ margin: '35px 0px', marginTop: '0px' }}></div>
                                {loading && <Spinner />}
                                <InfiniteScroll
                                    dataLength={articles.length}
                                    next={fetchMoreData}
                                    hasMore={articles.length !== totalResults}
                                    loader={<Spinner />}
                                >
                                    <div className="container">

                                        <Link to="/reader">
                                            <div className="row">
                                                {articles.map((element) => {
                                                    return <div className="col-md-4" key={element.url}>
                                                        <NewsItemPro title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                                    </div>
                                                })}
                                            </div>
                                        </Link>
                                    </div>
                                </InfiniteScroll>
                            </div>

                            <div style={{ height: "8%", width: "100%", position: "fixed", backgroundColor: "white", display: "flex", borderTop: "1px solid rgb(149 146 159 / 32%)" }}>

                                <div style={{ width: "33%", display: "flex", justifyContent: "center" }}>
                                    <Link to="/news"><img className='hoverHamburger' style={{ height: "25px", marginTop: "8px", cursor: "pointer", borderRadius: "50%" }} alt="" src="https://img.icons8.com/ios/50/undefined/menu--v1.png" /></Link>
                                    <i className="fa-solid fa-bars-sort"></i>
                                </div>


                                <div style={{ width: "33%", display: "flex", justifyContent: "center" }}>
                                    <img alt="" className='hoverHamburger' style={{ height: "25px", width: "30px", marginTop: "8px", cursor: "pointer", borderRadius: "50%" }} src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/undefined/external-bookmark-multimedia-kiranshastry-lineal-kiranshastry.png" />
                                </div>


                                <div style={{ width: "33%", display: "flex", justifyContent: "center" }}>

                                    <div className="dropdown">
                                        <button className="" type="" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{ height: "2.4rem", marginTop: "8px", cursor: "pointer", borderRadius: "50%", border: "0px solid white", backgroundColor: "transparent" }}>
                                            <img alt="" className='hoverHamburger' style={{ height: "25px", marginBottom: "10px", cursor: "pointer", borderRadius: "50%" }} src="https://img.icons8.com/ios-glyphs/30/undefined/menu-2.png" />
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                                            <li><Link className="dropdown-item" to="/profiledesc">Settings</Link></li>
                                            <li style={{ cursor: "pointer" }} onClick={handleLogout} className="dropdown-item">Logout</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : <AccessDenied />}
        </>
    )

}


Professional.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

Professional.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default Professional
