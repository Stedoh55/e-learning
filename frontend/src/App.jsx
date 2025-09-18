import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Home/HomePage'
import SignUp from './pages/Account/SignUp'
import Login from './pages/Account/Login'
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import LearnerDashboard from './pages/Dashboard/LearnerDashboard'
import InstructorDashboard from './pages/Dashboard/InstructorDashboard'
import ManagerDashboard from './pages/Dashboard/ManagerDashboard'

function App() {
  const role = localStorage.getItem("role");

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Homepage />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='login' element={<Login />} />

        {/*Role-based Dashboards */}
        {role === "learner" && <Route path="/dashboard" element={<LearnerDashboard/>} />}
        {role === "instructor" && <Route path="/dashboard" element={<InstructorDashboard />} />}
        {role === "manager" && <Route path="/dashboard" element={<ManagerDashboard />} />}

        {/* Default Dashboard */}
        <Route path='dashboard' element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
