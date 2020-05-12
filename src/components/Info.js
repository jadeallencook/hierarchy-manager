import React, { useState } from 'react';

const Info = (props) => {
  const [name, setName] = useState('');
  const { selected } = props;
  return (
    <div className="Info">
      <h1>{selected['cc_code']}</h1>
      {selected['alias'] && <h3>{selected['alias']}</h3>}
      <p>
        {selected['description'] ? (
          selected['description']
        ) : (
          <i>No description available.</i>
        )}
      </p>
    </div>
  );
};

export default Info;
