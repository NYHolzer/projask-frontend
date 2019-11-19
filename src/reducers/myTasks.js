export default (state = [], action) => {
    switch(action.type){
        case "SET_MY_TASKS":
            return action.tasks
        default:
            return state
    }
}