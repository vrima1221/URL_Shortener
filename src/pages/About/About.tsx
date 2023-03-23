import React from 'react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <>
      <h1>About</h1>
      <Link to="/shortener">Lets try!</Link>
    </>
  );
};
