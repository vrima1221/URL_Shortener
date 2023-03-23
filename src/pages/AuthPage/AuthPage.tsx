import React, { useState } from 'react';

export const AuthPage: React.FC = () => {
  const [currentLogin, setCurrentLogin] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');

  return (
    <div className="container">
      <h1 className="auth__title">Login</h1>
      <form action="">
        <input
          type="text"
          value={currentLogin}
          onChange={e => setCurrentLogin(e.target.value)}
          required
        />
        <input
          type="password"
          value={currentPassword}
          onChange={e => setCurrentPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
