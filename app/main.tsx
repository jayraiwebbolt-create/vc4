import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RootLayout from './layout'
import Home from './page'
import AboutUs from './about-us/page'
import ContactUs from './contact-us/page'
import DeveloperCredentials from './developer-credentials/page'
import Treatments from './treatments/page'
import TreatmentDetail from './treatments/[slug]/page'
import './globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/treatments" element={<Treatments />} />
           <Route path="/developer-credentials" element={<DeveloperCredentials />} />
          <Route path="/treatments/:slug" element={<TreatmentDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
