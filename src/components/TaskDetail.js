import React from 'react'

const TaskDetail = ({ task }) => {
    return (
        task ?

        <div> 
            <h3><u>{task.title}</u></h3>
            <h5> Details: </h5> 
            <p> {task.description}</p>

            <label> Assigned_by: </label> {task.assigned_by ? task.assigned_by : "Myself"}
        </div> :

        <p> This is the trip Card with no Trip </p>

    )
}

export default TaskDetail