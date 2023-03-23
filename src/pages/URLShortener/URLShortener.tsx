import React from 'react';
import { URLForm } from '../../components/URLForm/URLForm';
import { URLTable } from '../../components/URLTable/URLTable';
import urlsFromServer from '../../data/urls.json';

const URLSFromServer = urlsFromServer;

export const URLShortener: React.FC = () => {
  return (
    <div className="container">
      <h1>URL Shortener</h1>
      <URLForm />
      <URLTable urls={URLSFromServer} />
    </div>
  );
};
