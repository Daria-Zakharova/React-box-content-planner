import './index.css';
import './fonts/Roboto/Roboto-Regular.ttf'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global} from '@emotion/react';
import { globalStyle } from './utils/global-style'
import { App } from 'components/App/App';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/goit-react-hw-08-phonebook'>
      <Global styles={globalStyle}/>
      <Provider store = {store}>
        <App/>
      </Provider>
    </BrowserRouter>    
  </React.StrictMode>
);
