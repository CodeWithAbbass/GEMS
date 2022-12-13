import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from "./context/product_context";
import { CartProvider } from "./context/cart_context";
import { BlogProvider } from './context/blog_context';
import { UserProvider } from './context/user_context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <UserProvider>
      <BlogProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </BlogProvider>
    </UserProvider>
  </AppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
