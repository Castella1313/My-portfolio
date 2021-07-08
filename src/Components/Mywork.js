import React, {useEffect} from "react"
import "./styles/mywork.css"
import Aos from "aos"
import "aos/dist/aos.css";
const details = [{
    name:"Blogging Website",
    detail:"using HTML, CSS, Bootstrap",
    link:"https://funbee.netlify.app"
},
{
    name:"Weather App",
    detail:"using HTML, CSS, NodeJs",
    link:"https://github.com/Castella1313/Weather-App-Node-js-"
},
{
    name:"Graphic Designs",
    detail:"using Canva and Figma",
    link:"https://drive.google.com/drive/folders/1RzL__M0aN3xhF1bBhodwJ1e04TON8CGp?usp=sharing"
},
{
    name:"My Resume",
    detail:"using resume template",
    link:"https://drive.google.com/file/d/1t2Eoj02L8oCG_I1ZIB-0dHeDWnaco11W/view?usp=sharing"
}
]
const card = details.map((data)=>{
    return(
        <div data-aos="fade-up" className="card2">
            <div className="name">{data.name}</div>
            <div className="detail">{data.detail}</div>
            <a href={data.link}><button>Check here</button></a>
        </div>
        )
}

)
function Mywork(){
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
    return(
        <div className="mywork">
            <h1 className="title1">My Work</h1>
            <center>
            <div >
            {card}
        </div>
        </center>
        </div>
    )
}
export default Mywork
