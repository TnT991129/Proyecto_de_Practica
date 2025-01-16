import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Nav} from './components/Hero.jsx'
import Analytics from './pages/analytics/analytics.jsx'
import Engagement from './pages/engagement/engagement.jsx'
import Security from './pages/security/security.jsx'
import Integration from './pages/integration/integration.jsx'
import Automation from './pages/automation/automation.jsx'
import Contact from './contact-log in/contact/contact.jsx'
import Prices from './pages/pricees/prices.jsx'
import About from './pages/about/about.jsx'
import Support from './pages/support/support.jsx'
import Sign from './pages/Sign in & Log in/sign in/signin.jsx'
import { Login } from './pages/Sign in & Log in/log in/login.jsx'
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/engagement" element={<Engagement />} />
        <Route path="/security" element={<Security />} />
        <Route path="/integration" element={<Integration />} />
        <Route path="/automation" element={<Automation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/signin" element={<Sign />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
