import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import NavBar from './components/NavBar'
import MainContainer from './components/MainContainer'
import MyTasks from './components/MyTasks.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import Home from './components/Home.js'
import TaskForm from './components/TaskForm.js'
import TaskDetail from './components/TaskDetail.js'
import NewTaskFormWrapper from './components/NewTaskFormWrapper'
import EditTaskFormWrapper from './components/EditTaskFormWrapper'

class App extends React.Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }

  render(){
    const {loggedIn, tasks } = this.props
    return (
      <div className="App">
          {loggedIn ? <NavBar /> : <Home /> }
          <Switch>
            <Route exact path='/signup' render={({history}) => <Signup history={history}/>}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/tasks' component={MainContainer}/>
            <Route exact path='/tasks/new' component={NewTaskFormWrapper}/>
            <Route exact path='/tasks/:id' render={props => {
                const task = tasks.find(task => task.id == props.match.params.id)
                return <TaskDetail task={task} {...props} />}}/>
            <Route exact path='/tasks/:id/edit' render={props => {
                const task = tasks.find(task => task.id == props.match.params.id)
                return <EditTaskFormWrapper editMode task={task} {...props} />
                }}/>
          </Switch>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    tasks: state.myTasks
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));