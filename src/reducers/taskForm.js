const initialState = {
    title: "",
    description: ""
    // assigned_by: "",
    // project_id: ""
}

export default (state = initialState, action) => {
    switch(action.type){
        case "UPDATE_NEW_TASK_FORM":
            const returnVal = {
                ...state,
                [action.formData.name]: action.formData.value
            }
            return returnVal
        case "RESET_NEW_TASK_FORM":
            return initialState
        case "SET_FORM_DATA_FOR_EDIT":
            return action.taskFormData
        default:
            return state
    }
}