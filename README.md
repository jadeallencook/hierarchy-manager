
# Hierarchy Manager

The current API responds with an array of objects within all hierarchies.

```js
[{
    "id": "111111",
    "cc_code": "TEAM A",
    "hierarchy_name": "HIERARCHY_123",
    "is_leaf": true,
    "level_number": 3,
    "parent": "222222"
}, ...objects ]
```

We fetch this response with the **useTree** hook.

## useTree => [map, root, trees, setTree]

**map** - the reformatted response.

```js
{
    "111111": {
        "id": "111111",
        "cc_code": "TEAM A",
        "hierarchy_name": "HIERARCHY_123",
        "is_leaf": true,
        "level_number": 3,
        "parent": "222222"
    }, ...objects
}
```

**root** - all root node ids.

```js
['1111111', ...ids];
```

**trees** - all available hierarchies.

```js 
["HIERARCHY_123", ...hierarchies]
```

**setTree** - used to set the selected hierarchy.

```js
setTree('HIERARCHY_123');
```