import {Route} from "react-router-dom";
import Header from "./components/Header"
import "./styles/App.scss"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Projects from "./pages/Projects";
import FlexLayout from "./components/FlexLayout"
import Resume from "./pages/Resume"
import { Switch } from "react-router-dom"
import { useState } from "react";
import framer from "./animations/animations"

console.log('%cApp.js line:13 animations', 'color: #007acc;', framer);

function App() {
  let [animationState] = useState({...framer})


  return (
    <div  className="main-background">
    <Header {...animationState} />
    <FlexLayout>
      <Switch>
        <Route exact path="/">
          <Home  {...animationState} />
        </Route>
        <Route path="/resume">
          <Resume/>
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
    </FlexLayout>
    <Footer />
    </div>
  );
}

export default App;
