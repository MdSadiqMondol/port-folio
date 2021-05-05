import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./component/About/About/About";
import Home from "./component/Home/Home/Home";
import ContactMe from './component/Contact/ContactMe/ContactMe'
import MyProjects from "./component/Project/MyProjects/MyProjects";
import Blog from "./component/Blog/Blog";


function App() {
  return (
    <Router> 
        <Switch>
          <Route path="/about">
           <About/>
          </Route>
          <Route path="/myProjects">
           <MyProjects/>
          </Route>
          <Route path="/blog">
           <Blog/>
          </Route>
          <Route path="/contact">
            <ContactMe/>
          </Route>
          <Route path="/home">
           <Home/>
          </Route>
          <Route exact path="/">
           <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
