import React from 'react'

const TaskCard = ({ task }) => {
    return (
    <div className="TaskCard">
        {task.title}: {task.description}
    </div>
    )
}

export default TaskCard