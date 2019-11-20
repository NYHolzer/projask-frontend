// synchronous actions
export const updateNewTaskForm = (name, value) => {
    return {
        type: "UPDATE_NEW_TASK_FORM",
        formDate: { name, value }
    }
}