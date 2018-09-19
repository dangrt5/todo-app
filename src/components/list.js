import React, {Component} from "react";
import dummyListData from "../dummy-data/list-data";

class List extends Component {
  state = {
    list: []
  }

  componentDidMount() {
    this.getListData();
  }

  getListData() {
      // Call server to get data

      this.setState({
        list: dummyListData
      });

  }


  render() {
    const listElement = this.state.list.map((item, index) => {
      return <li className="collection-item" key={item._id}>{item.title}</li>
    })

    return (
      <ul className="collection">
        {listElement}
      </ul>
    );
  }
}

export default List;
