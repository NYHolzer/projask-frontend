import React from 'react';
import { updateTaskForm } from '../actions/taskForm.js'
import { connect } from 'react-redux'

const TaskForm = ({formData, users, history, updateTaskForm, task, handleSubmit, editMode }) => {

    const { title, description } = formData

    const handleChange = event => {
        const { name, value } = event.target
        updateTaskForm( name, value )
    }
    
    return(
        <form onSubmit={event => {
            event.preventDefault()
            handleSubmit(formData, history)
          }}>
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
            <input type="submit" value={ editMode ? "Update Task" : "Create Trip"}/>
        </form>
    )
    

}

const mapStateToProps = state => {
    return {
        formData: state.taskForm,
        users: state.users
    }
}

export default connect (mapStateToProps, {updateTaskForm }) (TaskForm);

// Tasks Schema
// t.string "title"
// t.string "description"
// t.string "assigned_by"
// t.string "status_id"
// t.string "dependent_task_id"
// t.string "project_id"