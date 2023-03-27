import React from 'react';
import './URLTable.scss';
import { URL } from '../../types/URL';
import { URLInfo } from '../URLInfo/URLInfo';

type Props = {
  urls: URL[]
  onRemove: (id: number) => void
};

export const URLTable: React.FC<Props> = ({ urls, onRemove }) => {
  return (
    <table className="table">
      <tr>
        <th>Full URL</th>
        <th>Short URL</th>
        <th>More</th>
        <th>Remove</th>
      </tr>

      {urls.map(url => (
        <URLInfo url={url} key={url.id} onRemove={onRemove} />
      ))}
    </table>
  );
};
