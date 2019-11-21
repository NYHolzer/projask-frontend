import React from 'react';
import { updateTaskForm } from '../actions/taskForm.js'
import { createTask } from '../actions/myTasks.js'
import { connect } from 'react-redux'

const TaskForm = ({formData, users, history, updateTaskForm, createTask}) => {

    const { title, description } = formData

    const handleChange = event => {
        const { name, value } = event.target
        updateTaskForm( name, value )
    }
    
    const handleSubmit = event => {
        event.preventDefault()
        createTask(formData, history)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                placeholder = "title"
                name="title"
                onChange={handleChange}
                value={title}
            />
            <input 
                placeholder = "description"
                name="description"
                onChange={handleChange}
                value={description}
            />
            <input type="submit" value="Create Task"/>
        </form>
    )
    

}

const mapStateToProps = state => {
    return {
        formData: state.taskForm,
        users: state.users
    }
}

export default connect (mapStateToProps, {updateTaskForm, createTask}) (TaskForm);

// Tasks Schema
// t.string "title"
// t.string "description"
// t.string "assigned_by"
// t.string "status_id"
// t.string "dependent_task_id"
// t.string "project_id"