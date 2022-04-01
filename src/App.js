import  Header  from "./Header/Header";
import Navbar from "./Header/Navbar";
import  Compo  from "./Header/Compo";
import  Footer  from "./Header/Footer";
import  Contact  from "./Header/Contact";
import Adduser from "./users/Adduser";
import Edit from "./users/Edit";
import View from "./users/View";

import  NotFound  from "./Header/NotFound";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Compo}/>
    <Route exact path="/Header" component={Header}/>
    <Route exact path="/Footer" component={Footer}/>
    <Route exact path="/Contact" component={Contact}/>
    <Route exact path="/users/Adduser" component={Adduser}/>
    <Route exact path="/users/Edit/:id" component={Edit}/>
    <Route exact path="/users/:id" component={View} />

    <Route component={NotFound}/>

    </Switch>
  
    </Router>
       
    </div>
  );
}

export default App;
