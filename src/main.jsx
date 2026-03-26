import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext';
import App from './App.jsx'
import './index.css'

const container = document.getElementById('root');
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// 프리렌더링 지원: 이미 렌더링된 HTML이 있으면 hydrate, 아니면 새로 render
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}

// vite-plugin-prerender가 렌더링 완료를 감지하도록 이벤트 디스패치
document.dispatchEvent(new Event('render-event'));
