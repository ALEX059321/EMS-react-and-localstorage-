import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CreateTask from './CreateTask'
import EmployeeList from './EmployeeList'

const Admin = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [msg, setMsg] = useState()
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false)
  const [employees, setEmployees] = useState([])
  const [tasks, setTasks] = useState([])

 
  window.employee = employees

  const handleInput = (e) => {
    const value = e.target.value
    const id = e.target.id
    if ("email" == id) setEmail(value)
    if ("password" == id) setPassword(value)}

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email == "" || password == "") {
      alert("pls fill all the details")
    } else {
      if ((email === 'admin@ems.com' && password === 'admin123') || (email === 'admin@me.com' && password === 'admin')) {
        setIsAdminLoggedIn(true)
        setEmployees(JSON.parse(localStorage.getItem('users') || '[]'))
        setTasks(JSON.parse(localStorage.getItem('tasks') || '[]'))
        alert('login successful')
      } else {
        setMsg('invalid credentials')
      }
    }
  }

  const handleAssignTask = ({ employeeEmail, title, description }) => {
    const updatedTasks = [...tasks, { id: 'task_' + Date.now(), employeeEmail, title, description, completed: false }]
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
    setTasks(updatedTasks)}

  const handleDeleteTask = (taskId) => {
    if (window.confirm('Delete this task?')) {
      const updatedTasks = tasks.filter((t) => t.id !== taskId)
      localStorage.setItem('tasks', JSON.stringify(updatedTasks))
      setTasks(updatedTasks)}}

  if (isAdminLoggedIn) {
    return (
      <div className="w-full max-w-5xl mx-auto space-y-6">
        <div className="bg-neutral-secondary-soft border border-border-default rounded-lg p-6 shadow-md flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-text-heading">Admin Dashboard</h1>
          </div>
          <div className="flex gap-4">
            <div className="bg-neutral-primary border border-border-default px-4 py-2 rounded-md">
              <span className="block text-xs text-text-body font-medium uppercase">Employees</span>
              <span className="text-xl font-bold text-text-heading">{employees.length}</span>
            </div>
            <div className="bg-neutral-primary border border-border-default px-4 py-2 rounded-md">
              <span className="block text-xs text-text-body font-medium uppercase">Tasks</span>
              <span className="text-xl font-bold text-text-heading">{tasks.length}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <CreateTask employees={employees} onAssignTask={handleAssignTask} />
          </div>
          <div className="md:col-span-2">
            <EmployeeList employees={employees} tasks={tasks} onDeleteTask={handleDeleteTask} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-md p-6 bg-neutral-secondary-soft border border-border-default rounded-lg shadow-xl backdrop-blur-md relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand to-fg-brand" />
      
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-extrabold text-text-heading tracking-tight">Admin Login <p className="text-red-400 text-sm mt-2">{msg}</p> </h2>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-heading mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter ur email"
            onChange={handleInput}
            className="w-full px-4 py-2.5 bg-neutral-primary border border-border-default rounded-md text-text-heading placeholder-text-body/50 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-text-heading mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            onChange={handleInput}
            className="w-full px-4 py-2.5 bg-neutral-primary border border-border-default rounded-md text-text-heading placeholder-text-body/50 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-brand hover:bg-brand/90 text-white font-medium rounded-md shadow-lg"
        >
          Sign In
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-sm text-text-body">
          New user?{' '}
          <Link
            to="/register"
            className="font-semibold text-fg-brand hover:text-brand hover:underline"
          >
            click here
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Admin
