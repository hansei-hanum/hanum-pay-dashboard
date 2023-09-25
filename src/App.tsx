import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { AuthPage, MainPage } from './pages';

export const App: React.FC = () => {
  const key = localStorage.getItem('key');

  return (
    <Routes>
      <Route path="*" element={key ? <MainPage /> : <AuthPage />} />
    </Routes>
  );
};
