
import React from 'react';
import { defaultTheme, Provider } from '@adobe/react-spectrum';
import { Layout } from './layout';

export function App() {
  return <Provider theme={defaultTheme}>
    <Layout />
  </Provider>
}
