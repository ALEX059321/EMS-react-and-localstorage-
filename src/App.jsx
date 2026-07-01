import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Admin from './components/Admin.jsx'
import CreateTask from './components/CreateTask.jsx'
import TaskList from './components/TaskList.jsx'
import EmployeeDashboard from './components/EmployeeDashboard.jsx'

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-primary text-text-body">
      <Navbar name="EMS" />
      <main className="flex-grow pt-28 pb-12 px-4 flex items-center justify-center">
        <Routes>
          <Route path='/' element={<EmployeeDashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/tasks' element={<CreateTask />} />
          <Route path='/list' element={<TaskList />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
