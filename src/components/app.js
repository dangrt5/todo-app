import "materialize-css/dist/css/materialize.min.css";
import React, {Component} from 'react';
import axios from "axios";
import List from "./list";
import AddItem from "./add-item";
import dummyListData from "../dummy-data/list-data";

const BASE_URL = "http://api.reactprototypes.com";
const API_KEY = "?key=rvndydvng"

class App extends Component {
  state = {
    list: [],
    error: ""
  }

  componentDidMount() {
    this.getListData();
  }

  async getListData() {
      // Call server to get data
      // http://api.reactprototypes.com/todos?key=somekey

      try {
        const response = await axios.get(`${BASE_URL}/todos${API_KEY}`);
        this.setState({
          list: response.data.todos
        });
      } catch(error) {
          this.setState({
            error: "Error retrieving list data"
          })
        }


            // const response = axios.get(`${BASE_URL}/todos${API_KEY}`).then((response) => {
      //   this.setState({
      //     list: response.data.todos
      //   });
      // }).catch((err) => {
      //   console.log("Add Item Error", err.message);
      //   this.setState({
      //     error: `Error retrieving list data`
      //   })
      // })



  }

  async addItem(item) {
    await axios.post(`${BASE_URL}/todos${API_KEY}`, item);
    this.getListData();
  }

  deleteItem = async (id) => {
    console.log("Delete item ID:", id);
    await axios.delete(`${BASE_URL}/todos/${id + API_KEY}`);
    this.getListData();
  }


  render() {
    const {list, error} = this.state;
    console.log("List", list)
    return (
        <div className="container">
          <h1 className="center">To Do App</h1>
          <AddItem add={this.addItem.bind(this)}/>
          <p className="red-text">{error}</p>
          <List data={list} delete={this.deleteItem}/>
        </div>
      )
  }
}
export default App;
