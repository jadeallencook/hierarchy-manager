import React, { useState } from 'react';
import List from './List';

const Item = (props) => {
  const [showChildren, setShowChildren] = useState(false);
  const { map, id } = props;
  const { is_leaf, cc_code, children } = map[id];
  return (
    <li
      data-key={id}
      className={is_leaf ? `leaf` : null}
      onClick={(event) => {
        if (event.target.getAttribute('data-key') === id) {
          setShowChildren(!showChildren);
        }
      }}
    >
      {cc_code}
      {children && showChildren && <List nodes={children} map={map} />}
    </li>
  );
};

export default Item;
