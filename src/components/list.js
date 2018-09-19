import React from "react";

const List = (props) => {
    const listElement = props.data.map((item, index) => {
      return <li className="collection-item" key={item._id}>{item.title}</li>
    });

    return (
      <ul className="collection">
        {listElement}
      </ul>
    );
}

export default List;
