export default (state = [], action) => {
    switch(action.type){
        case "SET_MY_TASKS":
            return action.tasks
        case "ADD_TASK":
            return state.tasks.concat(action.tasks)
        case "CLEAR_CURRENT_TASKS":
            return [] 
        default:
            return state
    }
}