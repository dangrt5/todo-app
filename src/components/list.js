import React, {Component} from 'react';
import Item from './item';
import NavBtn from "./nav_btn";
import config from "../config";
import axios from "axios";

class List extends Component {
  state = {
    list: [],
    error: ""
  }

  componentDidMount() {
    this.getListData();
  }

  async getListData() {


      try {
        const response = await axios.get(`${config.API_URL}/todos${config.API_KEY}`);
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

  deleteItem = async (id) => {
    console.log("Delete item ID:", id);
    await axios.delete(`${config.API_URL}/todos/${id + config.API_KEY}`);
    this.getListData();
  }

  render() {
    const {error, list} = this.state;
      const listElements = list.map((item, index)=>{
        return <Item key={item._id} item={item} index={index} delete={() => this.deleteItem(item._id)}/>
      })
      return (
        <div>
          <h1 className="center">To Do List</h1>
          <NavBtn to="/add-item" color="green darken-2" text="Add Item"/>
          <p className="red-text text-darken-2">{error}</p>
          <ul className="collection">
            {listElements}
          </ul>
        </div>
      )
    }
}


export default List;
