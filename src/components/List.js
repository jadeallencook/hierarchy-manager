import React from 'react';
import Item from './Item';
import './List.scss';

const List = (props) => {
  const { nodes, map } = props;
  return (
    <ul className="List">
      {nodes.map((id) =>
        map[id] ? <Item key={id} id={id} map={map} /> : null
      )}
    </ul>
  );
};

export default List;
