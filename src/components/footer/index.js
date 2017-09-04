import React from 'react';
const style = require('./style.pcss');

export class Footer extends React.Component{
    render(){
        return(
            <div className={ style.wrap }>
                <div>
                    <p>
                        COPYRIGHTⓒHYUNGU LEE, ALL RIGHTS RESERVED
                    </p>
                </div>
            </div>
        )
    }
}