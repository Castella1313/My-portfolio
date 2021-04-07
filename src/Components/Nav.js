import React, {useState} from "react"
import {Link} from "react-router-dom"
function Nav(){
    const style={
        color:"white",
        textDecoration:"none",
        margin:0
    };
    const [isActive, setActive] = useState("true");
    const onclickk = () =>{
        setActive(!isActive);
    }
return(
    <div className="navv">
        <nav>
        <div className="hamburger" onClick={onclickk}>
            <div className={isActive?"line" : "line trans1"}></div>
            <div className={isActive?"line" : "none"}></div>
            <div className={isActive?"line" : "line trans2"}></div>
        </div>
        <h1 className="logo">Simran Bhardwaj</h1>
        <ul className={isActive ? "none" : "nav-items"}>
            <Link style={style} to="/">
            <li>Home</li>
            </Link>
            <Link style={style} to="/Education">
            <li>Education</li>
            </Link>
            <Link style={style} to="/Organisations">
            <li>Organisations</li>
            </Link>
            <Link style={style} to="/Skills">
            <li>Skills</li>
            </Link>
            <Link style={style} to="/Mywork">
            <li>Mywork</li>
            </Link>
            <Link style={style} to="/Hobbies">
            <li>Hobbies</li>
            </Link>
            <Link style={style} to="/Contactme">
            <li>Contactme</li>
            </Link>
        </ul>
    </nav>
    </div>
)
}
export default Nav