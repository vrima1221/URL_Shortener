import React, { useEffect, useState } from 'react';
import { getAll } from '../../api/links';
import { URLForm } from '../../components/URLForm/URLForm';
import { URLTable } from '../../components/URLTable/URLTable';
import { URL } from '../../types/URL';

export const URLShortener: React.FC = () => {
  const [urlsFromServer] = useState<URL[]>([]);

  useEffect(() => {
    try {
      getAll()
        // eslint-disable-next-line no-console
        .then((data) => console.log(data));
    } catch (error) {
      throw new Error(`${error}`);
    }
  }, []);

  return (
    <div className="container">
      <h1>URL Shortener</h1>
      <URLForm urls={urlsFromServer} />
      <URLTable urls={urlsFromServer} />
    </div>
  );
};
