import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/tekmino-icon.css';
import './assets/css/nice-select.css';
import 'swiper/css';
import './assets/css/meanmenu.css';
import './assets/css/main.css';
import './assets/css/shop.css';    // only on shop pages

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
