import React, { Component } from 'react';
import axios from 'axios';

export default class AddStudent extends Component {
    
    constructor() {
        super();
        this.state ={
            campuses: {},
            studentName: '',
            studentEmail: '',
            campusId: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
        axios.get(`/api/campuses`)
        .then(res => res.data)
        .then(campuses => this.setState({campuses}))
        .catch(console.error)
    }
    
    handleChange() {
        
    }
    
    handleSubmit() {
        
    }
    
    render() {
        console.log('ADD STUDENT ', this.state);
        return (
            <section>
                <h1>Please enter the information for the new student!</h1>
                <h3>Note that all fields are required to create a new student</h3>
                <form className="form-group" style={{marginTop: '20px'}}>
                    <label for="inputName">Student Name</label>
                  <input
                    className="form-control"
                    placeholder="Enter full name of the student"   
                  />
                    <label for="inputEmail">Student Email Address</label>
                  <input
                    className="form-control"
                    placeholder="Enter email address of the student"   
                  />
                    <label for="inputEmail">Select College for Student</label>
                  <input
                    className="form-control"
                    placeholder="Enter email address of the student"   
                  />
                </form>
            </section>
        )
    }
}