import React from 'react';
import ReactDOM from 'react-dom';
import ImgLoaderContainer from './ImgLoaderContainer/ImgLoaderContainer';
import * as serviceWorker from './serviceWorker';
import defaultLogo from './img/logo.svg';
import './scss/index.scss';

const onChange = () => console.log('OnChange!')

ReactDOM.render(
  <React.StrictMode>
    <ImgLoaderContainer url={defaultLogo} onChange={onChange}/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
