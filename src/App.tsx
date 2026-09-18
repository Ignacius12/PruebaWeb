import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Hub } from './pages/Hub'
import { BakeryApp } from './sites/bakery/BakeryApp'
import { ClinicApp } from './sites/clinic/ClinicApp'
import { RestaurantApp } from './sites/restaurant/RestaurantApp'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Hub />} />
        <Route path="/restaurante" element={<RestaurantApp />} />
        <Route path="/clinica" element={<ClinicApp />} />
        <Route path="/horno" element={<BakeryApp />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default function App() {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'

  return (
    <BrowserRouter basename={basename === '/' ? undefined : basename}>
      <AppRoutes />
    </BrowserRouter>
  )
}
