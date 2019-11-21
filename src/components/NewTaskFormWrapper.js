import React from 'react';
import TaskForm from './TaskForm.js'
import { createTask } from '../actions/myTasks.js'
import { connect } from 'react-redux'

const NewTaskFormWrapper = ({history, createTask}) => {

    const handleSubmit = (formData, history) => {
        createTask(formData, history)
    }

    return <TaskForm history={history} handleSubmit={handleSubmit} />
};

export default connect(null, {createTask})(NewTaskFormWrapper);