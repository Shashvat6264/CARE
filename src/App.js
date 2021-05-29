import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Org from "./components/Org";
import RegisterationForm from "./components/Forms/FormRouter";
import ChildReg from "./components/ChildReg";
import OrgDashboard from "./components/OrgDashboard";

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
          <Route path="/org-dash" component={OrgDashboard}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
