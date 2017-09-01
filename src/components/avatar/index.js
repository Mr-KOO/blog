import React from 'react';
import { Link } from 'react-router-dom';
const style = require('./style.pcss');

export class Avatar extends React.Component{
    render(){
        return(
            <div className={ style.profile }>
                <div className={ style.avatar }>
                    <Link to = "/">
                        <img src="https://cdn-images-1.medium.com/fit/c/48/48/0*661xPjkhrX9h6GVR." className={ style.avatarImg } />
                    </Link>
                </div>
                <div className={ style.profileInfo }>
                    <Link to ="/" className = { style.profileHeader }>
                        Lee Hyungu
                    </Link><br />
                    <a>
                        Aug 30
                    </a>
                    <span> · </span>
                    <span>9 min read</span>
                </div>
            </div>
        )
    }
}