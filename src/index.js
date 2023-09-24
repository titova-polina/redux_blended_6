import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global, ThemeProvider } from '@emotion/react';
import 'modern-normalize';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components';
import { GlobalStyles, theme } from 'styles';
import { store, persistor } from 'redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <Global styles={GlobalStyles} />
          <App />
        </PersistGate>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
