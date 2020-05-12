import { useState, useEffect } from 'react';

const useTree = () => {
  const [root, setRoot] = useState([]);
  const [map, setMap] = useState({});
  const [trees, setTrees] = useState([]);
  const [tree, setTree] = useState('');

  useEffect(() => {
    fetch('./assets/response.json')
      .then((response) => response.json())
      .then((nodes) => {
        const object = {};
        nodes.forEach((node) => {
          const { id, parent, hierarchy_name } = node;
          if (trees.indexOf(hierarchy_name) === -1) {
            setTrees((prev) => [...prev, hierarchy_name]);
          }
          if (!tree) {
            setTree(hierarchy_name);
          }
          if (!parent) {
            setRoot((prev) => [...prev, id]);
          }
          if (!object[id]) {
            object[id] = { ...node, children: [] };
          } else {
            object[id] = { ...object[id], ...node };
          }
          if (parent && !object[parent]) {
            object[parent] = { children: [id] };
          } else if (parent) {
            object[parent] = {
              ...object[parent],
              children: [...object[parent].children, id],
            };
          }
        });
        setMap(object);
      });
  }, []);

  return { root, map, trees, setTree, setMap };
};

export default useTree;
