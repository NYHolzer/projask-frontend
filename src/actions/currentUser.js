import { resetLoginForm } from './loginForm.js'
import { resetSignupForm } from './signupForm.js'
import { setMyTasks, clearCurrentTasks } from './myTasks.js'
import { setUsers } from './users'

// synchronous action creators
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

// On frontend clearing out the user
export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

// asynchronous action creators
// login fetch
export const login = (credentials, history) => {
    return dispatch => {
        return fetch ("http://localhost:3001/api/v1/login",{
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(r => r.json())
        .then(response => {
            if (response.error){
                alert(response.error)
            } else {
                dispatch(setCurrentUser(response.data))
                dispatch(setMyTasks(response.data.attributes.myTasks))
                dispatch(setUsers(response.data.attributes.users))
                dispatch(resetLoginForm())
                history.push('/')
            }
        })
        .catch(console.log)
    }
}

// clearing session from backend
export const logout = () => {
    return dispatch => {
        // do not need to wait for response. I'm optimistic that user will be logged out.
        dispatch(clearCurrentUser())
        dispatch(clearCurrentTasks())
        return fetch("http://localhost:3001/api/v1/logout", {
            credentials: "include",
            method: "DELETE"
        })
    }
}

// getCurrentUser fetch
export const getCurrentUser = () => {
console.log("DISPATCHING GET CURRENT USER")
return dispatch => {
    return fetch("http://localhost:3001/api/v1/get_current_user", {
    credentials: "include",
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    },
    })
    .then(r => r.json())
    .then(response => {
        if (response.error) {
        alert(response.error)
        } else {
        console.log(response.data)
        dispatch(setCurrentUser(response.data))
        dispatch(setMyTasks(response.data.attributes.myTasks))
        dispatch(setUsers(response.data.attributes.users))
        }
    })
    .catch(console.log)
}
}

// signup fetch
export const signup = (credentials, history) => {
    return dispatch => {
        const userInfo = {
            user: credentials
        }
        return fetch ("http://localhost:3001/api/v1/signup",{
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
        .then(r => r.json())
        .then(response => {
            if (response.error){
                alert(response.error)
            } else {
                dispatch(setCurrentUser(response.data))
                dispatch(setMyTasks(response.data.attributes.myTasks))
                dispatch(resetSignupForm())
                history.push('/')
            }
        })
        .catch(console.log)
    }
}