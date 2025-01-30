import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
