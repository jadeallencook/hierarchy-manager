import React, { useState } from 'react';

const Info = (props) => {
  const [name, setName] = useState('');
  const { setMap, selected, map } = props;
  const addChild = () => {
    const id = (Math.floor(Math.random() * 999999) + 111111).toString();
    const { hierarchy_name, children, level_number } = selected;
    if (name && !map[id]) {
      setMap({
        ...map,
        [selected.id]: {
          ...selected,
          children: [...children, id],
        },
        [id]: {
          level_number: level_number - 1,
          cc_code: name,
          children: [],
          parent: selected.id,
          hierarchy_name,
          id,
        },
      });
      setName('');
    }
  };
  return (
    <div className="Info">
      <br />
      {Object.keys(selected).map((key, index) => (
        <span key={key}>
          <b>{key}:</b> {JSON.stringify(selected[key])}
          <br />
        </span>
      ))}
      <br />
      <input
        type="text"
        onChange={(event) => setName(event.target.value)}
        value={name}
        placeholder="Node Name"
      />
      <button onClick={addChild}>Add Child</button>
      <br />
    </div>
  );
};

export default Info;
