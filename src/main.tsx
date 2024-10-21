import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/globals/index.css'
import { ThemeProvider } from './contexts/theme.tsx'
import MainLayout from './layouts/MainLayout.tsx'
import ViewWidthProvider from './contexts/viewWidthProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <ViewWidthProvider>
        <MainLayout>
          <App />
        </MainLayout>
      </ViewWidthProvider>
    </ThemeProvider>
  </StrictMode>,
)
