
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Nav from './components/Nav';
import Org from './components/Org';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    
    <Nav/>
    
    <Route path="/org" component={Org}/>
      <Route path="/about" component={About}/>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
