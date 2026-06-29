import React from 'react'


  return (
    <div className="bg-neutral-secondary-soft border border-border-default rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-bold text-text-heading mb-4">Employees & Tasks</h2>
      
     
        <p className="text-sm text-text-body">No employees registered yet.</p>
    
        <div className="space-y-4 max-h-[450px] overflow-y-auto pr-2">
        
            return (
              <div  className="bg-neutral-primary border border-border-default rounded-md p-4">
                <div className="flex justify-between items-center border-b border-border-default pb-2 mb-2">
                  <div>
                    <h3 className="font-bold text-text-heading"></h3>
                    <p className="text-xs text-text-body"></p>
                  </div>
                  <span className="text-xs px-2 py-0.5 bg-neutral-tertiary border border-border-default rounded text-text-heading">
                    Tasks
                  </span>
                </div>
                  <p className="text-xs text-text-body italic">No tasks assigned.</p>
                  <div className="space-y-2">
                      <div className="flex justify-between items-center bg-neutral-secondary-soft border border-border-default/50 rounded p-2 text-sm">
                        <div>
                          <p className="font-medium text-text-heading">title</p>
                          <p className="text-xs text-text-body">description</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`text-xs px-2 py-0.5 rounded font-semibold' 
                           "completed tasks" 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'
                          }`}>
                          </span>
                          <button deleted tasks
                            className="text-text-body hover:text-red-400 transition-colors"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    )
                  </div>
                
              </div>
          
        </div>
    
    </div>
  )


export default EmployeeList
