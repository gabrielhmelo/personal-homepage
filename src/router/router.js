import React from  'react';
import {Route, Switch, Redirect} from "react-router-dom";

// Pages 
import Home from "../page/Home";
import About from "../page/About";
import Contact from "../page/Contact";
//import Project from "../page/Project";




  const Routes = () => (
  
    <Switch>
      
        <Route exact path="/" component={Home} />
        <Route path="/home" exact component={Home}  />
        <Route path="/about" exact component={About}/>

        <Route path="/contact"  exact component={Contact}  />
        <Route path="*" component={() => <h2>404 Page Not Found</h2>} />
  
       
    </Switch>

  
    
   
    
);

export default Routes;


