import {Route} from "react-router-dom";
import Header from "./components/Header"
import "./styles/App.scss"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Projects from "./pages/Projects";
import FlexLayout from "./components/FlexLayout"
import Resume from "./pages/Resume"
import { Switch } from "react-router-dom"
import { useState, useEffect } from "react";
import framer from "./animations/animations"

function App() {
  let [animationState] = useState({...framer})
  let [reposState, setReposState] = useState({});

  useEffect(() => {
    fetch("https://api.github.com/users/brianaruff/repos", {
      headers: {
        "Authorization": process.env.gitHubAccessToken
      }
    })
    .then(r => r.json() )
    .then(d => setReposState(d))
    .catch(e => console.log(e))
  }, [])

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
          <Projects {...reposState} />
        </Route>
      </Switch>
    </FlexLayout>
    <Footer />
    </div>
  );
}

export default App;
