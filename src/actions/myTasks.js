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

// asynchronous actions
export const createTask = (taskData) => {
    const sendableTaskData = {
        task: {
            title: taskData.title,
            description: taskData.description
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
        .then (console.log)
    }
}
