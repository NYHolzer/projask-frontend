import React from 'react'
import { connect } from 'react-redux'
import Login from './Login.js'
import Logout from './Logout.js'
import { NavLink } from 'react-router-dom'

const NavBar = ({ currentUser, LoggedIn }) => {
    return (
        <div className="NavBar">
            {currentUser ? <strong>Welcome, {currentUser.attributes.name}</strong> : ""}
            <NavLink exact activeclass="true" to="/tasks">Tasks  |  </NavLink>
            <NavLink exact activeclass="true" to="/tasks/new"> New Task  |  </NavLink>
            {currentUser ? <Logout/> : null}
        </div>
    )
}

// I know the incoming argument is an object, state, 
// coming from redux and has property called currentUser
const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser,
      loggedIn: !!currentUser
    }
}

export default connect (mapStateToProps)(NavBar)