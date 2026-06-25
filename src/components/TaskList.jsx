import React from 'react'

const TaskList = ({ tasks = [], onToggleComplete = () => {} }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 text-text-body">
        <p className="font-medium">No tasks assigned to you yet.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`bg-neutral-primary border rounded-md p-4 flex flex-col justify-between transition-colors ${
            task.completed ? 'border-green-500/20 bg-green-500/[0.01]' : 'border-border-default'
          }`}
        >
          <div>
            <h3 className={`font-bold text-text-heading ${task.completed ? 'line-through text-text-body/50' : ''}`}>
              {task.title}
            </h3>
            <p className={`text-sm text-text-body mt-2 ${task.completed ? 'line-through text-text-body/40' : ''}`}>
              {task.description}
            </p>
          </div>

          <div className="border-t border-border-default/40 pt-3 mt-4 flex justify-end">
            <button
              onClick={() => onToggleComplete(task.id)}
              className={`py-1.5 px-3 rounded text-xs font-semibold shadow transition-colors ${
                task.completed
                  ? 'bg-neutral-tertiary hover:bg-neutral-tertiary/80 text-text-body border border-border-default'
                  : 'bg-brand hover:bg-brand/90 text-white'
              }`}
            >
              {task.completed ? 'Mark Pending' : 'Mark Completed'}
            </button>
          </div>
        </div>
      ))}
    </div>
  )  
}

export default TaskList
