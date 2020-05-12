import React, { useState, useEffect } from 'react';
import './App.scss';
import useTree from './hooks/useTree';
import List from './components/List';
import Info from './components/Info';
import Edit from './components/Edit';

function App() {
  const { root, map, setMap } = useTree();
  const [selected, setSelected] = useState(null);
  const [editing, setEditing] = useState(false);
  useEffect(() => setSelected(root[0]), [map, root]);

  const select = (event) => {
    let key = event.target.getAttribute('data-key');
    const string = event.target.getAttribute('data-event');
    if (string === 'edit') {
      key = event.target.parentNode.parentNode.getAttribute('data-key');
      setEditing(true);
    } else if (key) {
      setEditing(false);
    }
    if (key) {
      setSelected(key);
    }
  };

  return (
    <div className="App" onClick={select}>
      <List nodes={root} map={map} />
      {map[selected] && !editing ? (
        <Info selected={map[selected]} map={map} setMap={setMap} />
      ) : (
        <Edit node={map[selected]}  />
      )}
    </div>
  );
}

export default App;
