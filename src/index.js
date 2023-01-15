import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global} from '@emotion/react';
import { globalStyle } from './utils/global-style'
import { App } from 'components/App/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global styles={globalStyle}/>
    <Provider store = {store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
