import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from "./store/auth.jsx"; 
import { CartProvider } from "./context/CartContext";

createRoot(document.getElementById('root')).render(
   <AuthProvider>
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
  </AuthProvider>
)





