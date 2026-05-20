import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// @ts-ignore: side-effect import for global CSS
import './styles/fonts.css'
// @ts-ignore: side-effect import for global CSS
//import './styles/theme.css'
// @ts-ignore: side-effect import for global CSS
//import './index.css'
import App from './app/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
