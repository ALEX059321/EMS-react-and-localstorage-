import React, { useEffect, useState } from 'react'
import { use } from 'react';
import { useNavigate } from 'react-router-dom';
import allTasks from './components/TaskList'
const App = () => {

  const navigate = useNavigate();
const [tasks,setTasks] = useState();
const [session,setSession] = useState([])



useEffect(() => {
  const currentSession = JSON.parse(localStorage.getItem('isloggedin'))
if(!currentSession){
  navigate('/login')
  return
}

if(currentSession.role === 'admin'){
  navigate('/admin')
  return}
setSession(currentSession)

// specific assignination

const storedTasks = JSON.parse(localStorage.getItem("tasks") || '[]')
setTasks(storedTasks.filter((t) => {
  t.employeeEmail === currentSession.email
  navigate('/')
}))})

const handleToggle = (taskId) => {
  const allTasks = JSON.parse(localStorage.getItem('tasks') || '[]')
}

const updatedtasks = allTasks.map((tasks) => {
  if(tasks.id == taskId){
    return {...tasks, completed: !tasks.completed}
  } return tasks

localStorage.setItem('tasks', JSON.stringify(updatedtasks))
setTasks(updatedtasks.filter((t) => {
   t.employeeEmail === session?.email
})


)

if(!session) return null

})








  return (
    <div className='w-full max-w-4xl mx-auto px-4'>
      
{/* //greeting */}

<div className="bg-neutral-secondary-soft border border-border-default rounded-lg p-6 shadow-md">

<h1 className='text-2xl font-bold text-text-heading'>welcome
<span className='text-rounded'>{session.name}</span>
</h1>
<p className='bg-neutral-secondary-soft border-border-default rounded-lg p-5 shadow-md'>hello
 <h2 className='text-xl font-bold text-text-heading mb-4'>your tasks</h2>


{/* tasks */}
<tasks tasks = {tasks} toggleComplete = {handleToggle}/>






</p>




</div>















    </div>
  )
}

export default App
