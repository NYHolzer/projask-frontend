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

// Takes in state of store. 
// returns an object who's keys are whatever I want.
const mapStateToProps = state => {
    return {
        tasks: state.myTasks
    }
}

export default connect(mapStateToProps) (MyTasks)