export default (state = null, action) => {
    switch(action.type){
        case "SET_CURRENT_USER":
            return action.user
        case "CLEAR_CURRENT_USER":
            return null 
        default:
            return state
    }
}

// Using null because return falsy and will easily be able to see if user