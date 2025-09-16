import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Home/HomePage'
import SignUp from './pages/Account/SignUp'
import Login from './pages/Account/Login'
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Homepage />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='login' element={<Login />} />
        <Route path='dashboard' element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
