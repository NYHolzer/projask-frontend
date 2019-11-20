import React from 'react';
import { updateNewTaskForm } from '../actions/newTaskForm.js'
import { createTask } from '../actions/myTasks.js'
import { connect } from 'react-redux'

const NewTaskForm = ({formData, users, history, updateNewTaskForm, createTask}) => {

    const { title, description } = formData

    const handleChange = event => {
        const { name, value } = event.target
        updateNewTaskForm( name, value )
    }
    
    const handleSubmit = event => {
        event.preventDefault()
        createTask(formData)
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
            {/* <input 
                placeholder="assigned by"
                name="assigned_by"
                onChange={handleChange}
                value={assigned_by}
            />
            <input 
                placeholder= "project name"
                name="project_id"
                onChange={handleChange}
                value={project_id} 
            /> */}
            <input type="submit" value="Create Task"/>
        </form>
    )
    

}

const mapStateToProps = state => {
    return {
        formData: state.newTaskForm,
        users: state.users
    }
}

export default connect (mapStateToProps, {updateNewTaskForm, createTask}) (NewTaskForm);

// Tasks Schema
// t.string "title"
// t.string "description"
// t.string "assigned_by"
// t.string "status_id"
// t.string "dependent_task_id"
// t.string "project_id"