import React from 'react';
import Item from './item';

export default props => {
  const listElements = props.data.map((item, index)=>{
    return <Item key={item._id} item={item} index={index} delete={() => props.delete(item._id)}/>
  })
  return(
    <ul className="collection">
      {listElements}
    </ul>
  )
}
