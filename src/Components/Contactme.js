import React, {useEffect} from "react"
import whatsapp from "./Images/Whatsapp.png"
import github from "./Images/Github.png"
import mail from "./Images/Mail.png"
import linkedin from "./Images/Linkedin.png"
import "./styles/contactme.css"
import Aos from "aos"
import "aos/dist/aos.css";
function Contactme(){
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
    return(
       <div>
            <h1 className="title">Contact me</h1>
        <div  className="contactme">
            
                <div className="icons">
                    <a href="mailto: simrangoyu@gmail.com"><img src={mail} alt="mail" /></a>
                </div>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/simran-bhardwaj-46927218b/"><img src={linkedin} alt="linkedin" /></a>
                </div>
                <div className="icons">
                    <a href="whatsapp://send?abid=7505576197&text=Hey!%20I%20got%20your%20number%20your%20portfolio"><img src={whatsapp} alt="whatsapp" /></a>
                </div>
                <div className="icons">
                    <a href="https://github.com/Castella1313"><img src={github} alt="github" /></a>
                </div>
        </div>
       </div>
    )
}

export default Contactme