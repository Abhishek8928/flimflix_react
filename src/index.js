import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  RouterProvider,
} from "react-router-dom";
import Routes from './Routes/config';
import { Provider } from "react-redux"
import store from "../src/redux/store/CreateStore"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={Routes} >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </RouterProvider>
  
  
  </Provider>
  
);

