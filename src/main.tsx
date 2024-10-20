import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/globals/index.css'
import { BaseUrlProvider } from './contexts/baseUrl.tsx'
import { ThemeProvider } from './contexts/theme.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <BaseUrlProvider>
        <App />
      </BaseUrlProvider>
    </ThemeProvider>
  </StrictMode>,
)
