import React from 'react'
import TaskCard from './TaskCard.js'
import { connect } from 'react-redux'

const MyTasks = props => {
    const taskCards = props.tasks.length > 0 ? 
        props.tasks.map(t => <TaskCard task={t} key={t.id}/>) : 
        null
    const sortedTaskCards = props.tasks.map(t => <TaskCard task={t} taskName={t.title} key={t.id}/>).sort((a,b) => {
                    var titleA = a.props.taskName.toUpperCase(); // ignore upper and lowercase
                    var titleB = b.props.taskName.toUpperCase();
                        if (titleA > titleB){
                            return 1
                        } else if (titleA < titleB){
                            return -1
                        }
                    })
    const pressed = props.pressed

    return (
        pressed ? sortedTaskCards : taskCards
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