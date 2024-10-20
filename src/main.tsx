import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/globals/index.css'
import { BaseUrlProvider } from './contexts/baseUrl.tsx'
import { ThemeProvider } from './contexts/theme.tsx'
import MainLayout from './layouts/MainLayout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <BaseUrlProvider>
        <MainLayout>
          <App />
        </MainLayout>
      </BaseUrlProvider>
    </ThemeProvider>
  </StrictMode>,
)
