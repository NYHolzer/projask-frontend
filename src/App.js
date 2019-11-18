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
      <Login />
    );
  }

}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);