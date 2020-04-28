import React from 'react';
import './App.scss';
import useTree from './hooks/useTree';
import List from './components/List';
import Select from './components/Select';

function App() {
  const { root, map, trees, setTree } = useTree();

  return (
    <div className="App">
      <Select trees={trees} setTree={setTree} />
      <List nodes={root} map={map} />
    </div>
  );
}

export default App;
