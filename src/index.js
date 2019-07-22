import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import  { Provider }  from "react-redux";
import Chocolate from "./Components/Chocolate";
import Brands from "./Components/Brands";
import store from "./store/store";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(<Provider store={store}>
    <Router><App/></Router>
    
    </Provider>,
     document.getElementById('root'));

serviceWorker.unregister();