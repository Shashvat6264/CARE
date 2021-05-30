import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Org from "./components/Org";
import getWeb3 from './utils/getWeb3.js';
import RegisterationForm from "./components/Forms/FormRouter";
import ChildReg from "./components/ChildReg";
import OrgDashboard from "./components/OrgDashboard";
import { Component } from "react";

class App extends Component{
  constructor(){
    super();
    this.state = {
      web3: '',
      address: '',
    };
  }

  // componentDidMount(){
  //   getWeb3.then(results => {
  //     results.web3.eth.getAccounts((error, acc) => {
  //       this.setState({
  //         address: acc[0],
  //         web3: results.web3
  //       })
  //     });
  //   }).catch((error) => {
  //     console.log('Error finding web3: ' + error);
  //   })
  // }

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Hero}/>
            <Route path="/org" component={Org} />
            <Route path="/about" component={About} />
            <Route path="/registration"><RegisterationForm /></Route>
            <Route path="/child-reg" component={ChildReg} />
            <Route path="/org-dash" component={OrgDashboard}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
