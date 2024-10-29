import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './contexts/themeProvider.tsx'
import MainLayout from './layouts/MainLayout.tsx'
import ViewWidthProvider from './contexts/viewWidthProvider.tsx'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ViewWidthProvider>
          <MainLayout>
            <App />
          </MainLayout>
        </ViewWidthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
