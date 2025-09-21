import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Homepage from './pages/Home/HomePage'
import SignUp from './pages/Account/SignUp'
import Login from './pages/Account/Login'
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import LearnerDashboard from './pages/Dashboard/LearnerDashboard'
import InstructorDashboard from './pages/Dashboard/InstructorDashboard'
import ManagerDashboard from './pages/Dashboard/ManagerDashboard'
import CoursesCreation from './pages/Instructors/CoursesCreation'
import CoursesList from './pages/Instructors/Courseslist'

function App() {
 const role = localStorage.getItem("role")
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
        <Route path='courses/create' element={<CoursesCreation />} />
        <Route path='courses' element={<CoursesList />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
