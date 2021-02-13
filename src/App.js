import {Route} from "react-router-dom";
import Header from "./components/Header"
import "./styles/App.scss"
import Home from "./components/Home"
import Footer from "./components/Footer"
import FlexLayout from "./components/FlexLayout"
import About from "./pages/About"
import Resume from "./pages/Resume"
import {Switch} from "react-router-dom"

function App() {
  return (
    <div  className="main-background">
    <Header />
    <FlexLayout>
      <Switch>
        <Route exact path="/" render={(props) => {
          return (
            
              <Home {...props} />
            
          )
        }}></Route>
        <Route path="/about-me" render={(props) => {
          return (
        
              <About {...props} />
          
          )
        }}></Route>
        <Route path="/resume" render={(props) => {
          return (
            <Resume {...props} />
          )
        }}></Route>
      </Switch>

    </FlexLayout>
    <Footer />
    </div>
  );
}

export default App;
