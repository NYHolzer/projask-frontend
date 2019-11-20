const initialState = {
    title: "",
    description: "",
    assigned_by: "",
    project_id: 1
}

export default (state = [], action) => {
    switch(action.type){
        case "UPDATE_NEW_TASK_FORM":
            return {
                ...state,
                [action.formData.name]: action.formData.value
            }
        case "RESET_NEW_TASK_FORM":
            return initialState
        default:
            return state
    }
}