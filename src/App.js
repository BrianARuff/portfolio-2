import {Route} from "react-router-dom";
import Header from "./components/Header"
import "./styles/App.scss"
import Body from "./components/Body"
import Footer from "./components/Footer"
import FlexLayout from "./components/FlexLayout"

function App() {
  return (
    <div className="main-background">
    <Header />
    <Route path="/" render={(props) => {
      return (
        <FlexLayout {...props}>
          <Body />
        </FlexLayout>
      )
    }}></Route>
    <Footer />
    </div>
  );
}

export default App;
