import React, {useEffect} from "react"
import "./styles/organisations.css"
import Aos from "aos"
import "aos/dist/aos.css";
const details = [{
        name:"CORE TEAM MEMBER AT GOOGLE DEVELOPER STUDENT CLUB ",
        date:"Web Developer coordinator | September 2020 - present",
        about:"I  conducted a workshop on GIt & Github in the month of October. Got 3 students learned, how to create their first PR. Also I have taught approx 7 students the basic HTML, CSS, JavaScript "
},
{
    name:"MENTEE AT GIRLSCRIPT SUMMER OF CODE ",
    date:"Open source |March 2021 - May 2021",
    about:"Contributing in GirlScript-Community-Website "
},
{
    name:"MENTEE AT JIIT MONTH OF CODE",
    date:"Open source | Dec 2019 - Jan 2020",
    about:"I was among the top 10 performers. "
}]
const card = details.map((data)=>{
    return(
        <div data-aos="fade-up" className="card3">
            <div className="name">{data.name}</div>
            <div className="date">{data.date}</div>
            <div className="about">{data.about}</div>
        </div>
        )
}

)

function Organisations(){
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
    return(
        <div className="organisations">
            <h1 className="title">Organisations</h1>
            <div >
            {card}
        </div>
        </div>
    )
}
export default Organisations