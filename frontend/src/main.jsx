import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/tekmino-icon.css';
import './assets/css/nice-select.css';
import './assets/css/swiper.min.css';
import './assets/css/venobox.min.css';
// import 'swiper/css';
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
