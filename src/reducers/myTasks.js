export default (state = [], action) => {
    switch(action.type){
        case "SET_MY_TASKS":
            return action.tasks
        case "ADD_TASK":
            return state.concat(action.task)
        case "UPDATE_TASK":
            debugger
            return state.map(task => task.id == action.task.id ? action.task : task)
        case "CLEAR_CURRENT_TASKS":
            return [] 
        default:
            return state
    }
}