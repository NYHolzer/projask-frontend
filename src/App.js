import React from 'react';
import { Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import NavBar from './components/NavBar'
import MainContainer from './components/MainContainer'
import MyTasks from './components/MyTasks.js'
import Login from './components/Login.js'
import Logout from './components/Logout.js'

class App extends React.Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }

  render(){
    return (
      <div className="App">
        <NavBar />
        <MainContainer />
          <Route exact path='/login' component={Login}/>
          <Route exact path='/tasks' component={MyTasks}/>
      </div>
    );
  }

}


export default connect(null, { getCurrentUser })(App);