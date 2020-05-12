import React, { useState } from 'react';
import './Edit.scss';

const Edit = (props) => {
  if (props.node) {
    const { cc_code, alias, description } = props.node;
    return (
      <div className="Edit">
      <label>Name</label>
        <input defaultValue={cc_code} />
      <label>Title</label>
        <input defaultValue={alias} />
      <label>Description</label>
        <textarea defaultValue={description}></textarea>
        <button>Save</button>
      </div>
    );
  } else {
    return null;
  }
};

export default Edit;
