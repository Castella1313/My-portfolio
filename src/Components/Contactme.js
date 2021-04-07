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
       <div className="contactme">
            
        <div  >
        <h1 className="title1">Contact me</h1>
                <center>
                <div data-aos="fade-up" className="icons">
                    <a href="mailto: simrangoyu@gmail.com"><img src={mail} alt="mail" /></a>
                </div>
                <div data-aos="fade-up" className="icons">
                    <a href="https://www.linkedin.com/in/simran-bhardwaj-46927218b/"><img src={linkedin} alt="linkedin" /></a>
                </div>
                <div data-aos="fade-up" className="icons">
                    <a href="https://wa.me/7505576197?text=Hey!!%20I%20got%20your%20number%20from%20your%20portfolio"><img src={whatsapp} alt="whatsapp" /></a>
                </div>
                <div data-aos="fade-up" className="icons">
                    <a href="https://github.com/Castella1313"><img src={github} alt="github" /></a>
                </div>
                </center>
        </div>
       </div>
    )
}

export default Contactme