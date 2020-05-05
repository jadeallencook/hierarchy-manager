import React, { useState } from 'react';
import List from './List';

const Item = (props) => {
  const [showChildren, setShowChildren] = useState(false);
  const { map, id } = props;
  const { cc_code, children } = map[id];
  return (
    <li
      data-key={id}
      className={!children.length ? `leaf` : null}
      onClick={(event) => {
        if (event.target.getAttribute('data-key') === id && children) {
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
