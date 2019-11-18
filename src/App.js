import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login.js'
import Logout from './components/Logout.js'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'

class App extends React.Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }

  render(){
    return (
      // think about having in a Navbar
      this.props.currentUser ? <Logout/> : <Login/>
    );
  }

}

// I know the incoming argument is an object, state, 
// coming from redux and has property called currentUser
const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);