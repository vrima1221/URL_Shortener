import React from 'react';
import './URLInfo.scss';
import { Link } from 'react-router-dom';
import { URL } from '../../types/URL';

type Props = {
  url: URL
  onRemove: (id: number) => void
};

export const URLInfo: React.FC<Props> = ({ url, onRemove }) => {
  const { fullUrl, shortUrl, id } = url;

  // eslint-disable-next-line no-console
  console.log(shortUrl);

  return (
    <tr>
      <td className="fullUrl"><a href={fullUrl}>{fullUrl}</a></td>
      <td><a href={`https://localhost:7258/ShortUrl/GetShort?shortUrl=${shortUrl}`}>{`https://localhost:7258/ShortUrl/GetShort?shortUrl=${shortUrl}`}</a></td>
      <td><Link to={`/${id}`}>More</Link></td>
      <td>
        <button
          type="button"
          onClick={() => onRemove(id)}
        >
          ✖
        </button>
      </td>
    </tr>
  );
};
