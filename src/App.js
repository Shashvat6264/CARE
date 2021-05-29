import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About";

import Land from "./components/Land";
import Nav from "./components/Nav";
import Org from "./components/Org";
import RegisterationForm from "./components/Forms/FormRouter";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Land}/>
          <Route path="/org" component={Org} />
          <Route path="/about" component={About} />
          <Route path="/registration" component={RegisterationForm} />
          <Route path=""/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
