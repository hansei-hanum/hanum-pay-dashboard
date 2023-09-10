import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { AuthPage, MainPage } from './pages';

export const App: React.FC = () => {
  const key = localStorage.getItem('key');
  const navigate = useNavigate();

  useEffect(() => {
    if (!key) {
      navigate('/auth');
    } else {
      navigate('/');
    }
  }, [key]);
  return (
    <Routes>
      {key && <Route path="/" element={<MainPage />} />}
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
};
