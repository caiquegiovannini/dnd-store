import { Routes, Route, Navigate } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { DayOffers } from './pages/DayOffers'

export function Router() {
  return (
    <Routes>
        <Route path="/" element={<DefaultLayout />}>
            <Route path="/departments" />
            <Route path="/releases" />
            <Route path="/players-handbook" />
            <Route path="/day-offers" element={<DayOffers />} />
            <Route path="/" element={<Navigate to="/day-offers" />} />
        </Route>
    </Routes>
  )
}