import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';

import { RecoilRoot } from 'recoil';
import { Global } from '@emotion/react';

import { App } from './App';
import { globalStyle } from './styles';

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <Global styles={[globalStyle]} />
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
);
