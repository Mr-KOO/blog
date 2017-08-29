import React from 'react';
const style = require('./style.pcss');

export class Contents extends React.Component{
    render(){
        return(
            <div className={ style.wrap }>
                <div className={ style.container }>
                    <div>
                        <span>Contents</span>
                    </div>
                    <div>
                        <div>
                            Header
                        </div>
                        <div>
                            img
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}