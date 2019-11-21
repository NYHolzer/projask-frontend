import React from 'react';
import TaskForm from './TaskForm.js'
import { updateTask } from '../actions/myTasks.js'
import { setFormDataForEdit } from '../actions/taskForm.js'
import { connect } from 'react-redux'

class EditTaskFormWrapper extends React.Component {

    // ({history, createTask}) =>
    componentDidMount(){
        this.props.task && this.props.setFormDataForEdit(this.props.task)
    }

    handleSubmit = (formData) => {
        const { updateTask, task, history} = this.props
        updateTask({
            ...formData, 
            taskId: task.id
        }, history)
    }

    render() {
        const { history, handleSubmit } = this.props
        return <TaskForm editMode history={this.history} handleSubmit={this.handleSubmit} />
    } 
    
};

export default connect(null, { updateTask, setFormDataForEdit})(EditTaskFormWrapper);