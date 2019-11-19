import { resetLoginForm } from './loginForm.js'
import { resetSignupForm } from './signupForm.js'
import { setMyTasks } from './myTasks.js'
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
    console.log("credentials are", credentials) 
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
        dispatch(clearCurrentUser())
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
        dispatch(setCurrentUser(response.data))
        dispatch(setMyTasks(response.data.attributes.myTasks))
        }
    })
    .catch(console.log)
}
}

// signup fetch
export const signup = credentials => {
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
            }
        })
        .catch(console.log)
    }
}