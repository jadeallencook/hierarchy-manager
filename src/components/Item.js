import React, { useState } from 'react';
import List from './List';

const Item = (props) => {
  const [showChildren, setShowChildren] = useState(false);
  const [addMenu, setAddMenu] = useState(false);
  const [options, setOptions] = useState(false);
  const { map, id } = props;
  const { cc_code, children, alias } = map[id];
  return (
    <li
      data-key={id}
      className={`${
        !children.length && `leaf`
      } animate__animated animate__flipInX`}
    >
      {cc_code}
      {alias && ` - ${alias}`}
      {options && !addMenu ? (
        <div>
          <span className="primary-highlight" onClick={() => setAddMenu(true)}>
            Add
          </span>
          <span className="secondary-highlight" data-event="edit">
            Edit
          </span>
          <span className="warning" data-event="remove">
            Delete
          </span>
          <span onClick={() => setOptions(false)}>Cancel</span>
        </div>
      ) : (
        <div>
          {children.length && !addMenu ? (
            <span
              onClick={(event) => {
                if (
                  event.target.parentNode.parentNode.getAttribute(
                    'data-key'
                  ) === id &&
                  children
                ) {
                  setShowChildren(!showChildren);
                }
              }}
            >
              {!showChildren ? 'Expand' : 'Collapse'}
            </span>
          ) : null}
          <span
            onClick={() => {
              setAddMenu(false);
              setOptions(true);
            }}
          >
            Options
          </span>
        </div>
      )}
      {addMenu && (
        <div>
          <span className="primary-highlight">Child</span>
          <span className="primary-highlight">Sibling</span>
        </div>
      )}
      {children && showChildren && <List nodes={children} map={map} />}
    </li>
  );
};

export default Item;
