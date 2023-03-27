import React, { useEffect, useState, useMemo } from 'react';
import './URLShortener.scss';
import { Dna } from 'react-loader-spinner';
import { deleteLink, getAll, postOrPatchLink } from '../../api/links';
import { URL } from '../../types/URL';
import { URLForm } from '../../components/URLForm/URLForm';
import { URLTable } from '../../components/URLTable/URLTable';
import { shrinkURL } from '../../utils/shrinkURL';
import logo from '../../img/UrlShortenerLogo.png';

export const URLShortener: React.FC = () => {
  const [urlsFromServer, setUrlsFromServer] = useState<URL[]>([]);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [currentURL, setCurrentURL] = useState('');

  const showErrorMessage = (message: string) => {
    setIsError(true);
    setErrorMessage(message);

    setTimeout(() => setIsError(false), 3000);
  };

  const getDataFromServer = async () => {
    const data = await getAll();

    if (data) {
      setUrlsFromServer(data.value);
    }
  };

  useEffect(() => {
    try {
      getDataFromServer();
    } catch (error) {
      showErrorMessage('Unable to load URLs!');
    }
  }, []);

  const handleRemoveClick = (urlId: number) => {
    deleteLink(urlId)
      .then(() => (
        setUrlsFromServer(prevUrls => prevUrls.filter(url => url.id !== urlId))
      ))
      .catch(() => (
        showErrorMessage('Unable to delete URL!')
      ));
  };

  const visibleUrls = useMemo(() => {
    return urlsFromServer;
  }, [urlsFromServer]);

  const isURLAlreadyShrinked = visibleUrls.some(url => url.fullUrl === currentURL);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (isURLAlreadyShrinked) {
      showErrorMessage('URL is already shortened!');
      setCurrentURL('');

      return;
    }

    if (!currentURL.trim()) {
      showErrorMessage('Please input your URL!');
      setCurrentURL('');

      return;
    }

    const shortURL = shrinkURL(currentURL);

    const preparedData = {
      id: 0,
      fullUrl: currentURL,
      shortUrl: shortURL,
    };

    setCurrentURL('');
    postOrPatchLink(preparedData)
      .then((addedUrl) => (
        setUrlsFromServer(prev => [
          ...prev,
          addedUrl.value,
        ])));
  };

  return (
    <div className="container">
      <img
        className="shortener-logo"
        src={logo}
        alt="URL shortener logo"
      />
      <URLForm
        isError={isError}
        errorMessage={errorMessage}
        onChange={setCurrentURL}
        currentUrl={currentURL}
        onSubmit={handleFormSubmit}
      />
      {visibleUrls.length !== 0 ? (
        <>
          <URLTable urls={visibleUrls} onRemove={handleRemoveClick} />
        </>
      ) : (
        <Dna
          visible
          height="150"
          width="150"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      )}
    </div>
  );
};
