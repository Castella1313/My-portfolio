import React, {useEffect} from "react"
import "./styles/mywork.css"
import Aos from "aos"
import "aos/dist/aos.css";

const details = [{
    name:"Blogging Website",
    detail:"using HTML, CSS, Bootstrap",
    link:""
},
{
    name:"Weather App",
    detail:"using HTML, CSS, NodeJs",
    link:""
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
            <h1 className="title">My Work</h1>
            <center>
            <div >
            {card}
        </div>
        </center>
        </div>
    )
}
export default Mywork