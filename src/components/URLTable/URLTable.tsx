import React from 'react';
import { URL } from '../../types/URL';
import { URLInfo } from '../URLInfo/URLInfo';

type Props = {
  urls: URL[]
};

export const URLTable: React.FC<Props> = ({ urls }) => {
  return (
    <table>
      <tr>
        <th>Full URL</th>
        <th>Short URL</th>
      </tr>

      {urls.map(url => (
        <URLInfo url={url} key={url.id} />
      ))}
    </table>
  );
};
