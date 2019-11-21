import React from 'react'
import { Link } from 'react-router-dom'

const TaskCard = ({ task }) => {
    return (
    <div className="TaskCard">
        <Link to={{pathname: `/tasks/${task.id}`}}> {task.title}: {task.description} </Link>
    </div>
    )
}

export default TaskCard