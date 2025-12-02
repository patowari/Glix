import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Features from './pages/Features';
import HowItWorks from './pages/HowItWorks';
import GlobalCoverage from './pages/GlobalCoverage';
import JoinWaitlist from './pages/JoinWaitlist';
import Security from './pages/Security';
import Enterprise from './pages/Enterprise';
import ApiDocs from './pages/ApiDocs';
import AboutUs from './pages/AboutUs';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import PressKit from './pages/PressKit';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import Licenses from './pages/Licenses';
import Gdpr from './pages/Gdpr';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="features" element={<Features />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="coverage" element={<GlobalCoverage />} />
          <Route path="join-waitlist" element={<JoinWaitlist />} />
          <Route path="security" element={<Security />} />
          <Route path="enterprise" element={<Enterprise />} />
          <Route path="api-docs" element={<ApiDocs />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="careers" element={<Careers />} />
          <Route path="blog" element={<Blog />} />
          <Route path="press-kit" element={<PressKit />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="cookie-policy" element={<CookiePolicy />} />
          <Route path="licenses" element={<Licenses />} />
          <Route path="gdpr" element={<Gdpr />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;