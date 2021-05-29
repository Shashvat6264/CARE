import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";

import Land from "./components/Land";
import Nav from "./components/Nav";
import Org from "./components/Org";
import RegisterationForm from "./components/Forms/FormRouter";
import ChildReg from "./components/ChildReg";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Hero}/>
          <Route path="/org" component={Org} />
          <Route path="/about" component={About} />
          <Route path="/registration" component={RegisterationForm} />
          <Route path="/child-reg" component={ChildReg} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
