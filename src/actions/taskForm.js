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