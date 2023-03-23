import React from 'react';
import { URL } from '../../types/URL';

type Props = {
  url: URL
};

export const URLInfo: React.FC<Props> = ({ url }) => {
  const { full, short } = url;

  return (
    <tr>
      <td><a href="/">{full}</a></td>
      <td><a href="/">{short}</a></td>
    </tr>
  );
};
