import React from 'react';
import { Route, withRouter } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import NavBar from './components/NavBar'
import MainContainer from './components/MainContainer'
import MyTasks from './components/MyTasks.js'
import Login from './components/Login.js'
import Logout from './components/Logout.js'
import Signup from './components/Signup.js'
import Home from './components/Home.js'

class App extends React.Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }

  render(){
    const {loggedIn} = this.props
    return (
      <div className="App">
        <NavBar />
          <Route exact path='/' render={ ()=> loggedIn ? <MainContainer/> : <Home/> }/>
          <Route exact path='/signup' render={({history}) => <Signup history={history}/>}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/tasks' component={MyTasks}/>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));