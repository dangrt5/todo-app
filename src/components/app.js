import "materialize-css/dist/css/materialize.min.css";
import {Route, Switch} from "react-router-dom";
import React, {Component} from 'react';
import List from "./list";
import AddItem from "./add-item";
import Details from "./details";
import NotFound from "./not-found";


class App extends Component {

  render() {
    return (
        <div className="container">
          <Switch>
            <Route exact path="/" component={List}/>
            <Route path="/add-item" component={AddItem}/>
            <Route path="/item/:itemId" component={Details}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      )
  }
}
export default App;
