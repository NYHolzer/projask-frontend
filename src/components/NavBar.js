import React from 'react'
import { connect } from 'react-redux'
import Login from './Login.js'
import Logout from './Logout.js'
import { NavLink } from 'react-router-dom'

const NavBar = ({ currentUser }) => {
    return (
        <div className="NavBar">
            {currentUser ? <strong>Welcome, {currentUser.attributes.name}</strong> : ""}
            <NavLink to="/tasks">Tasks  |  </NavLink>
            <NavLink to="/tasks/new"> New Task  |  </NavLink>
            {currentUser ? <Logout/> : <Login/>}
        </div>
    )
}

// I know the incoming argument is an object, state, 
// coming from redux and has property called currentUser
const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser
    }
}

export default connect (mapStateToProps)(NavBar)