import React from 'react';
import { Link } from 'react-router-dom';
const style = require('./style.pcss');

export class Nav extends React.Component{
    render(){
        return(
            <div className={ style.navBar }>
                <ul>
                    <li><Link to="/">Profile</Link></li>
                    <li><Link to="/">Latest</Link></li>
                </ul>
            </div>
        )
    }
}