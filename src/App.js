import {
  BrowserRouter as Router,
 
 
} from "react-router-dom";
import './App.css';
import ActivityPart from "./Components/Home/ActivityPart/ActivityPart";
import Footer from "./Components/Home/Footer/Footer";
import GetLink from "./Components/Home/GetLink/GetLink";
import Header from "./Components/Home/Header/Header";

function App() {
  return (
    <div >
      <Router>
        <Header></Header>
        <ActivityPart></ActivityPart>
        <GetLink></GetLink>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
