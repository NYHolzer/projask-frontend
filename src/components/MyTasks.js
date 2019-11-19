import React from 'react'
import TaskCard from './TaskCard.js'
import { connect } from 'react-redux'


const MyTasks = props => {
    const taskCards = props.tasks.length > 0 ? 
        props.tasks.map(t => <TaskCard task={t} key={t.id}/>) : 
        null
    return (
        taskCards
    )
}

