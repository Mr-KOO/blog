import React from 'react';
const style = require('./style.pcss');

export class Nav extends React.Component{
    render(){
        return(
            <div className={ style.navBar }>
                <ul>
                    <li><a href="././index.html">Profile</a></li>
                    <li><a>Latest</a></li>
                </ul>
            </div>
        )
    }
}