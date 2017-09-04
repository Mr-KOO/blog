import React from 'react';
import 'babel-polyfill';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from '../routes/Home';
import { About } from '../routes/About';

export class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                    </switch>
                </div>
            </Router>
        )
    }
}