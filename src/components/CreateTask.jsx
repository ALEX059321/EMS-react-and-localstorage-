import { useState } from "react"


const CreateTask = (employees,onAssignTask) => {
  const [employee,setEmployee] = useState();
  const [title,setTitle] = useState()
  const [description,setDescription] = useState();

const handleSubmit = (e) => {
  e.preventDefault();


if(!employee || !title || !description){
  alert("pls enter all the fields")
return;
}

onAssignTask({
  employeeEmail: employee,
  title: title,
  description: description
})

setTitle('')
setDescription("")

}


  return (
    <div className="bg-neutral-secondary-soft border border-border-default rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-bold text-text-heading mb-4">Assign Task</h2>
      <form  className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-text-heading mb-1">Employee</label>
          <select className="w-full px-3 py-2 bg-neutral-primary border border-border-default rounded-md text-text-heading text-sm focus:outline-none"
            required 
            
            
            onChange= {(e) => setEmployee(e.target.value)}>
              <option value= "">select</option>
              {/* {employee.map((emp) =>{
                <option key={emp.email} value={emp.email}>
                  {emp.name}
                </option>
              })} */}


               
         

          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-text-heading mb-1" 
          value={title} 
          onChange={((e) => setTitle(e.target.value))}
          
          
          >Task Title</label>
          <input
            type="text"
            placeholder="What needs to be done?"
           
           
            className="w-full px-3 py-2 bg-neutral-primary border border-border-default rounded-md text-text-heading text-sm focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text-heading mb-1"
          value={description}
          onChange={((e) =>setDescription(e.target.value))}
          
          
          >Description</label>
          <textarea
            placeholder="Task description..."
           
           
            rows="3"
            className="w-full px-3 py-2 bg-neutral-primary border border-border-default rounded-md text-text-heading text-sm focus:outline-none"
            required
                 />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-brand hover:bg-brand/90 text-white font-medium rounded-md shadow transition-colors"
        >
          Assign Task
        </button>
      </form>
    </div>
  )
}

export default CreateTask
