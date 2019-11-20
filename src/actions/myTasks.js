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
