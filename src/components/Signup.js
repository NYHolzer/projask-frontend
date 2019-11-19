import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from "../actions/signupForm.js"
import { signup } from "../actions/currentUser.js"


const Signup = ({ signupFormData, updateSignupForm }) => {
    
    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
          ...signupFormData,
          [name]: value
        }
        updateSignupForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        // signup(signupFormData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="name" value={signupFormData.name} name="name" type="text" onChange={handleInputChange}/>
            <input placeholder="username" value={signupFormData.username} name="username" type="text" onChange={handleInputChange}/>
            <input placeholder="password" value={signupFormData.password} name="password" type="text" onChange={handleInputChange}/>
            <input placeholder="work_email" value={signupFormData.name} name="work_email" type="text" onChange={handleInputChange}/>
            <input type="submit" value="Signup"/>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        signupFormData: state.signupForm
    }
}

export default connect(mapStateToProps, { updateSignupForm })(Signup)