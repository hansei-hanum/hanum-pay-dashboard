import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { RecoilRoot } from 'recoil';
import { Global } from '@emotion/react';

import { App } from './App';
import { globalStyle } from './styles';

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <QueryClientProvider client={client}>
          <Global styles={[globalStyle]} />
          <App />
        </QueryClientProvider>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
);
