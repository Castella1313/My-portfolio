import React, {useEffect} from "react"

import "./styles/hobbies.css"
import Aos from "aos"
import "aos/dist/aos.css";
function Hobbies(){
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
    return(
        <div className="hobbies">
            <h1 className="title1">Hobbies</h1>
            <div className="hobby-name">
                <div className="right-col">
                    <h1>Cooking</h1>
                    <div>
                        I just love cooking. I'm a big foodie. 
                        I can make a lot of tasty dishes :).
                        Cooking just helps me to feel good whenever I'm 
                        sad or stressed. Cooking is just like a pain reliever 
                        for me and for my stomach too :).
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className="hobby-name">
           
                <div className="right-col">
                    <h1>Playing Badminton</h1>
                    <div>
                        It's not like I always do, but definitely I would
                        love to play if I get someone to play with.
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className="hobby-name">
           
                <div className="right-col">
                    <h1>Listening to Songs</h1>
                    <div>
                        This is the most important part of my life, I can
                        keep Listening to songs all day without feeling bored even
                         for a single second.
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className="hobby-name">
            
                <div className="right-col">
                    <h1>Painting</h1>
                    <div>
                        I just love doing paintings, whenever I have headache or stressed
                        I just draw something and it just makes me forget everything else.
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hobbies