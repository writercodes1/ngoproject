import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
// @ts-ignore: side-effect import for global CSS
import './styles/fonts.css'
// @ts-ignore: side-effect import for global CSS
import './styles/theme.css'
// @ts-ignore: side-effect import for global CSS
import './index.css'
import App from './app/App.tsx'

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
)
