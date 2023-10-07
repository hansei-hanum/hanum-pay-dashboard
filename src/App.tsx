import React from 'react';

import { AuthPage, MainPage } from './pages';

export const App: React.FC = () => {
  const key = localStorage.getItem('key');

  return <>{key ? <MainPage /> : <AuthPage />}</>;
};
