import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Homepage from './pages/Home/HomePage'
import SignUp from './pages/Account/SignUp'
import Login from './pages/Account/Login'
import './App.css'
import LearnerDashboard from './pages/Dashboard/LearnerDashboard'
import InstructorDashboard from './pages/Dashboard/InstructorDashboard'
import ManagerDashboard from './pages/Dashboard/ManagerDashboard'
import CoursesCreation from './pages/Instructors/CoursesCreation'
import CoursesList from './pages/Instructors/Courseslist'
import Learners from './pages/LearnersManagement/Learners'
import AutoDashboard from './components/AutoDashboard'
import LearnerDetails from './pages/LearnersManagement/LearnerDetails'

function App() {
 const role = localStorage.getItem("role")
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Homepage />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='login' element={<Login />} />

        <Route path='dashboard' element={<AutoDashboard />} />

        {/*Role-based Dashboards */}
        {role === "learner" && <Route path="/dashboards" element={<LearnerDashboard/>} />}
        {role === "instructor" && <Route path="/dashboards" element={<InstructorDashboard />} />}
        {role === "manager" && <Route path="/dashboards" element={<ManagerDashboard />} />}

        <Route path='courses/create' element={<CoursesCreation />} />
        <Route path='courses' element={<CoursesList />} />
        <Route path='learners' element={<Learners />} />
        <Route path='learners/:id' element={<LearnerDetails />} />


    </Routes>
    </BrowserRouter>
  )
}

export default App
