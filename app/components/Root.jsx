import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home.jsx';
import Campus from './Campus.jsx';
import Student from './Student.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import AddStudent from './AddStudent.jsx';

export default class Root extends Component {
    
    render () {
        return (
            <Router>
                <div>
                    <Navbar />
                    <div className="mainBody">
                        <Route path='/campus/:campusId' component={Campus} />
                        <Route exact path='/students/add' component={AddStudent} />
                        <Route exact path='/students' component={Student} />
                        <Route exact path='/' component={Home} />
                    </div>
                    <Footer />
                </div>
            </Router>
        )
    }
}