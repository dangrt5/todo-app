import React from "react";
import Item from "./item";

const List = (props) => {
    const listElement = props.data.map((item, index) => {
      return <Item key={item._id} index={item} delete={() => props.delete(index)}/>
    });

    return (
      <ul className="collection">
        {listElement}
      </ul>
    );
}

export default List;
