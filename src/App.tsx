import React from 'react';
import './App.scss';
import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { URLShortener } from './pages/URLShortener/URLShortener';
import { About } from './pages/About/About';
// import urlsFromServer from './data/urls.json';

// const URLSFromServer = urlsFromServer;

export const App: React.FC = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/shortener" element={<URLShortener />} />

      </Routes>
    </div>
  );
};
