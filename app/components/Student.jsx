import React, { Component } from 'react';
import axios from 'axios';

export default class Student extends Component {
    constructor() {
        super();
        this.state = {
            students : {}
        }
    }
    
    componentDidMount() {
        axios.get(`/api/students`)
        .then(res => res.data)
        .then(students => this.setState({students}))
    }
    
    render() {
        const students = this.state.students;
        return (
            <section>
                <h1>List of all students</h1>
                {students.length && 
                    <div className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                {students.map(student => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            
                        </tr>
                    ))}
                        </tbody>
                    </div>
                }
            </section>
        )
    }
}