import React from 'react'
import { connect } from 'react-redux'
import Login from './Login.js'
import Logout from './Logout.js'

const NavBar = ({ currentUser }) => {
    return (
        <div className="NavBar">
            {currentUser ? <strong>Welcome, {currentUser.name}</strong> : ""}
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