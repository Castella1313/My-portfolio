import React, {useEffect} from "react"
import "./styles/education.css"
import Aos from "aos"
import "aos/dist/aos.css";
const details = [{
        instname:"JAYPEE INSTITUTE OF INFORMATION TECHNOLOGY, NOIDA",
        field:"BACHELOR OF TECHNOLOGY| AUGUEST 2019 -  AUGUST 2023",
        stream:"B.TECH in Computer Science",
        cgpa : "9.3 cgpa",
        
},
{
    instname:"Renaissance school, bulandshahr",
    field:"AISSCE | APRIL 2018 - MARCH 2019",
    stream:"Science with computer science ",
    cgpa:"93.4%"

},
{
    instname:"Renaissance school, bulandshahr",
    field:"AISSC | APRIL 2016 - MARCH 2017",
    stream:"Science with computer science ",
    cgpa:"10 cgpa"
}
]

const card = details.map((data)=>{
    return(
        <div data-aos="fade-up" className="card1">
            <div className="instname">{data.instname}</div>
            <div className="field">{data.field}</div>
            <div className="stream">{data.stream}</div>
            <div className="cgpa">{data.cgpa}</div>
        </div>
        )
}

)

function Education(){
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
    return(
        <div className="education" >
            <h1 className="title1">Education</h1>
        <div >
            
            {card}
        </div>
        </div>
    )
}

export default Education