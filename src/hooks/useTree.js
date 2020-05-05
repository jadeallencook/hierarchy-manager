import { useState, useEffect } from 'react';

const useTree = () => {
  const [root, setRoot] = useState([]);
  const [map, setMap] = useState({});
  const [trees, setTrees] = useState([]);
  const [tree, setTree] = useState('');

  useEffect(() => {
    let level = 0;
    fetch('./assets/response.json')
      .then((response) => response.json())
      .then((nodes) =>
        nodes.forEach((node) => {
          const { id, parent, level_number, hierarchy_name } = node;
          if (trees.indexOf(hierarchy_name) === -1) {
            setTrees([...trees, hierarchy_name]);
          }
          if (!tree) {
            setTree(hierarchy_name);
          }
          if (level_number > level) {
            level = level_number;
            setRoot([id]);
          } else if (level_number === level) {
            setRoot([...root, id]);
          }
          if (!map[id]) {
            map[id] = { ...node, children: [] };
          } else {
            map[id] = { ...map[id], ...node };
          }
          if (parent && !map[parent]) {
            map[parent] = { children: [id] };
          } else if (parent) {
            map[parent] = {
              ...map[parent],
              children: [...map[parent].children, id],
            };
          }
          setMap(map);
        })
      );
  }, []);

  return { root, map, trees, setTree, setMap };
};

export default useTree;
