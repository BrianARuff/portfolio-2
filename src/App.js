import {Route} from "react-router-dom";
import Header from "./components/Header"
import "./styles/App.scss"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Projects from "./pages/Projects";
import FlexLayout from "./components/FlexLayout"
import Resume from "./pages/Resume"
import { Switch } from "react-router-dom"

function App() {
  return (
    <div  className="main-background">
    <Header />
    <FlexLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume}/>
        <Route path="/projects" component={Projects}/>
      </Switch>
    </FlexLayout>
    <Footer />
    </div>
  );
}

export default App;
