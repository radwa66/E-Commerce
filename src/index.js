import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import ProductProvider from './contexts/ProductContext';
import SidebarProvider from './contexts/SidebarContext';
import CartProvider from './contexts/CartContext';

import global_en from './translations/en/global.json'
import global_es from './translations/es/global.json';
import il8next from 'i18next';
import { I18nextProvider } from 'react-i18next';

il8next.init({
  interpolation: {escapeValue :false},
  lng: "en",
  resources: {
    en:{
      global: global_en,
    },
    es:{
      global: global_es,
    },

  }
})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<SidebarProvider>
  <CartProvider>
   <ProductProvider>
     <React.StrictMode>
      <I18nextProvider i18n={il8next}>
        <App />
      </I18nextProvider>
     </React.StrictMode>
   </ProductProvider>
 </CartProvider>
</SidebarProvider>
  
);
