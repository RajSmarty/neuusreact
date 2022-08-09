import { React, useContext, useEffect, useState } from 'react'
import { useSpeechSynthesis } from 'react-speech-kit';
import codeContext from "../context/codes/codeContext"



const NewsItemReader = (props) => {

    let speech = document.getElementById("speech");

    const [text, setText] = useState('');
    const { speak, cancel } = useSpeechSynthesis();


    const handleOnClick = () => {
        setText("India vs West Indies Live Cricket Score, 1st ODI Match Updates: West Indies skipper Nicholas Pooran won the toss and elected to field against India, who are without star all-rounder Ravindra Jadeja. The senior player has been ruled out of first two ODIs after sustaining a knee injury. Pooran informed that all-rounder Jason Holder is down with Covid-19 and will miss out, while Kyle Mayers was included in the eleven. For India, Sanju Samson and Shreyas Iyer made it to the playing XI. India may be going into the three-match ODI series against the West Indies with essentially a team of reserves but they remain the outright favourites to win it. Fresh from a 2-1 series triumph in England, the Indians have opted to rest regular captain Rohit Sharma, key batsman Virat Kohli, wicketkeeper Rishabh Pant, all-rounder Hardik Pandya and pace spearhead Jasprit Bumrah for this assignment. The stars' absence has presented an opportunity for eager fringe players to shine at the expense of a team that was swept 3-0 by Bangladesh in Guyana last week.");
        speak({ text: text })
    }

    const handlePause = () => {
        cancel({ text: "" });
    }


    // let { title, description, imageUrl, newsUrl, author, date, source, content } = props;
    let { title, imageUrl, newsUrl, author, date, source, content, publishedAt } = props;

    useEffect(() => {
        if (localStorage.getItem("token")) {

            getCodes()
        }

        // eslint-disable-next-line
    }, [])

    // CONTEXT API LOGIC
    const context = useContext(codeContext);

    const { codes, getCodes } = context;


    return (
        <div className="my-3">




            {/* <Container>
      <Segment> */}
            {/* <textarea className="textAreaStyle" onChange={(e)=>{setText(e.target.value)}}></textarea> */}
            <div style={{ display: "flex", justifyContent: "end", alignItems: "center", width: "100%" }}>
                <button style={{ width: "12%" }} className="btn btn-primary mx-1 mb-2" >Listen News</button>
                <img onClick={() => { handleOnClick() }} alt="" className='hoverHamburger' style={{ height: "25px", marginBottom: "10px", cursor: "pointer", borderRadius: "50%" }} src="https://img.icons8.com/office/16/000000/speaker.png" />
                <img onClick={() => { handlePause() }} alt="" className='hoverHamburger mx-2' style={{ height: "25px", marginBottom: "10px", cursor: "pointer", borderRadius: "50%" }} src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/000000/external-stop-music-and-song-xnimrodx-lineal-gradient-xnimrodx.png" />

                {/* <button style={{width:"10%"}} className="btn btn-primary mx-1" onClick={() => { handlePause() }}>Pause</button>
                <button style={{width:"10%"}} className="btn btn-primary mx-1" onClick={() => { handlePause() }}>Pause</button> */}
            </div>

            {/* </Segment>
    </Container> */}


            <div className="card" style={{ cursor: "pointer", borderRadius: "1rem", boxShadow: "1px 1px 10px #e3e3e3" }}>
                <span style={{ color: "black", fontSize: "2rem" }} className="badge rounded-pill"> {source} </span>

                {/* <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }
                }>
                    <span className="badge rounded-pill bg-danger"> {source} </span>
                </div> */}

                <div className="card-body" style={{ display: "", width: "100%" }}>
                    <a rel="noreferrer" href={newsUrl} style={{ textDecoration: "none" }}>
                        <div style={{ width: "100%" }}>
                            <h5 className="card-title" style={{ color: "black" }}>{title}  </h5>
                            {/* <p className="card-text">{description}</p> */}
                            {/* <p style={{backgroundColor:"red"}} className="card-text">{publishedAt}</p> */}


                            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                            {/* <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a> */}
                        </div>
                    </a>
                    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                        <img style={{ height: "7em", width: "25rem" }} src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
                    </div>

                    <p style={{ color: "gray", marginBottom: "4rem" }} className="card-text">{content}</p>
                    <p onChange={(e) => { setText(e.target.value) }}>
                    India vs West Indies Live Cricket Score, 1st ODI Match Updates: West Indies skipper Nicholas Pooran won the toss and elected to field against India, who are without star all-rounder Ravindra Jadeja. The senior player has been ruled out of first two ODIs after sustaining a knee injury. Pooran informed that all-rounder Jason Holder is down with Covid-19 and will miss out, while Kyle Mayers was included in the eleven. For India, Sanju Samson and Shreyas Iyer made it to the playing XI. India may be going into the three-match ODI series against the West Indies with essentially a team of reserves but they remain the outright favourites to win it. Fresh from a 2-1 series triumph in England, the Indians have opted to rest regular captain Rohit Sharma, key batsman Virat Kohli, wicketkeeper Rishabh Pant, all-rounder Hardik Pandya and pace spearhead Jasprit Bumrah for this assignment. The stars' absence has presented an opportunity for eager fringe players to shine at the expense of a team that was swept 3-0 by Bangladesh in Guyana last week. 
                    </p>

                    <p>
                        Soon after proceedings resumed in the Lok Sabha at 2 pm, Opposition members again carried posters of ‘Gabbar Singh strikes again’ into the Well of the House to protest against the GST rates. Following this, the Lower House was adjourned till 4 pm. The Rajya Sabha, meanwhile, has adjourned till 11 am on July 21, amid Opposition protest.

                        Several Opposition MPs, including Congress leader Rahul Gandhi, staged a protest at the Gandhi statue in the Parliament complex carrying packets of milk, curd, and other food items. Hitting out at Gandhi, Union Minister Smriti Irani said, “His political life has been spent disrespecting parliamentary traditions. Now he is dedicating himself to ensuring that parliamentary proceedings and debates do not take place.” She added, “He may be unproductive politically but he should not dare to continuously curb Parliament’s productivity.”

                        Meanwhile, sprinter P T Usha took the oath in the Rajya Sabha on Wednesday. She was nominated to the Upper House last week.

                        Soon after proceedings resumed in the Lok Sabha at 2 pm, Opposition members again carried posters of ‘Gabbar Singh strikes again’ into the Well of the House to protest against the GST rates. Following this, the Lower House was adjourned till 4 pm. The Rajya Sabha, meanwhile, has adjourned till 11 am on July 21, amid Opposition protest.

                        Several Opposition MPs, including Congress leader Rahul Gandhi, staged a protest at the Gandhi statue in the Parliament complex carrying packets of milk, curd, and other food items. Hitting out at Gandhi, Union Minister Smriti Irani said, “His political life has been spent disrespecting parliamentary traditions. Now he is dedicating himself to ensuring that parliamentary proceedings and debates do not take place.” She added, “He may be unproductive politically but he should not dare to continuously curb Parliament’s productivity.”

                        Soon after proceedings resumed in the Lok Sabha at 2 pm, Opposition members again carried posters of ‘Gabbar Singh strikes again’ into the Well of the House to protest against the GST rates. Following this, the Lower House was adjourned till 4 pm. The Rajya Sabha, meanwhile, has adjourned till 11 am on July 21, amid Opposition protest.

                        Several Opposition MPs, including Congress leader Rahul Gandhi, staged a protest at the Gandhi statue in the Parliament complex carrying packets of milk, curd, and other food items. Hitting out at Gandhi, Union Minister Smriti Irani said, “His political life has been spent disrespecting parliamentary traditions. Now he is dedicating himself to ensuring that parliamentary proceedings and debates do not take place.” She added, “He may be unproductive politically but he should not dare to continuously curb Parliament’s productivity.”

                        Soon after proceedings resumed in the Lok Sabha at 2 pm, Opposition members again carried posters of ‘Gabbar Singh strikes again’ into the Well of the House to protest against the GST rates. Following this, the Lower House was adjourned till 4 pm. The Rajya Sabha, meanwhile, has adjourned till 11 am on July 21, amid Opposition protest.

                        Several Opposition MPs, including Congress leader Rahul Gandhi, staged a protest at the Gandhi statue in the Parliament complex carrying packets of milk, curd, and other food items. Hitting out at Gandhi, Union Minister Smriti Irani said, “His political life has been spent disrespecting parliamentary traditions. Now he is dedicating himself to ensuring that parliamentary proceedings and debates do not take place.” She added, “He may be unproductive politically but he should not dare to continuously curb Parliament’s productivity.”</p>


                </div>
                <div style={{ height: "500vh" }}></div>

            </div>
        </div>
    )

}

export default NewsItemReader
