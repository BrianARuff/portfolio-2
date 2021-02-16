import {Route} from "react-router-dom";
import { Switch } from "react-router-dom"
import { useState, lazy, Suspense } from "react";

import framer from "./animations/animations"
import "./styles/App.scss"

import Header from "./components/Header"
import Footer from "./components/Footer"
import FlexLayout from "./components/FlexLayout"
import Loader from "./components/Loader"

const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"))
const Resume = lazy(() => import("./pages/Resume"))
const ErrorBoundary = lazy(() => import("./components/ErrorBoundary"))

function App() {
  let [animationState] = useState({...framer})


  return (
    <div  className="main-background">
    <Header animations={animationState} />
    <FlexLayout>
      <Switch>
        <Route exact path="/">
            <Suspense fallback={<Loader />}>
              <ErrorBoundary>
                <Home animations={animationState} />
              </ErrorBoundary>
            </Suspense>
        </Route>
        <Route path="/resume">
            <Suspense fallback={<Loader />}>
              <ErrorBoundary>
                <Resume />
              </ErrorBoundary>
              
            </Suspense>
        </Route>
        <Route path="/projects">
            <Suspense fallback={<Loader />}>
                <ErrorBoundary>
                  <Projects />
                </ErrorBoundary>              
            </Suspense>
        </Route>
      </Switch>
    </FlexLayout>
    <Footer />
    </div>
  );
}

export default App;
