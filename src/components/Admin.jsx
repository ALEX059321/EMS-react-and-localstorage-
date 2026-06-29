import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const [isAdminlogged,setIsAdminLoggedIn] = useState(false);
const [emloyee,setEmployee] = useState([]);
const [tasks,setTasks] = useState([]);
const [msg,setMsg] = useState('');


const handleInput = (e) => {
const value = e.target.value
const id = e.target.id

if('email' === id){
  setEmail(value)
}
if('password' === id){
  setPassword(value)}}

 const handleSubmit = (e) => {
  e.preventDefault()

if((email == "admin@gmail.com" && password == "admin123")||(email === 'admin@gmail.com' && password === 'admin')){
setIsAdminLoggedIn(true);
setEmployee(JSON.parse(localStorage.getItem('users') || '[]'))
setTasks(JSON.parse(localStorage.getItem('tasks')|| '[]'))

alert("Admin loggedIn successfully")
}
else{
return setMsg("invalid credentials")
}

 }

 
if(isAdminlogged){ 
return
const handleAssignTask = ({employeeEmail,title,description}) => {
  const updateTasks = [...tasks,{id:'tasks'+ Date.now(),
  employeeEmail,title,description,completed:false}]
 localStorage.setItem('Tasks', JSON.stringify(updateTasks))
 setTasks(updateTasks)

}

const handleDeleteTask = (taskId) => {
  if(window.confirm("delete this task?")){
    const updatedTask = tasks.filter((t) => {
      t.id = taskId
      localStorage.setItem("Tasks",JSON.stringify(updatedTask))
    })
  }
}
}



      <div className="w-full max-w-5xl mx-auto space-y-6">
        <div className="bg-neutral-secondary-soft border border-border-default rounded-lg p-6 shadow-md flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-text-heading">Admin Dashboard</h1>
          </div>
          <div className="flex gap-4">
            <div className="bg-neutral-primary border border-border-default px-4 py-2 rounded-md">
              <span className="block text-xs text-text-body font-medium uppercase">Employees</span>
              <span className='text-xl font-bold text-text-heading'>{employees.length}</span>
              <CreateTask employees={employees} onAssignTask={handleAssignTask} />
             
            </div>
            <div className="bg-neutral-primary border border-border-default px-4 py-2 rounded-md">
              <span className="block text-xs text-text-body font-medium uppercase">Tasks</span>
               <span className='text-xl font-bold text-text-heading'>{tasks.length}</span>
               
               

            
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            
            
          </div>
          <div className="md:col-span-2">


            <CreateTask employees={employees} onAssignTask={handleAssignTask}/>
            <EmployeeList employees={employees} tasks={tasks} onDeleteTask={handleDeleteTask} />
          </div>
        </div>
      </div> 
  return (
    <div className="w-full max-w-md p-6 bg-neutral-secondary-soft border border-border-default rounded-lg shadow-xl backdrop-blur-md relative overflow-hidden transition-all duration-300 hover:shadow-brand/10 hover:border-brand/30">
     
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand to-fg-brand" />
      
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-extrabold text-text-heading tracking-tight">Admin </h2>
        <p>{msg}</p>
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
            className="w-full px-4 py-2.5 bg-neutral-primary border border-border-default rounded-md text-text-heading placeholder-text-body/50 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all duration-200"
            required
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
            className="w-full px-4 py-2.5 bg-neutral-primary border border-border-default rounded-md text-text-heading placeholder-text-body/50 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all duration-200"
            required
          />
        </div>


        <button
          type="submit"
          className="w-full py-3 px-4 bg-brand hover:bg-brand/90 text-white font-medium rounded-md shadow-lg shadow-brand/20 hover:shadow-brand/30 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand/50"
        >
          Sign In
        </button>
      </form>

      <div className="mt-8 text-center">
       
      </div>
    </div>
  )
}

export default Admin
