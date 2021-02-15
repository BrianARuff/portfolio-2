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
import * as animations from "./animations/animations"

function App() {
  let [animationState, setAnimationState] = useState({animations})
  
  setAnimationState = (variant) => {
    return ({...animationState, ...variant})
  }

  return (
    <div  className="main-background">
    <Header />
    <FlexLayout>
      <Switch>
        <Route exact path="/">
          <Home animation={animationState} handleSetAnimationState={setAnimationState} />
        </Route>
        <Route path="/resume" component={<Resume />}></Route>>
        <Route path="/projects" component={<Projects />}></Route>
      </Switch>
    </FlexLayout>
    <Footer />
    </div>
  );
}

export default App;
