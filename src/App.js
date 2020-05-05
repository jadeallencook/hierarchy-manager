import React, { useState } from 'react';
import './App.scss';
import useTree from './hooks/useTree';
import List from './components/List';
import Select from './components/Select';
import Info from './components/Info';

function App() {
  const { root, map, trees, setTree, setMap } = useTree();
  const [selected, setSelected] = useState(null);

  const select = (event) =>
    event.target.getAttribute('data-key') &&
    setSelected(event.target.getAttribute('data-key'));

  return (
    <div className="App" onClick={select}>
      <Select trees={trees} setTree={setTree} />
      {map[selected] && (
        <Info selected={map[selected]} map={map} setMap={setMap} />
      )}
      <List nodes={root} map={map} />
    </div>
  );
}

export default App;
