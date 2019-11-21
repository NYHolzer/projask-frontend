// synchronous actions
export const updateNewTaskForm = (name, value) => {
    return {
        type: "UPDATE_NEW_TASK_FORM",
        formData: { name, value }
    }
}

export const resetNewTaskForm = () => {
    return {
        type: "RESET_NEW_TASK_FORM"
    }
}