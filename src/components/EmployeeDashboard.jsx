import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Tasks from './TaskList'



const EmployeeDashboard = () => {
   const navigate = useNavigate();
 const [tasks,setTasks] = useState([])
 const [session,setSession] = useState ({})

useEffect(() => {
  const currentSession = JSON.parse(localStorage.getItem('loggedInUser'))
  if(!currentSession){
    navigate('/login')
   return }
  if(currentSession.role == 'admin'){
    navigate('/admin')
  return}
  setSession(currentSession)


// specific asssigned tasks

const storedTasks = JSON.parse(localStorage.getItem("tasks") || '[]')
setTasks(storedTasks.filter((t) => {
  return t.employeeEmail == currentSession.email
}))
},[navigate])


//toggle of copmpletion


const handletoggle = (taskId) => {
const allTasks = JSON.parse(localStorage.getItem('tasks') || '[]')

const updatedTasks = allTasks.map((task) => {
  if(task.id == taskId){
    return{...task,completed: !task.completed}
  }
  return task
})

localStorage.setItem('tasks', JSON.stringify(updatedTasks))
setTasks(updatedTasks.filter((t) => {
  return t.employeeEmail == session?.email
}))




}





  return (
    <div className='bg-neutral-secondary-soft border border-border-default w-full max-w-4xl mx-auto px-4'>
     
     {/* name */}

     <div className="bg-neutral-secondary-soft border border-border-default rounded-lg p-6 shadow-md">


      <h1 className='text-2xl font-semibold text-text-heading'>welcome
        

        <span className='text-rounded '>{session?.name}</span>
      </h1>





<p className='bg-neutral-secondary-soft border-border-default rounded-lg p-6'>Hello
  <h2 className='text-xl font-bold mb-4'>your tasks</h2>
 <Tasks tasks={tasks} onToggleComplete={handletoggle}/>
</p>



     </div>



      
    </div>
  )
}

export default EmployeeDashboard
