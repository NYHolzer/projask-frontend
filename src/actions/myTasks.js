import { resetTaskForm } from './taskForm'

// synchronous actions
export const setMyTasks = (tasks) => {
    return {
        type: "SET_MY_TASKS",
        tasks
    } 
}

export const clearCurrentTasks = () => {
    return {
        type: "CLEAR_CURRENT_TASKS"
    }
}

export const addTask = task => {
    return {
        type: "ADD_TASK",
        task
    }
}

export const updateTaskSuccess = task => {
    return {
        type: "UPDATE_TASK",
        task
    }
}

// asynchronous actions
export const createTask = (taskData, history) => {
    const sendableTaskData = {
        task: {
            title: taskData.title,
            description: taskData.description,
            project_id: "1"
        }
    }
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/tasks", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sendableTaskData)
        })
        .then (r => r.json())
        .then (resp => {
            console.log(resp)
            if (resp.error) {
                alert(resp.error)
            } else {
            dispatch(addTask(resp))
            dispatch(resetTaskForm())
            history.push(`/tasks/${resp.id}`)
        }})
        .catch(console.log)
    }
}


export const updateTask = (taskData, history) => {
    console.log(taskData)
    const sendableTaskData = {
        task: {
            title: taskData.title,
            description: taskData.description,
            project_id: "1"
        }
    }
    return dispatch => {
        return fetch(`http://localhost:3001/api/v1/tasks/${taskData.taskId}`, {
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sendableTaskData)
        })
        .then (r => r.json())
        .then (resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
            dispatch(updateTaskSuccess(resp.data))
            history.push(`/tasks/${resp.id}`)
            }
        })
        .catch(console.log)
    }
}

