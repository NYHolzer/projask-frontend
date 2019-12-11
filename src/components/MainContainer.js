import React from 'react'
import MyTasks from './MyTasks.js'


class MainContainer extends React.Component {

    constructor (props) {
        super(props)
        this.state = { pressed: false}
    }

    sortTaskByName = () => {
        this.setState({
            pressed: true
        });
    }

    sortTaskByName(){
        this.setState({
            pressed: true
        });
    }

    render(){
        return(
            <div className="MainContainer">
                <button onClick={this.sortTaskByName.bind(this)} id="sortTaskByName"> SortTaskByName </button>
                <MyTasks pressed={this.state.pressed}/>
            </div>
        )
    }

}


export default MainContainer