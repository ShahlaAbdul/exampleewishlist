import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BasketProvider from './useContext/BasketContext';
import WishlistProvider from './useContext/WishlistContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WishlistProvider>
    <BasketProvider>
    <App />
    </BasketProvider>
    </WishlistProvider>
   
  </React.StrictMode>
);


