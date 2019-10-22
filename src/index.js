import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import store from "./redux/store";
ReactDOM.render(
    <BrowserRouter>
        <App store={store} />
    </BrowserRouter>

    , document.getElementById('root'));



store.subscribe(() => {
    console.log("我监听到变化");
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} />
        </BrowserRouter>

        , document.getElementById('root'));

})
serviceWorker.unregister();
