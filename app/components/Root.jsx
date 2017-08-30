import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home.jsx';
import Campus from './Campus.jsx';
import Student from './Student.jsx';
//import Navbar from './Navbar.jsx';
//import Footer from './Footer.jsx';

export default class Root extends Component {
    
    
    
    render () {
        return (
            <Router>
                <div>
                    {/* TO INCLUDE NAVBAR HERE*/}
                    <Route exact path='/' component={Home} />
                    <Route path='/campus/:campusId' component={Campus} />
                    <Route path='/students' component={Student} />
                    {/* TO INCLUDE FOOTER HERE*/}
                </div>
            </Router>
        )
    }
}