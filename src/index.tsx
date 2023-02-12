import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProductsProvider } from './productsContext';
import { ObserverProvider } from './observerContext';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ObserverProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </ObserverProvider>
  </React.StrictMode>
);
