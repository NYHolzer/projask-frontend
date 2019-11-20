import React from 'react';
import { updateNewTaskForm } from '../actions/newTaskForm.js'
import { connect } from 'react-redux'

const NewTaskForm = ({title, description, assigned_by, project_id}) => {

    const handleChange = event => {
        const { name, value} = event.target
        updateNewTaskForm(name, value)
    }

    return(
        <form>
            <input 
                placeholder = "title"
                name="title"
                onChange={handleChange}
                value={""}
            />
            <input 
                placeholder = "description"
                name="description"
                onChange={handleChange}
                value={""}
            />
            <input 
                placeholder="assigned by"
                name="assigned_by"
                onChange={handleChange}
                value={""}
            />
            <input 
                placeholder= "project name"
                name="project_id"
                onChange={handleChange}
                value={""} 
            />
            <input type="submit" value="Create Task"/>
        </form>
    )
    

}

const mapStateToProps = state => {
    const {title, description, assigned_by, project_id} = state.NewTaskForm
    return {
        title,
        description,
        assigned_by,
        project_id
    }
}

export default connect (mapStateToProps, {updateNewTaskForm}) (NewTaskForm);

// Tasks Schema
// t.string "title"
// t.string "description"
// t.string "assigned_by"
// t.string "status_id"
// t.string "dependent_task_id"
// t.string "project_id"