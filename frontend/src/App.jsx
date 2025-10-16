import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Home/HomePage'
import SignUp from './pages/Account/SignUp'
import Login from './pages/Account/Login'
import './App.css'
import CoursesCreation from './pages/Instructors/CoursesCreation'
import Learners from './pages/LearnersManagement/Learners'
import AutoDashboard from './components/AutoDashboard'
import LearnerDetails from './pages/LearnersManagement/LearnerDetails'
import UnauthorizedComponent from './components/Unauthorized'
import CoursesList from './pages/Learners/CoursesList'
import CourseDetails from './pages/Learners/CourseDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Homepage />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='login' element={<Login />} />
        <Route path='dashboard' element={<AutoDashboard />} />
        <Route path='courses/create' element={<CoursesCreation />} />
        <Route path='courses' element={<CoursesList />} />
        <Route path='courses/:id' element={<CourseDetails />} />
        <Route path='accounts' element={<Learners />} />
        <Route path='accounts/:id' element={<LearnerDetails />} />
        <Route path='hakuna' element={<UnauthorizedComponent />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
