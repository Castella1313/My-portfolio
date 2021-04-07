import React, {useEffect} from "react"
import "./styles/skills.css"
import "./styles/hobbies.css"
import Aos from "aos"
function Skills(){
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
    
    return(
       <center>
            <div className="skills">
                <h1>Skills</h1>
            <div data-aos="fade-up" className="skill">C</div>
            <div data-aos="fade-up" className="skill">C++</div>
            <div data-aos="fade-up" className="skill">Python</div>
            <div data-aos="fade-up" className="skill">HTML</div>
            <div data-aos="fade-up" className="skill">CSS</div>
            <div data-aos="fade-up" className="skill">JavaScript</div>
            <div data-aos="fade-up" className="skill">Node js</div>
            <div data-aos="fade-up" className="skill">React js</div>
            <div data-aos="fade-up" className="skill">Bootstrap</div>
            <div data-aos="fade-up" className="skill">Jquery</div>
            <div data-aos="fade-up" className="skill">Canva</div>
            <div data-aos="fade-up" className="skill">Figma</div>
        </div>
       </center>
    )
}
export default Skills