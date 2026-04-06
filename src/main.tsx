import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App.tsx';
import Landing from './pages/Landing.tsx';
import Dashboard from './pages/Dashboard.tsx';
import ContentLab from './pages/ContentLab.tsx';
import Strategy from './pages/Strategy.tsx';
import Settings from './pages/Settings.tsx';
import Layout from './components/Layout.tsx';
import { Toaster } from '@/components/ui/sonner';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/content-lab" element={<Layout><ContentLab /></Layout>} />
        <Route path="/strategy" element={<Layout><Strategy /></Layout>} />
        <Route path="/settings" element={<Layout><Settings /></Layout>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster position="top-right" />
    </BrowserRouter>
  </StrictMode>,
);
