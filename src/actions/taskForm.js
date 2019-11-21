// synchronous actions
export const updateTaskForm = (name, value) => {
    return {
        type: "UPDATE_NEW_TASK_FORM",
        formData: { name, value }
    }
}

export const resetTaskForm = () => {
    return {
        type: "RESET_NEW_TASK_FORM"
    }
}

export const setFormDataForEdit = task => {
    console.log(task)
    const taskFormData = {
        title: task.title,
        description: task.description
    }
    return {
        type: "SET_FORM_DATA_FOR_EDIT",
        taskFormData
    }
}