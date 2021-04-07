import React, {useEffect} from "react"
import "./styles/home.css";
import Aos from "aos"
import "aos/dist/aos.css";
import image from "./Images/profile-interface/rafiki.png"
function Home(){
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])

    return(
        <div className="home">
          <center>
          <div data-aos="fade-up" className="intro">
                <h1>Heyy</h1>
                <p>I'm Simran!!</p><br></br>
                <p>Nice to see you :)</p><br></br>
                <p>I believe in developing the best user interface designs and developing magnificant websites.</p><br></br>
            </div>
          </center>
            <center>
            <div>
                <img className="image" src={image} alt="images"></img>
            </div>
            </center>
        </div>
    )

}
export default Home