import Budget from "@/Budget/Budget"
import { Routes, BrowserRouter as Router, Route } from "react-router-dom"
export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Budget />} />
      </Routes>
    </Router>
  )
}
