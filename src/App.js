import './Components/styles/nav.css';
import Nav from "./Components/Nav"
import Home from "./Components/Home"
import Education from "./Components/Education"
import Organisations from "./Components/Organisations"
import Mywork from "./Components/Mywork"
import Hobbies from "./Components/Hobbies"
import Contactme from "./Components/Contactme"
import Skills from "./Components/Skills"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
function App() {
  return (
    <Router>
      <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/Education" component={Education}></Route>
        <Route path="/Organisations" component={Organisations}></Route>
        <Route path="/Skills" component={Skills}></Route>
        <Route path="/Mywork" component={Mywork}></Route>
        <Route path="/Hobbies" component={Hobbies}></Route>
        <Route path="/Contactme" component={Contactme}></Route>
      </Switch>
    

      </div>
    </Router>
  )
};

export default App;
