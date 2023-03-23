import React, { useState } from 'react';

export const URLForm: React.FC = () => {
  const [currentURL, setCurrentURL] = useState('');

  return (
    <form
      action=""
      // onSubmit={}
    >
      <input
        type="url"
        placeholder="Input URL to shrink"
        value={currentURL}
        onChange={e => setCurrentURL(e.target.value)}
      />
      <button type="submit">Shrink</button>
    </form>
  );
};
