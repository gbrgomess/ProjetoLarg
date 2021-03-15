/* eslint-disable react/jsx-indent */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyles from './Styles/global';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
    <BrowserRouter>
      <Routes />

    </BrowserRouter>
    <GlobalStyles />
    </>
  );
}

export default App;
