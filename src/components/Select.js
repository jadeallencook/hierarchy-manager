import React from 'react';

const Select = (props) => {
  return (
    <select>
      {props.trees &&
        props.trees.map((tree, index) => (
          <option value={tree} key={`tree-${index}`}>
            {tree}
          </option>
        ))}
    </select>
  );
};

export default Select;
