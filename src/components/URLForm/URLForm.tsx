import React, { useState } from 'react';
import { postOrPatchLink } from '../../api/links';
import { URL } from '../../types/URL';
import { shrinkURL } from '../../utils/shrinkURL';

type Props = {
  urls: URL[]
};

export const URLForm: React.FC<Props> = () => {
  const [currentURL, setCurrentURL] = useState('');

  // const isURLAlreadyShrinked = urls.some(url => url.full === currentURL);

  const handleFormSubmit = () => {
    // if (!isURLAlreadyShrinked) {
    //   throw new Error('URL is already shortened');
    // }

    const shortURL = shrinkURL(currentURL);

    const preparedData = {
      id: 0,
      full: currentURL,
      short: shortURL,
    };

    postOrPatchLink(preparedData);
  };

  return (
    <form
      action=""
      onSubmit={handleFormSubmit}
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
