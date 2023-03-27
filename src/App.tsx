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
import { URLInfoPage } from './pages/URLInfoPage/URLInfoPage';
import { Header } from './components/Header/Header';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/" element={<URLShortener />} />
          <Route path="/:id" element={<URLInfoPage />} />
        </Routes>
      </div>
    </>
  );
};
