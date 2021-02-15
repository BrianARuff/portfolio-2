import {Route} from "react-router-dom";
import Header from "./components/Header"
import "./styles/App.scss"
import Footer from "./components/Footer"
import Projects from "./pages/Projects";
import FlexLayout from "./components/FlexLayout"
import Resume from "./pages/Resume"
import { Switch } from "react-router-dom"
import { useState, lazy, Suspense } from "react";
import framer from "./animations/animations"
import ErrorBoundary from "./components/ErrorBoundary"
import Loader from "./components/Loader"

const Home = lazy(() => import("./pages/Home"));

function App() {
  let [animationState] = useState({...framer})


  return (
    <div  className="main-background">
    <Header {...animationState} />
    <FlexLayout>
      <Switch>
        <Route exact path="/">
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <Home  {...animationState} />
            </Suspense>
          </ErrorBoundary>   
        </Route>
        <Route path="/resume">
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <Resume  {...animationState} />
            </Suspense>
          </ErrorBoundary>
        </Route>
        <Route path="/projects">
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <Projects  {...animationState} />
            </Suspense>
          </ErrorBoundary>
        </Route>
      </Switch>
    </FlexLayout>
    <Footer />
    </div>
  );
}

export default App;
