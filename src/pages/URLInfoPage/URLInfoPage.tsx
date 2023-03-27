import React, { useState, useEffect } from 'react';
import './URLInfoPage.scss';
import { useParams } from 'react-router-dom';
import { Dna } from 'react-loader-spinner';
import { getLinkById } from '../../api/links';
import { dataFromServer } from '../../types/URL';

export const URLInfoPage: React.FC = () => {
  const { id } = useParams();

  const [currentUrl, setCurrentURL] = useState<dataFromServer| null>(null);

  const loadInfo = async (UrlId: string | undefined) => {
    if (id) {
      const loadedUrlInfo = await getLinkById(UrlId);

      setCurrentURL(loadedUrlInfo);
    }
  };

  useEffect(() => {
    loadInfo(id);
  }, []);

  // eslint-disable-next-line no-console
  console.log(currentUrl);

  return (
    <>
      {currentUrl ? (
        <div className="info">
          <h1 className="info__title">URL Info page</h1>
          <p className="info__full">
            {'Full URL: '}
            <a href={currentUrl.value.fullUrl}>{currentUrl.value.fullUrl}</a>
          </p>
          <p className="info__short">
            {'Short URL: '}
            <a href={`https://localhost:7258/ShortUrl/GetShort?shortUrl=${currentUrl.value.shortUrl}`}>{`https://localhost:7258/ShortUrl/GetShort?shortUrl=${currentUrl.value.shortUrl}`}</a>
          </p>
        </div>
      ) : (
        <Dna
          visible
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      )}
    </>

  );
};
