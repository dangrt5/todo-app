import "materialize-css/dist/css/materialize.min.css";
import {Route} from "react-router-dom";
import React, {Component} from 'react';
import List from "./list";
import AddItem from "./add-item";


class App extends Component {

  render() {
    return (
        <div className="container">
          <Route exact path="/" component={List}/>
          <Route path="/add-item" component={AddItem}/>
        </div>
      )
  }
}
export default App;
