import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            campuses: {}
        }
    }
    
    componentDidMount() {
        axios.get(`/api/campuses`)
        .then(res => res.data)
        .then(campuses => this.setState({campuses}))
    }
    
    render() {
        const campuses = this.state.campuses;
        return (
            <section>
                {
                    campuses.length && campuses.map(campus => (
                            <div key={campus.id}>
                                <h4><Link to={`/campus/${campus.id}`}>{campus.name}</Link></h4>
                                <img src={campus.image} />
                            </div>
                        )
                    )
                }
            </section>
        )
    }
}

