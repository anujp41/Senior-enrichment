import React, { Component } from 'react';
import axios from 'axios';

export default class AddCollege extends Component {
    constructor() {
        super();
        this.state = {
            inputName: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({
            inputName: event.target.value
        })
    }
    
    handleSubmit(event) {
        event.preventDefault();
        const name = this.state.inputName;
        axios.post(`/api/campuses`, { name })
        .then(() => axios.get(`api/campuses`))
        .then(res => res.data)
        .then(campuses => console.log('CAMPUSES ', campuses))
        this.setState({inputName:''})
    }
    
    render() {
        return (
            <div>
              <form 
                  className="form-group formBottom"
                  onSubmit={this.handleSubmit}>
                    <label for="inputName" className="formName">Please Enter College Name Below To Add</label>
                  <button
                    type="submit"
                    className="btn btn-success">
                    Add College
                  </button>
                  <input
                    value={this.state.inputName}
                    className="form-control"
                    placeholder="Please enter college name herein if you wish to add to list of colleges!"
                    onChange={this.handleChange}
                  />
                </form>
            </div>
        )
    }
}